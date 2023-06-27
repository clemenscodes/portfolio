import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
    number: z.string(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
