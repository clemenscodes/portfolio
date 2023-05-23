import { RobotoCondensed } from '@fonts';

export type FontProviderProps = React.PropsWithChildren;

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
    return <RobotoCondensed>{children}</RobotoCondensed>;
};

export default FontProvider;
