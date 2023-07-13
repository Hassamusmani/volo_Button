import type { StyleProps as ChakraStyleProps } from "@chakra-ui/react";

export type BaseMarginProps = Pick<
    ChakraStyleProps,
    | "m"
    | "mr"
    | "ml"
    | "mb"
    | "mt"
    | "mx"
    | "my"
    | "margin"
    | "marginRight"
    | "marginLeft"
    | "marginBottom"
    | "marginTop"
    | "marginX"
    | "marginY"
>;

export type BasePaddingProps = Pick<
    ChakraStyleProps,
    | "p"
    | "pt"
    | "pb"
    | "pr"
    | "pl"
    | "px"
    | "py"
    | "padding"
    | "paddingTop"
    | "paddingBottom"
    | "paddingRight"
    | "paddingLeft"
    | "paddingX"
    | "paddingY"
>;

export type BasePositionProps = Pick<
    ChakraStyleProps,
    "verticalAlign" | "pos" | "position" | "top" | "right" | "bottom" | "left"
>;

export type BaseDimensionProps = Pick<
    ChakraStyleProps,
    | "h"
    | "height"
    | "maxH"
    | "maxHeight"
    | "minH"
    | "minHeight"
    | "w"
    | "width"
    | "maxW"
    | "maxWidth"
    | "minW"
    | "minWidth"
>;
