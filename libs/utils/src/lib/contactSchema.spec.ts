import { contactSchema, ContactSchema } from './contactSchema';

describe('Contact Schema', () => {
    it('should validate a valid contact object', () => {
        const validContact: ContactSchema = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            subject: 'Test Subject',
            message: 'Test message',
        };

        expect(contactSchema.safeParse(validContact).success).toBe(true);
    });

    it('should fail validation if name is empty', () => {
        const invalidContact: ContactSchema = {
            name: '',
            email: 'john.doe@example.com',
            subject: 'Test Subject',
            message: 'Test message',
        };

        expect(contactSchema.safeParse(invalidContact).success).toBe(false);
    });

    it('should fail validation if email is invalid', () => {
        const invalidContact: ContactSchema = {
            name: 'John Doe',
            email: 'invalid-email',
            subject: 'Test Subject',
            message: 'Test message',
        };

        expect(contactSchema.safeParse(invalidContact).success).toBe(false);
    });

    it('should fail validation if subject is empty', () => {
        const invalidContact: ContactSchema = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            subject: '',
            message: 'Test message',
        };

        expect(contactSchema.safeParse(invalidContact).success).toBe(false);
    });

    it('should fail validation if message is empty', () => {
        const invalidContact: ContactSchema = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            subject: 'Test Subject',
            message: '',
        };

        expect(contactSchema.safeParse(invalidContact).success).toBe(false);
    });
});
