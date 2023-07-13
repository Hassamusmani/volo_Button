import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";
import type { PropsWithChildren } from "react";
import { theme } from "./theme";

export type ThemeProviderProps = {
    overrides?: (Dict<unknown> | ((theme: Dict<unknown>) => Dict<unknown>))[];
};

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
    const { children, overrides = [] } = props;

    const mergedTheme = extendTheme(...overrides, theme);

    return <ChakraProvider theme={mergedTheme}>{children}</ChakraProvider>;
};
