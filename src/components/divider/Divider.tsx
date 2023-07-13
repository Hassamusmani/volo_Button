import type { DividerProps as ChakraDividerProps } from "@chakra-ui/react";
import { Divider as ChakraDivider } from "@chakra-ui/react";
import type { BaseDimensionProps, BaseMarginProps } from "../BaseProps";

export type DividerProps = Pick<ChakraDividerProps, "orientation" | "variant"> & BaseMarginProps & BaseDimensionProps;

/**
 * Visually separate content in a list or layout.
 */
export const Divider = (props: DividerProps) => <ChakraDivider {...props} />;
