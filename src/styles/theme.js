const devices = {
    //desktop, mobile, etc.
}

const page = {
    maxWidth: "1204px",
}

const colors = {
    white: "#FFF",
    black: "#1F2326",
    darkGray: "#aeaebb",
    lightGray: "#fafafc"
};

const spacing = {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "30px",
    xl: "48px",
    xxl: "60px"
};

const typography = {

};

const components = {
    defaultPadding: `${spacing.xxl} 0`,
    condensedPadding: `${spacing.xl} 0`
};

//this is probably stupid
const theme = {}
theme.devices = devices;
theme.page = page;
theme.components = components;
theme.colors = colors;
theme.spacing = spacing;
theme.typography = typography;

export default theme;