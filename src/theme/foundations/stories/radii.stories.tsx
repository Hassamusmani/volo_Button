import { Heading, HStack } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { radii } from "../radii";
import { DesignTokenSquare } from "./DesignTokenSquare";
import { DesignTokenStoryLayout } from "./DesignTokenStoryLayout";

const meta: Meta = {
    title: "Border radius",
};
export default meta;

export const Overview: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Border radius</Heading>
        <HStack py={4} flexWrap="wrap" spacing={0} gap={4}>
            {Object.keys(radii).map((key) => (
                <DesignTokenSquare key={key} tokenName={key} borderRadius={key} />
            ))}
        </HStack>
    </DesignTokenStoryLayout>
);
