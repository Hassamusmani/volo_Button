import type { SpaceProps } from "@chakra-ui/react";
import { Code, Flex, HStack, Text } from "@chakra-ui/react";
import { convertSpaceUnit } from "./convertSpaceUnit";

export type SpacingDesignTokenProps = SpaceProps & {
    tokenName: string;
    tokenValue: string;
};

export const SpacingDesignToken = (props: SpacingDesignTokenProps) => {
    const { tokenName, tokenValue, ...styleProps } = props;
    return (
        <HStack h={10} minW={40}>
            <Text w={12}>{tokenName}</Text>
            <Code w={20}>{tokenValue}</Code>
            <Code w={20}>{convertSpaceUnit(tokenValue)}</Code>
            <Flex w={tokenValue} h={10} shadow="md" bgColor="white" {...styleProps} />
        </HStack>
    );
};
