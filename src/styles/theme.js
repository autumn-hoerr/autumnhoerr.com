const devices = {
    tablet: "768px",
    desktop: "1024px"
}

const page = {
    maxWidth: "1204px",
}

const colors = {
    white: "#FFF",
    black: "#1F2326",
    darkGray: "#aeaebb",
    lightGray: "#fafafc",
    merlot: "#7F171F"
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
    defaultVerticalPadding: `${spacing.xxl} 0`,
    condensedVerticalPadding: `${spacing.xl} 0`
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