import { HStack, Text } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import type { IconProps } from "./Icon";
import { Icon as IconComponent } from "./Icon";

const meta: Meta = {
    title: "Icon",
    component: IconComponent,
    args: {
        icon: "download",
        size: 6,
    },
};
export default meta;

export const Basic: StoryFn<IconProps> = (props) => <IconComponent {...props} />;

export const Size: StoryFn<IconProps> = (props) => (
    <HStack alignItems="start">
        {[3, 4, 5, 6].map((size) => (
            <HStack key={size} spacing={1} p="2" width="20">
                <IconComponent {...props} size={size} />
                <Text>{size}</Text>
            </HStack>
        ))}
    </HStack>
);
