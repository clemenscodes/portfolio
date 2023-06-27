import { contact, greeting } from '@config';
import { ContactSchema, contactSchema } from '@utils';
import { NextApiHandler } from 'next';
import { createTransport } from 'nodemailer';
import type { Options as MailOptions } from 'nodemailer/lib/mailer';
import type { Options as SMTPOptions } from 'nodemailer/lib/smtp-transport';

export function assertIsContactData(data: unknown): asserts data is ContactSchema {
    if (!contactSchema.safeParse(data).success) {
        throw new Error('Invalid contact data');
    }
}

export async function mail(mail: MailOptions, smtp: SMTPOptions) {
    const transporter = createTransport({
        ...smtp,
        requireTLS: true,
        tls: {
            rejectUnauthorized: false,
            ciphers: 'SSLv3',
        },
        debug: true,
        logger: true,
    });
    await transporter.verify();
    await transporter.sendMail(mail);
}

export const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'POST') {
        const { body } = req;

        try {
            assertIsContactData(body);
        } catch {
            res.status(405).json({ error: 'Invalid data' });
        }

        const { name, email, subject, message } = body;

        try {
            const emailOptions: MailOptions = {
                from: `${name} <${contact.email}>`,
                to: contact.email,
                replyTo: email,
                subject,
                text: message,
            };

            const smtpTransportOptions: SMTPOptions = {
                host: process.env.SMTP_HOST,
                port: (process.env.SMTP_PORT || 587) as number,
                secure: (process.env.SMTP_SECURE || false) as boolean,
                auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
                dkim: {
                    domainName: 'clemenshorn.com',
                    keySelector: 'mail',
                    cacheDir: '/tmp',
                    cacheTreshold: 100 * 1024,
                    privateKey: process.env.DKIM_KEY,
                },
            };

            await mail(emailOptions, smtpTransportOptions);

            const replyMailOptions: MailOptions = {
                from: `${greeting.name} <${contact.email}>`,
                to: email,
                replyTo: contact.email,
                subject: 'Thank you for contacting me',
                text: `Dear ${name},\n\nI have received your message and will reply as soon as possible.\n\nBest regards,\n${greeting.name}`,
            };

            await mail(replyMailOptions, smtpTransportOptions);

            res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
        } catch (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handler;
