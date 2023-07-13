import type { IconProps as ChakraIconProps } from "@chakra-ui/icons";
import { Icon as ChakraIcon } from "@chakra-ui/icons";
import type { BaseMarginProps, BasePositionProps } from "../BaseProps";
import type { IconName } from "./icons";
import { icons } from "./icons";

export type IconProps = Pick<ChakraIconProps, "color" | "aria-label" | "sx"> & {
    icon: IconName;
    size?: number;
} & BaseMarginProps &
    BasePositionProps;

/**
 * Small images that transport or emphasize meaning to the user.
 */
export const Icon = (props: IconProps) => {
    const { icon, size = 6, ...chakraProps } = props;
    return <ChakraIcon as={icons[icon]} color="inherit" verticalAlign="middle" w={size} h={size} {...chakraProps} />;
};
