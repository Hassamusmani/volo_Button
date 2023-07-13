import type { StyleProps as ChakraStyleProps } from "@chakra-ui/react";
import { Code, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export type DesignTokenSquareProps = {
    tokenName: string;
    tokenValue?: string | number;
} & Pick<
    ChakraStyleProps,
    "borderRadius" | "bg" | "bgColor" | "shadow" | "fontFamily" | "letterSpacing" | "lineHeight" | "fontWeight"
>;

export const DesignTokenSquare = (props: DesignTokenSquareProps) => {
    const { tokenName, tokenValue, ...styleProps } = props;
    return (
        <HStack h={20} minW={40}>
            <Flex w={20} h={20} borderRadius="sm" shadow="md" bgColor="white" {...styleProps} />
            <VStack alignItems="start">
                <Code>{tokenName}</Code>
                {tokenValue && <Text>{tokenValue}</Text>}
            </VStack>
        </HStack>
    );
};
