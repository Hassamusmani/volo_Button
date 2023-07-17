import type { Meta, StoryFn } from "@storybook/react";
import { HStack } from "@chakra-ui/react";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import { variantArray } from "../../constants/constants";
import { Icon } from "../icon/Icon";

const plusIcon = <Icon icon="plus" size={4} />;

const meta: Meta = {
    title: "Button",
    component: Button,
    args: {
        children: "Button",
        isDisabled: false,
    },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: variantArray,
            },
        },
        isDisabled: {
            control: "boolean",
        },
        onClick: {
            action: "clicked",
        },
        rightIcon: {
            control: {
                type: "select",
                options: [null, plusIcon],
            },
        },
    },
};

export default meta;

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />;

export const WithIcon: StoryFn<ButtonProps> = (props) => <Button {...props} rightIcon={plusIcon} />;

export const ButtonVariants: StoryFn<ButtonProps> = (props) => (
    <div>
        <HStack alignItems="center" justifyContent="center" m={5}>
            {variantArray.map((variant, index) => (
                <HStack key={+index} spacing={1} p="2">
                    <Button {...props} variant={variant} />
                </HStack>
            ))}
        </HStack>
        <HStack alignItems="center" justifyContent="center" m={5}>
            {variantArray.map((variant, index) => (
                <HStack key={+index} spacing={1} p="2">
                    <Button {...props} variant={variant} isDisabled />
                </HStack>
            ))}
        </HStack>
    </div>
);

export const ButtonWithIcon: StoryFn<ButtonProps> = (props) => (
    <div>
        <HStack alignItems="center" justifyContent="center" m={5}>
            {variantArray.map((variant, index) => (
                <HStack key={+index} spacing={1} p="2">
                    <Button {...props} variant={variant} rightIcon={plusIcon} />
                </HStack>
            ))}
        </HStack>
        <HStack alignItems="center" justifyContent="center" m={5}>
            {variantArray.map((variant, index) => (
                <HStack key={+index} spacing={1} p="2">
                    <Button {...props} variant={variant} rightIcon={plusIcon} isDisabled />
                </HStack>
            ))}
        </HStack>
    </div>
);
