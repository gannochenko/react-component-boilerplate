import { useMemo } from 'react';
import { makeClassName } from '../../../util/makeClassName';

export const use<%- component_name_pascal %>ClassNames = (
    componentName: string,
    className?: string
) =>
    useMemo(
        () => ({
            root: `${className || ''} ${makeClassName(componentName)}`.trim(),
            innerNode: makeClassName(componentName, "InnerNode"),
        }),
        [componentName, className]
    );
