import { Box, HStack, Heading } from "@chakra-ui/react";
import { colors } from "../colors";
import { DesignTokenSquare } from "./DesignTokenSquare";

export type ColorGroupName<Colors> = { [K in keyof Colors]: Colors[K] extends string ? K : never }[keyof Colors];
export type ColorGroupProps = {
    title: string;
    colorNames: ColorGroupName<typeof colors>[];
};

export const ColorGroup = (props: ColorGroupProps) => {
    const { title, colorNames } = props;
    return (
        <Box w="100%" p={3}>
            <Heading as="h3" size="lg" alignSelf="flex-start" py={3}>
                {title}
            </Heading>
            <HStack flexWrap="wrap" spacing={0} gap={4} alignItems="start">
                {colorNames.map((name) => (
                    <DesignTokenSquare key={name} bgColor={name} tokenName={name} tokenValue={colors[name]} />
                ))}
            </HStack>
        </Box>
    );
};
