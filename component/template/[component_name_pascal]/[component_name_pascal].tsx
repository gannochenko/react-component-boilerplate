import React, { forwardRef, FC } from 'react';
import PropsTypes from 'prop-types';

import { <%- component_name_pascal %>PropsType } from './type';
import { <%- component_name_pascal %>Root, <%- component_name_pascal %>InnerNode } from './style';
import { use<%- component_name_pascal %> } from './hooks/use<%- component_name_pascal %>';
import { use<%- component_name_pascal %>ClassNames } from './hooks/use<%- component_name_pascal %>ClassNames';

export const <%- component_name_pascal %>: FC<<%- component_name_pascal %>PropsType> = forwardRef(
    function <%- component_name_pascal %>({ className, ...props }, ref) {
        const {
            rootProps,
            innerNodeProps,
        } = use<%- component_name_pascal %>(ref, props);

        const classNames = use<%- component_name_pascal %>ClassNames('<%- component_name_pascal %>', className);

        return (
            <<%- component_name_pascal %>Root {...rootProps} className={classNames.root}>
                <<%- component_name_pascal %>InnerNode {...innerNodeProps} className={classNames.innerNode} />
            </<%- component_name_pascal %>Root>
        );
    }
);

<%- component_name_pascal %>.defaultProps = {
};

<%- component_name_pascal %>.propTypes = {
};
