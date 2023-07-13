import { HStack, Text, VStack } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import type { DividerProps } from "./Divider";
import { Divider } from "./Divider";

const meta: Meta = {
    title: "Divider",
    component: Divider,
};
export default meta;

export const Basic: StoryFn<DividerProps> = (props: DividerProps) => <Divider {...props} />;

export const Horizontal: StoryFn<DividerProps> = (props: DividerProps) => (
    <VStack h="50px">
        <Text>Element before the Divider</Text>
        <Divider {...props} />
        <Text>Element after the Divider</Text>
    </VStack>
);
Horizontal.args = {
    orientation: "horizontal",
};

export const Vertical: StoryFn<DividerProps> = (props: DividerProps) => (
    <HStack h="50px">
        <Text>Element before the Divider</Text>
        <Divider {...props} />
        <Text>Element after the Divider</Text>
    </HStack>
);
Vertical.args = {
    orientation: "vertical",
    h: "full",
};
