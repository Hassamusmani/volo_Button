module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // the order matters here!
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "plugin:prefer-type-alias/recommended",
        "plugin:unicorn/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended", // this always has to come last
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.eslintconfig.json",
    },
    plugins: ["@typescript-eslint", "destructuring", "use-encapsulation", "no-only-tests"],
    rules: {
        // allow unnamed function expressions as they are transpiled to named function expressions
        "func-names": ["error", "as-needed"],
        "no-plusplus": "off",
        "no-param-reassign": ["error", { ignorePropertyModificationsFor: ["event"] }],
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: false }],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            { selector: "variable", format: ["camelCase", "PascalCase", "UPPER_CASE"], leadingUnderscore: "allow" },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/array-type": "error",

        "destructuring/in-params": ["error", { "max-params": 0 }],
        "destructuring/in-methods-params": "error",

        // ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
            },
        ],
        // allow the import of dev dependencies (mainly for configuration files e.g. webpack.base.ts)
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
            },
        ],
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",

        "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
        // allow JSX syntax in js and ts files
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".ts", ".tsx"],
            },
        ],
        "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        // suppress errors for missing "import React" in JSX files
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",

        "unicorn/filename-case": [
            "error",
            {
                cases: {
                    pascalCase: true,
                    camelCase: true,
                    kebabCase: true,
                },
            },
        ],
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-null": "off",
        "unicorn/no-useless-undefined": "off",
        "unicorn/prevent-abbreviations": [
            "error",
            {
                replacements: {
                    args: false,
                    param: false,
                    params: false,
                    prop: false,
                    props: false,
                    ref: false,
                },
            },
        ],
        "no-continue": "off",
        "use-encapsulation/prefer-custom-hooks": "error",
        "no-only-tests/no-only-tests": "error",
    },
    overrides: [
        {
            files: ["**/*.test.tsx", "**/*.test.ts"],
            rules: { "unicorn/prefer-module": "off" },
        },
        {
            files: ["**/config/**", "**/global.d.ts", "babel.config.js"],
            rules: {
                "import/no-default-export": "off",
                "unicorn/prefer-module": "off",
            },
        },
        {
            files: ["**/stories/*.tsx", "**/*.stories.tsx"],
            rules: {
                "import/no-default-export": "off",
                "use-encapsulation/prefer-custom-hooks": "off",
            },
        },
        {
            files: ["**/*.test.tsx", "**/*.test.ts"],
            rules: { "use-encapsulation/prefer-custom-hooks": "off" },
        },
        {
            files: ["**/.eslintrc.js"],
            rules: { "unicorn/prefer-module": "off" },
        },
        {
            files: ["**/src/**/*.test.{js,ts,tsx}"],
            extends: ["plugin:testing-library/react"],
        },
    ],
    ignorePatterns: [
        "**/dist/**",
        "**/build-statistics/**",
        "**/coverage/**",
        "**/node_modules/**",
        "**/src/api",
        "**/*.guard.ts*",
        "**/mockServiceWorker.js",
    ],
};
