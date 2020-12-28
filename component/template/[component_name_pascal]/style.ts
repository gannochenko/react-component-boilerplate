import styled, { css } from 'styled-components';

import {
    <%- component_name_pascal %>RootPropsType,
    <%- component_name_pascal %>InnerNodePropsType,
} from './type';

import { getMarginStyle } from '../../util/getMarginStyle';
import { getResetStyle } from '../../util/getResetStyle';

// all unwanted custom props should be blacklisted
const customProps = {
};

const getRootStyle = ({ propA, propB }: <%- component_name_pascal %>RootPropsType) => {
    let result = {};

    if (propA) {
        result = css`
            ${result};
            color: grey;
            // some other css
        `;
    }

    if (propB) {
        result = css`
            ${result};
            display: none;
            // some other css
        `;
    }

    // maybe some other props

    return result;
};

export const <%- component_name_pascal %>Root = styled.div.withConfig({
    shouldForwardProp: (prop: string) => !(prop in customProps)
})<<%- component_name_pascal %>RootPropsType>`
    ${getResetStyle};
    padding: 1rem;
    border-radius: 2px;
    
    ${getRootStyle};
    ${getMarginStyle};
`;

export const <%- component_name_pascal %>InnerNode = styled.div<
    <%- component_name_pascal %>InnerNodePropsType
    >`
    ${getResetStyle};
    border-radius: 2px;
`;
