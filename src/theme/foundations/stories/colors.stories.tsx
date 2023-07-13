import { VStack } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { ColorGroup } from "./ColorGroup";
import { ColorPalette } from "./ColorPalette";
import { DesignTokenStoryLayout } from "./DesignTokenStoryLayout";

const meta: Meta = {
    title: "Colors",
};
export default meta;

export const BrandColors: StoryFn = () => (
    <VStack>
        <DesignTokenStoryLayout>
            <ColorPalette title="Brand Color Blue" palette="blue" />
        </DesignTokenStoryLayout>
    </VStack>
);

export const Monochrome: StoryFn = () => (
    <VStack>
        <DesignTokenStoryLayout>
            <ColorGroup title="Black & White" colorNames={["black", "white"]} />
            <ColorPalette title="Gray" palette="gray" />
        </DesignTokenStoryLayout>
    </VStack>
);
