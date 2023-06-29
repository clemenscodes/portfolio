import type { IApi, Locale } from '@types';
import { api } from './locales/api';
import { deApi } from './locales/de/api';
import { esApi } from './locales/es/api';

export const i18nApi = new Map<Locale, IApi>();
i18nApi.set('en', api);
i18nApi.set('de', deApi);
i18nApi.set('es', esApi);
