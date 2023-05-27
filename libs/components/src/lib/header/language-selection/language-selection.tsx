import { type Locale } from '@config';
import { cn } from '@styles';
import { useRouter } from 'next/router';

export type LanguageSelectionProps = React.ComponentPropsWithoutRef<'select'>;

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({
    className,
    ...props
}) => {
    const router = useRouter();
    const { locales } = router;
    const changeLocale = (locale: Locale) => {
        router.push(router.pathname, router.asPath, { locale });
    };
    const localeToFlag = (locale: Locale) => {
        switch (locale) {
            case 'en': {
                return '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
            }
            case 'de': {
                return '🇩🇪';
            }
            case 'es': {
                return '🇪🇸';
            }
            default: {
                return '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
            }
        }
    };

    return (
        <select
            onChange={(e) => changeLocale(e.target.value as Locale)}
            className={cn([
                'cursor-pointer appearance-none rounded-full p-2',
                'text-xl outline-none',
                'bg-white',
                'hover:bg-gray-200',
                'hover:dark:bg-dimmed-800',
                'dark:bg-dimmed-900',
                className,
            ])}
            {...props}
        >
            {(locales as Locale[]).map((locale, index) => (
                <option className={cn('')} value={locale} key={index}>
                    {localeToFlag(locale)}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelection;
