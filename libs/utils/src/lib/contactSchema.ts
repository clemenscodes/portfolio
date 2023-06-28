import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().nonempty(),
    email: z
        .string()
        .email()
        .refine((value) => !value.includes('t-online')),
    subject: z.string().nonempty(),
    message: z.string().nonempty(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
