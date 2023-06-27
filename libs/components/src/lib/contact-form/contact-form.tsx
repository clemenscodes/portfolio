import Button from '../button/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@styles';
import { ContactSchema, contactSchema } from '@utils';
import { useForm } from 'react-hook-form';

export type ContactFormProps = React.ComponentPropsWithoutRef<'form'>;

export const ContactForm: React.FC<ContactFormProps> = ({ ...props }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: '',
            subject: '',
            message: '',
            name: '',
            number: '',
        },
    });

    const onSubmit = (values: ContactSchema) => {
        console.log({ values });
    };

    return (
        <form
            className={cn([
                'flex flex-col items-center justify-center space-y-4',
            ])}
            {...props}
            onSubmit={handleSubmit(onSubmit)}
        >
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' {...register('name')} />
            <p>{errors.name?.message}</p>
            <label htmlFor='email'>E-Mail</label>
            <input type='text' {...register('email')} />
            <p>{errors.email?.message}</p>
            <label htmlFor='subject'>Subject</label>
            <input type='text' {...register('subject')} />
            <p>{errors.subject?.message}</p>
            <label htmlFor='message'>Message</label>
            <input type='text' {...register('message')} />
            <p>{errors.message?.message}</p>
            <label htmlFor='number'>number</label>
            <input type='text' {...register('number')} />
            <p>{errors.number?.message}</p>
            <Button type='submit'>Send</Button>
        </form>
    );
};

export default ContactForm;
