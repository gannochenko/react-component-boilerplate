type ObjectLiteralType<V = any> = { [k: string]: V };

type ThemeType = ObjectLiteralType;

type StylePropsType = {
    theme: ThemeType;
};
