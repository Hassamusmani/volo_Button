import type { Meta, StoryFn } from "@storybook/react";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const meta: Meta = {
    title: "Button",
    component: Button,
    args: {
        children: "Button",
    },
};
export default meta;

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />;
