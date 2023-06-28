import { ipRateLimit } from '@api';
import { contact, greeting, i18nApi } from '@config';
import type { Locale } from '@types';
import { type ContactSchema, contactSchema } from '@utils';
import { IncomingHttpHeaders } from 'http';
import { NextApiHandler } from 'next';
import { createTransport } from 'nodemailer';
import type { Options as MailOptions } from 'nodemailer/lib/mailer';
import type { Options as SMTPOptions, SentMessageInfo } from 'nodemailer/lib/smtp-transport';

export function assertIsContactData(data: unknown): asserts data is ContactSchema {
    if (!contactSchema.safeParse(data).success) {
        throw new Error('Invalid data');
    }
}

export const getLocale = (headers: IncomingHttpHeaders): Locale => {
    if (!('accept-language' in headers)) {
        return 'en';
    }

    const acceptLanguage = headers['accept-language'];

    if (acceptLanguage.includes('de')) {
        return 'de';
    }

    if (acceptLanguage.includes('es')) {
        return 'es';
    }

    return 'en';
};

export const handler: NextApiHandler = async (req, res) => {
    const response = await ipRateLimit(req, res);
    // If the status is not 200 then it has been rate limited.
    if (response.statusCode !== 200) {
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const { body, headers } = req;

    try {
        assertIsContactData(body);
    } catch (e) {
        if (!(e instanceof Error)) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(405).json({ error: e.message });
        return;
    }

    const locale: Locale = getLocale(headers);
    const messages = i18nApi.get(locale);
    const { name, email, subject, message } = body;

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
        requireTLS: true,
        tls: {
            rejectUnauthorized: true,
            ciphers: 'SSLv3',
        },
        dsn: {
            envid: 'some random message specific id',
            ret: 'Full',
            notify: ['SUCCESS', 'FAILURE', 'DELAY'],
            orcpt: contact.email,
        },
        debug: true,
        logger: true,
    };

    const transporter = createTransport(smtpTransportOptions);

    const emailOptions: MailOptions = {
        from: `${name} <${contact.email}>`,
        to: contact.email,
        replyTo: email,
        subject,
        text: message,
    };

    const replyMailOptions: MailOptions = {
        from: `${greeting.name} <${contact.email}>`,
        to: email,
        replyTo: contact.email,
        subject: 'Thank you for contacting me',
        text: `Dear ${name},\n\nI have received your message and will reply as soon as possible.\n\nBest regards,\n${greeting.name}`,
    };

    try {
        // await transporter.verify();

        // let message: SentMessageInfo = await transporter.sendMail(emailOptions);

        // if (!message.accepted) {
        //     res.status(500).json({ error: messages.contact.error });
        //     return;
        // }

        // message = await transporter.sendMail(replyMailOptions);

        // if (!message.accepted) {
        //     res.status(500).json({ error: messages.contact.error });
        //     return;
        // }

        res.status(200).json({ message: messages.contact.success });
    } catch (e) {
        console.error(`${messages.contact.error}: ${JSON.stringify(e)}`);
        res.status(500).json({ error: messages.contact.error });
    }
};

export default handler;
