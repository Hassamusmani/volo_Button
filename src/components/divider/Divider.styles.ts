const baseStyle = {
    borderWidth: "2px",
};

const variants = {
    dashed: {
        borderColor: "gray.300",
        borderStyle: "dashed",
    },
    solid: {
        borderColor: "blue.300",
        borderStyle: "solid",
    },
};

export const Divider = {
    baseStyle,
    variants,
    defaultProps: {
        variant: "solid",
    },
};
