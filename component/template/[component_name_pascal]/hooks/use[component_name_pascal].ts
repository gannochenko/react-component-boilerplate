import { Ref } from 'react';
import { <%- component_name_pascal %>PropsType } from './types';

export const use<%- component_name_pascal %> = (
    ref: Ref<unknown>,
    { propA, propB, ...props }: <%- component_name_pascal %>PropsType
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref // same for the ref
        },
        innerNodeProps: {
            propA,
            propB,
        },
    };
};
