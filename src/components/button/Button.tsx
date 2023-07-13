import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { forwardRef } from "react";

export type ButtonProps = ChakraButtonProps;

/**
 * Trigger an action or event, such as submitting a form,
 * opening a dialog, or performing an action.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <ChakraButton {...props} ref={ref} />);
