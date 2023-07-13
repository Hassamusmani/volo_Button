import { withTheme } from "./withTheme";

export const decorators = [withTheme];

export const parameters = {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
};
