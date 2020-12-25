import { css } from 'styled-components';

export type ScalarType = string | number;
export type MarginPropType = Partial<{
    margin: ScalarType;
    marginTop: ScalarType;
    marginBottom: ScalarType;
    marginLeft: ScalarType;
    marginRight: ScalarType;
}>;

const getValue = (value?: ScalarType) => {
    if (typeof value === "string") {
        return value;
    }
    // in case of number, can do something fun here,
    // like converting spacing unit to pixels, or pixels to rem
    return value;
};

const getStyleFor = (property: string, value?: ScalarType) =>
    value !== undefined ? `${property}: ${getValue(value)};` : "";

export const getMarginStyle = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
}: MarginPropType) => css`
    ${getStyleFor("margin", margin)};
    ${getStyleFor("margin-top", margin)};
    ${getStyleFor("margin-bottom", margin)};
    ${getStyleFor("margin-left", margin)};
    ${getStyleFor("margin-right", margin)};
`;
