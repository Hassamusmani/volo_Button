import { Heading, HStack, Text } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { typography } from "../typography";
import { convertSpaceUnit } from "./convertSpaceUnit";
import { DesignTokenStoryLayout } from "./DesignTokenStoryLayout";
import { TextDesignToken } from "./TextDesignToken";

const meta: Meta = {
    title: "Typography",
};
export default meta;

export const LetterSpacings: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Letter Spacings</Heading>
        {Object.entries(typography.letterSpacings).map(([key, value]) => (
            <TextDesignToken
                key={key}
                tokenName={key}
                tokenValue={value}
                propName="letter spacing"
                letterSpacing={value}
                alternateUnit={convertSpaceUnit(value)}
            />
        ))}
    </DesignTokenStoryLayout>
);

export const LineHeights: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Line Heights</Heading>
        {Object.entries(typography.lineHeights).map(([key, value]) => (
            <TextDesignToken
                key={key}
                tokenName={key}
                tokenValue={value}
                propName="line height"
                lineHeight={value}
                bg="red.200"
            />
        ))}
    </DesignTokenStoryLayout>
);

export const FontWeights: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Font Weights</Heading>
        {Object.entries(typography.fontWeights).map(([key, value]) => (
            <TextDesignToken key={key} tokenName={key} tokenValue={value} propName="font weight" fontWeight={value} />
        ))}
    </DesignTokenStoryLayout>
);

export const FontSizes: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Font Sizes</Heading>
        {Object.entries(typography.fontSizes).map(([key, value]) => (
            <HStack key={key}>
                <Text fontSize={value}>
                    This is size {key} ({value})
                </Text>
            </HStack>
        ))}
    </DesignTokenStoryLayout>
);
