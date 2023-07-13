import type { Theme, ThemeConfig } from "@chakra-ui/react";
import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";
import { components as componentStyleOverrides } from "../components/styles";
import { colors, radii, sizes, spacing, styles, typography } from "./foundations";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const components = { ...componentStyleOverrides };

const overrides = {
    components,
    config,
    styles,
};

// remove these components from the chakraTheme components
// because otherwise variants/sizes cannot be overwritten properly:
// https://github.com/chakra-ui/chakra-ui/issues/4886
const { Button, Divider, ...chakraComponents } = chakraTheme.components;

const baseTheme = {
    ...chakraTheme,
    ...typography,
    components: {
        ...chakraComponents,
        divider: components.Divider,
        button: components.Button,
    },
    colors,
    radii,
    sizes,
    space: spacing,
};

export const theme: Dict<Theme> = extendTheme(overrides, baseTheme);
