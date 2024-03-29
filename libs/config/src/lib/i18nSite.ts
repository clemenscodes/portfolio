import { deSite } from './locales/de/site';
import { esSite } from './locales/es/site';
import { site } from './locales/site';
import { ISiteConfig, Locale } from '@types';

export const i18nSite = new Map<Locale, ISiteConfig>();
i18nSite.set('en', site);
i18nSite.set('de', deSite);
i18nSite.set('es', esSite);
