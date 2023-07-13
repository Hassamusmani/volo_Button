import { Story } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src";

export const withTheme = (Story: Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
);
