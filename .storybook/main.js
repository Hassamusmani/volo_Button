const path = require("path");
const toPath = (_path) => path.join(__dirname, "..", _path);

const stories = [
    {
        directory: "../src/components",
        titlePrefix: "Components",
        files: "**/*.stories.*",
    },
    {
        directory: "../src/theme",
        titlePrefix: "Design Tokens",
        files: "**/*.stories.*",
    },
];

module.exports = {
    stories,
    addons: ["@storybook/addon-a11y", "@storybook/addon-essentials", "storybook-addon-pseudo-states"],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
    core: { builder: "webpack5" },
    refs: {
        "@chakra-ui/react": { disable: true },
    },
    features: {
        previewMdx2: false, // does not support md tables yet
    },
    webpackFinal: async (config) => {
        // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.(ts|tsx)?$/,
            loader: "@svgr/webpack",
        });

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@svgr/webpack": toPath("node_modules/@svgr/webpack"),
                    "@emotion/core": toPath("node_modules/@emotion/react"),
                    "emotion-theming": toPath("node_modules/@emotion/react"),
                },
            },
        };
    },
};
