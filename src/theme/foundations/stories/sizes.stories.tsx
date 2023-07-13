import { Code, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { container, largeSizes, relativeSizes } from "../sizes";
import { spacing } from "../spacing";
import { DesignTokenStoryLayout } from "./DesignTokenStoryLayout";
import { SpacingDesignToken } from "./SpacingDesignToken";

const meta: Meta = {
    title: "Sizes",
};
export default meta;

const sortSpacingTokens = (keyA: string, keyB: string) => {
    const keyANumber = Number(keyA);
    const keyBNumber = Number(keyB);
    if (Number.isNaN(keyANumber)) return -1;
    if (Number.isNaN(keyBNumber)) return 1;
    return keyANumber - keyBNumber;
};

export const Spacing: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Spacing</Heading>
        <Text>
            You can use these numbers for <Code>padding</Code>, <Code>margin</Code> and <Code>top</Code>,
            <Code>left</Code>, <Code>right</Code>, <Code>bottom</Code> styles. The values are the same as in the{" "}
            <Link href="https://chakra-ui.com/docs/theming/theme#spacing" isExternal>
                Chakra default theme
            </Link>
            .
        </Text>
        <Text>
            The values are proportional and based on <Code>1 Spacing Unit = 4px = 0.25rem</Code>. Divide the pixel value
            by 4 to get the Spacing Unit value.
        </Text>
        <VStack py={4} flexWrap="wrap" alignItems="start" spacing={0} gap={1}>
            {Object.entries(spacing)
                .sort(([keyA], [keyB]) => sortSpacingTokens(keyA, keyB))
                .map(([key, value]) => (
                    <SpacingDesignToken key={key} tokenName={key} tokenValue={value} />
                ))}
        </VStack>
    </DesignTokenStoryLayout>
);

export const LargeSizes: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Large Sizes</Heading>
        <Text>
            You can use these numbers for <Code>width</Code>, <Code>minWidth</Code>, <Code>maxWidth</Code>,{" "}
            <Code>height</Code>, <Code>minHeight</Code>, and <Code>maxHeight</Code> styles.
        </Text>
        <VStack py={4} flexWrap="wrap" alignItems="start" spacing={0} gap={1}>
            {Object.entries(largeSizes).map(([key, value]) => (
                <SpacingDesignToken key={key} tokenName={key} tokenValue={value} />
            ))}
        </VStack>
    </DesignTokenStoryLayout>
);

export const RelativeSizes: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Relative Sizes</Heading>
        <Text>
            You can use these numbers for <Code>width</Code>, <Code>minWidth</Code>, <Code>maxWidth</Code>,{" "}
            <Code>height</Code>, <Code>minHeight</Code>, and <Code>maxHeight</Code> styles.
        </Text>
        <VStack py={4} flexWrap="wrap" alignItems="start" spacing={0} gap={1}>
            {Object.entries(relativeSizes).map(([key, value]) => (
                <HStack h={20} minW={40} key={key}>
                    <Text w={12}>{key}</Text>
                    <Flex w={value} h={20} shadow="md" bgColor="white" alignItems="center" justifyContent="center">
                        {value}
                    </Flex>
                </HStack>
            ))}
        </VStack>
    </DesignTokenStoryLayout>
);

export const Container: StoryFn = () => (
    <DesignTokenStoryLayout>
        <Heading>Container</Heading>
        <Text>These sizes are specifically for the Container component.</Text>
        <VStack py={4} flexWrap="wrap" alignItems="start" spacing={0} gap={1}>
            {Object.entries(container).map(([key, value]) => (
                <SpacingDesignToken key={key} tokenName={key} tokenValue={value} />
            ))}
        </VStack>
    </DesignTokenStoryLayout>
);
