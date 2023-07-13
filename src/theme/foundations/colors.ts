const monochrome = {
    gray: {
        100: "#FBFBFC",
        200: "#F7F7F9",
        300: "#F3F4F5",
        400: "#EFF0F2",
        500: "#EBECEF",
        600: "#5C616C",
        700: "#474D59",
        750: "#333947",
        800: "#32363E",
        850: "#23262B",
        900: "#181B1E",
    },
};

const brandColors = {
    blue: {
        50: "#E5E7EB",
        100: "#CCD0D8",
        200: "#A6ADBA",
        300: "#66728A",
        400: "#334363",
        500: "#00143C",
        900: "#001B52",
    },
};

export const colors = {
    transparent: "transparent",
    current: "currentColor",
    white: "#FFFFFF",
    black: "#000000",
    ...monochrome,
    ...brandColors,
};
