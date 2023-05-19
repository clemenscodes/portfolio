import { HTMLAttributes } from 'react';

export type ExtractElement<T> = T extends HTMLAttributes<infer K> ? K : T;
