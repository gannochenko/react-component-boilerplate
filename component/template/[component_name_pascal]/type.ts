import { HTMLAttributes } from 'react';
import { StylePropsType, ObjectLiteralType } from '../../typeComponent';

import { MarginPropsType } from "../../util/getMarginStyle";

export type <%- component_name_pascal %>PropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type <%- component_name_pascal %>RootPropsType = StylePropsType & <%- component_name_pascal %>PropsType;

export type <%- component_name_pascal %>InnerNodePropsType = StylePropsType & ObjectLiteralType;
