import { VStack } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export const DesignTokenStoryLayout = (props: PropsWithChildren<{}>) => {
    const { children } = props;
    return (
        <VStack w="100%" spacing={0} gap={3} alignItems="flex-start" justifyContent="flex-start">
            {children}
        </VStack>
    );
};
