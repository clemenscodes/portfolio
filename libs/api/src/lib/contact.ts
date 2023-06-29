import { ipRateLimit } from './ip-rate-limit';
import { Email } from '@components';
import { contact, i18nApi } from '@config';
import { render } from '@react-email/render';
import type { Locale } from '@types';
import { contactSchema, type ContactSchema } from '@utils';
import type { IncomingHttpHeaders } from 'http';
import { sanitize } from 'isomorphic-dompurify';
import { NextApiHandler } from 'next';
import { createTransport } from 'nodemailer';
import type { Options as MailOptions } from 'nodemailer/lib/mailer';
import type { SentMessageInfo, Options as SMTPOptions } from 'nodemailer/lib/smtp-transport';
import React from 'react';

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
    if (!acceptLanguage) {
        return 'en';
    }

    if (acceptLanguage.includes('de')) {
        return 'de';
    }

    if (acceptLanguage.includes('es')) {
        return 'es';
    }

    return 'en';
};

export const getSMTPOptions = (): SMTPOptions => {
    const host = process.env['SMTP_HOST'];

    if (!host) {
        throw Error(`Host is undefined. Check process.env.SMTP_HOST`);
    }

    const port = (process.env['SMTP_PORT'] || 465) as number;
    const secure = (process.env['SMTP_SECURE'] || true) as boolean;
    const user = process.env['SMTP_USER'];

    if (!user) {
        throw Error(`SMTP user undefined. Check process.env.SMTP_HOST`);
    }

    const pass = process.env['SMTP_PASS'];

    if (!pass) {
        throw Error(`SMTP pass is undefined. Check process.env.SMTP_PASS`);
    }

    const privateKey = process.env['DKIM_KEY'];

    if (!privateKey) {
        throw Error(`DKIM private key is undefined. Check process.env.DKIM_KEY`);
    }

    const smtpTransportOptions: SMTPOptions = {
        host,
        port,
        secure,
        auth: { user, pass },
        dkim: {
            domainName: 'clemenshorn.com',
            keySelector: 'mail',
            cacheDir: '/tmp',
            cacheTreshold: 100 * 1024,
            privateKey,
        },
        requireTLS: true,
        tls: {
            rejectUnauthorized: true,
            ciphers: 'SSLv3',
        },
        debug: true,
        logger: true,
    };

    return smtpTransportOptions;
};

export const contactHandler: NextApiHandler = async (req, res) => {
    const response = await ipRateLimit(req, res);

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

    if (!messages) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }

    const { name, email, subject, message } = body;
    const cleanMessage = sanitize(message);
    const cleanSubject = sanitize(subject);
    const props = { subject: cleanSubject, message: cleanMessage };
    const emailElement = React.createElement(Email, props);
    const text = render(emailElement, { plainText: true });

    const emailOptions: MailOptions = {
        from: `${name} <${contact.email}>`,
        to: contact.email,
        replyTo: email,
        subject: cleanSubject,
        text,
    };

    try {
        const smtpTransportOptions = getSMTPOptions();

        const transporter = createTransport(smtpTransportOptions);

        await transporter.verify();

        const message: SentMessageInfo = await transporter.sendMail(emailOptions);

        if (!message.accepted) {
            res.status(500).json({ error: messages.contact.error });
            return;
        }

        res.status(200).json({ message: messages.contact.success });
    } catch (e) {
        console.error(`${messages.contact.error}: ${JSON.stringify(e)}`);
        res.status(500).json({ error: messages.contact.error });
    }
};
