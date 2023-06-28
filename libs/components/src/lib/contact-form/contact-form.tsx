import Button from '../button/button';
import Emoji from '../emoji/emoji';
import { ErrorMessage } from '../error-message/error-message';
import { Input } from '../input/input';
import Loader from '../loader/loader';
import { TextArea } from '../text-area/text-area';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@styles';
import { IContactForm } from '@types';
import { ContactSchema, contactSchema } from '@utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type ContactFormProps = React.ComponentPropsWithoutRef<'form'> & {
    form: IContactForm;
};

export const ContactForm: React.FC<ContactFormProps> = ({ form, ...props }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
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

    const onSubmit = async (values: ContactSchema) => {
        try {
            setEmailSuccess(false);
            setIsSubmitting(true);
            setEmailSubmitted(true);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            reset();
            setTimeout(() => {
                if (response.ok) {
                    setEmailSuccess(true);
                } else {
                    setEmailSuccess(false);
                }
                setIsSubmitting(false);
            }, 2500);
        } catch (error) {
            setEmailSuccess(false);
        }
    };

    return (
        <form
            className={cn([
                'flex flex-col items-center justify-center space-y-4',
            ])}
            {...props}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className={cn(
                    'flex w-full flex-col justify-between',
                    'lg:flex-row lg:space-x-8'
                )}
            >
                <div className={cn('w-full space-y-2')}>
                    <div className={cn('flex')}>
                        <label htmlFor='name'>{form.nameInput.name}</label>
                    </div>
                    <Input
                        id='name'
                        type='text'
                        disabled={isSubmitting}
                        placeholder={form.nameInput.description}
                        {...register('name')}
                    />
                    <ErrorMessage>
                        {errors.name && form.nameInput.error}
                    </ErrorMessage>
                    <div className={cn('flex')}>
                        <label htmlFor='email'>{form.emailInput.name}</label>
                    </div>
                    <Input
                        type='text'
                        placeholder={form.emailInput.description}
                        disabled={isSubmitting}
                        {...register('email')}
                    />
                    <ErrorMessage>
                        {errors.email && form.emailInput.error}
                    </ErrorMessage>
                    <div className={cn('flex')}>
                        <label htmlFor='subject'>
                            {form.subjectInput.name}
                        </label>
                    </div>
                    <Input
                        type='text'
                        placeholder={form.subjectInput.description}
                        disabled={isSubmitting}
                        {...register('subject')}
                    />
                    <ErrorMessage>
                        {errors.subject && form.subjectInput.error}
                    </ErrorMessage>
                    <div className={cn('flex')}>
                        <label htmlFor='message'>
                            {form.messageInput.name}
                        </label>
                    </div>
                    <TextArea
                        className={cn('h-48')}
                        placeholder={form.messageInput.description}
                        disabled={isSubmitting}
                        {...register('message')}
                    />
                    <ErrorMessage>
                        {errors.message && form.messageInput.error}
                    </ErrorMessage>
                </div>
            </div>

            <Button
                type='submit'
                className={cn(
                    'flex h-12 w-full flex-col items-center justify-center'
                )}
                onClick={() => setEmailSuccess(false)}
            >
                {isSubmitting ? (
                    <Loader />
                ) : (
                    <Emoji emoji='📩' label={'envelope'} />
                )}
            </Button>

            {emailSubmitted &&
                !isSubmitting &&
                (emailSuccess ? (
                    <p
                        className={cn(
                            'text-lg font-medium text-lime-700',
                            'dark:text-lime-500'
                        )}
                    >
                        {form.submission.success}
                    </p>
                ) : (
                    <ErrorMessage>{form.submission.error}</ErrorMessage>
                ))}
        </form>
    );
};

export default ContactForm;
