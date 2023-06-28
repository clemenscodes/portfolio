import { Body, Head, Html, Preview, Text } from '@react-email/components';

export type EmailProps = { subject: string; message: string };

export const Email: React.FC<EmailProps> = ({ subject, message }) => {
    return (
        <Html>
            <Head>
                <title>{subject}</title>
            </Head>
            <Preview>{subject}</Preview>
            <Body>
                <Text>{message}</Text>
            </Body>
        </Html>
    );
};
