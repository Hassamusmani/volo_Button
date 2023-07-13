import { Box, Code, Heading, HStack, Text } from "@chakra-ui/react";
import type { BaseMarginProps } from "../../../components/BaseProps";
import { colors } from "../colors";
import { DesignTokenSquare } from "./DesignTokenSquare";

type ColorPaletteName<Colors> = {
    [K in keyof Colors]: Colors[K] extends { [name: string]: string } ? K : never;
}[keyof Colors];

export type ColorPaletteProps = BaseMarginProps & {
    title: string;
    palette: ColorPaletteName<typeof colors>;
};

export const ColorPalette = (props: ColorPaletteProps) => {
    const { title, palette, ...styleProps } = props;
    return (
        <Box p={3} {...styleProps}>
            <HStack alignItems="baseline">
                <Heading as="h3" size="lg" py={3}>
                    {title}
                </Heading>
                <Text>Palette name:</Text>
                <Code mb={3}>{palette}.X</Code>
            </HStack>
            <HStack flexWrap="wrap" spacing={0} gap={4} alignItems="start">
                {Object.entries(colors[palette]).map(([key, value]) => (
                    <DesignTokenSquare key={key} bgColor={`${palette}.${key}`} tokenName={key} tokenValue={value} />
                ))}
            </HStack>
        </Box>
    );
};
