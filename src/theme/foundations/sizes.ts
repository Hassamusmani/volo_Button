import { spacing } from "./spacing";

export const relativeSizes = {
    max: "max-content",
    min: "min-content",
    full: "100%",
};

export const largeSizes = {
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
};

// these are specifically for the Container component
export const container = {
    sm: "640px",
    md: "810px",
    lg: "1024px",
    xl: "1280px",
};

export const sizes = {
    ...spacing,
    ...relativeSizes,
    ...largeSizes,
    container,
};
