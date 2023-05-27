import dePortfolio from './locales/de/portfolio';
import esPortfolio from './locales/es/portfolio';
import { portfolio } from './locales/portfolio';
import { IPortfolio } from '@types';

export type Locale = 'en' | 'de' | 'es';

export const i18nPortfolio = new Map<Locale, IPortfolio>();
i18nPortfolio.set('en', portfolio);
i18nPortfolio.set('de', dePortfolio);
i18nPortfolio.set('es', esPortfolio);
