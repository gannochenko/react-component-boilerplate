import { useMemo } from 'react';
import { makeClassName } from '../../../util/makeClassName';

export const useSignInFormClassNames = (
    componentName: string,
    className: string
) =>
    useMemo(
        () => ({
            root: `${className} ${makeClassName(componentName)}`,
            innerNode: makeClassName(componentName, "InnerNode"),
        }),
        [componentName, className]
    );
