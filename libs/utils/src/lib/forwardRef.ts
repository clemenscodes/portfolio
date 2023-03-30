import { ExtractElement } from '@types';
import React from 'react';

type Fn<T, P> = typeof React.forwardRef<T, P>;
type Params<T, P> = Parameters<Fn<T, P>>;
type Return<T, P> = ReturnType<Fn<T, P>>;

type ForwardRefWithDisplayName = <P, T = ExtractElement<P>>(...args: [...Params<T, P>, string]) => Return<T, P>;

// Extend reacts forwardRef to force setting a displayName
export const forwardRef: ForwardRefWithDisplayName = (component, displayName) => {
    const ForwardRefComponent = React.forwardRef(component);
    ForwardRefComponent.displayName = displayName;
    return ForwardRefComponent;
};
