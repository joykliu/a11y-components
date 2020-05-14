module.exports = {
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/components/**/*.stories.jsx"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.tsx?$/]
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    },
    "@storybook/addon-viewport"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { parser: "typescript" }
        }
      ],
      enforce: "pre"
    });

    config.module.rules.push({
      test: /\.css$/,
      include: /\/styles\//,
      loaders: [require.resolve("style-loader"), require.resolve("css-loader")]
    });

    // Return the altered config
    return config;
  }
};
