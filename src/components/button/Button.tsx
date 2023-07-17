import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import type { VariantType } from "../../constants/constants";

export type ButtonProps = Pick<ChakraButtonProps, "isDisabled" | "onClick" | "children" | "rightIcon"> & {
    variant?: VariantType;
};

/**
 * Trigger an action or event, such as submitting a form,
 * opening a dialog, or performing an action.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <ChakraButton {...props} iconSpacing={3} size="sm" ref={ref} />
));
