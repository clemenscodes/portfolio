import Button from '../button/button';
import { ErrorMessage } from '../error-message/error-message';
import { Input } from '../input/input';
import { TextArea } from '../text-area/text-area';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@styles';
import { IContactForm } from '@types';
import { ContactSchema, contactSchema } from '@utils';
import { useForm } from 'react-hook-form';

export type ContactFormProps = React.ComponentPropsWithoutRef<'form'> & {
    form: IContactForm;
};

export const ContactForm: React.FC<ContactFormProps> = ({ form, ...props }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
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
            <div className={cn('flex w-full justify-between space-x-8')}>
                <div className={cn('w-full space-y-2')}>
                    <div className={cn('flex')}>
                        <label htmlFor='name'>{form.nameInput.name}</label>
                    </div>
                    <Input
                        id='name'
                        type='text'
                        placeholder={form.nameInput.description}
                        {...register('name')}
                    />
                    <ErrorMessage>
                        {errors.name && form.nameInput.error}
                    </ErrorMessage>
                </div>

                <div className={cn('w-full space-y-2')}>
                    <div className={cn('flex')}>
                        <label htmlFor='email'>{form.emailInput.name}</label>
                    </div>
                    <Input
                        type='text'
                        placeholder={form.emailInput.description}
                        {...register('email')}
                    />
                    <ErrorMessage>
                        {errors.email && form.emailInput.error}
                    </ErrorMessage>
                </div>
            </div>

            <div className={cn('w-full space-y-2')}>
                <div className={cn('flex')}>
                    <label htmlFor='subject'>{form.subjectInput.name}</label>
                </div>
                <Input
                    type='text'
                    placeholder={form.subjectInput.description}
                    {...register('subject')}
                />
                <ErrorMessage>
                    {errors.subject && form.subjectInput.error}
                </ErrorMessage>
            </div>

            <div className={cn('w-full space-y-2')}>
                <div className={cn('flex')}>
                    <label htmlFor='message'>{form.messageInput.name}</label>
                </div>
                <TextArea
                    className={cn('h-48')}
                    placeholder={form.messageInput.description}
                    {...register('message')}
                />
                <ErrorMessage>
                    {errors.message && form.messageInput.error}
                </ErrorMessage>
            </div>

            <Button type='submit'>Send</Button>
        </form>
    );
};

export default ContactForm;
