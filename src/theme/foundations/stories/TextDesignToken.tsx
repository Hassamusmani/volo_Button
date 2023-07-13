import { Box, HStack, Text } from "@chakra-ui/react";
import type { DesignTokenSquareProps } from "./DesignTokenSquare";

type TextDesignTokenProps = DesignTokenSquareProps & {
    propName: string;
    alternateUnit?: string;
};

export const TextDesignToken = (props: TextDesignTokenProps) => {
    const { tokenName, tokenValue, propName, alternateUnit, ...styleProps } = props;

    return (
        <HStack w="full" alignContent="flex-start">
            <Box w={20}>{tokenName}:</Box>
            <Text {...styleProps}>
                This text has a {propName} of {tokenValue} {alternateUnit && `(${alternateUnit})`}
            </Text>
        </HStack>
    );
};
