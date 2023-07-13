module.exports = (api) => {
    api.cache(true);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        esmodules: true,
                    },
                },
            ],
            "@babel/preset-typescript",
            [
                "@babel/preset-react",
                {
                    runtime: "automatic",
                },
            ],
        ],
        plugins: ["inline-react-svg"],
    };
};
