const sizes = {
    sm: {
        fontSize: "xs",
        fontWeight: "bold",
        px: 4,
        py: 2,
    },
};

const defaultProps = {
    variant: "primary",
};

const baseStyle = {
    // I have used px here because required tocken is not defined in storybook
    borderRadius: "0.25rem",
    bg: "blue.300",
    _focus: {
        boxShadow: "none",
    },
    _disabled: {
        opacity: 1,
    },
};

const variants = {
    primary: {
        bg: "blue.300",
        color: "white",
        _hover: {
            bg: "blue.400",
            _disabled: {
                bg: "blue.200",
            },
        },
        _active: {
            bg: "blue.500",
        },
        _disabled: {
            color: "blue.100",
            bg: "blue.200",
        },
    },
    secondary: {
        bg: "blue.50",
        color: "blue.900",
        _hover: {
            bg: "blue.100",
            _disabled: {
                bg: "blue.100",
            },
        },
        _active: {
            bg: "blue.300",
        },
        _disabled: {
            color: "blue.200",
            bg: "blue.100",
        },
    },
    ghost: {
        bg: "grey.100",
        color: "blue.300",
        border: "1px",
        borderColor: "blue.300",
        _hover: {
            bg: "blue.50",
            color: "blue.500",
            borderColor: "blue.500",
            _disabled: {
                bg: "blue.50",
                color: "blue.200",
                borderColor: "blue.200",
            },
        },
        _active: {
            bg: "blue.100",
            color: "blue.900",
            borderColor: "blue.900",
        },
        _disabled: {
            bg: "blue.50",
            color: "blue.200",
            borderColor: "blue.200",
        },
    },
};

export const Button = {
    baseStyle,
    sizes,
    variants,
    defaultProps,
};
