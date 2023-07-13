export default {
    rootDir: "../",
    roots: ["<rootDir>/src"],
    transform: {
        "\\.[jt]sx?$": ["babel-jest", { configFile: "./babel.config.js" }],
    },
    collectCoverageFrom: ["**/src/**/*.ts", "**/src/**/*.tsx"],
    testRegex: "(.*\\.test\\.[jt]sx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    coverageReporters: ["lcov", "html", "json"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["api"],
    verbose: true,
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "\\.svg$": "<rootDir>/config/jest-mocks/svg.ts",
    },
    setupFilesAfterEnv: ["<rootDir>/config/jest.setup.ts"],
};
