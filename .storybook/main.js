const path = require('path');

module.exports = {
  // Experimental Webpack 5 support to match Next.JS v11^ Webpack support
  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/components/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-next',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true },
          parser: 'typescript',
        },
      },
    },
  ],
  staticDirs: ['../public', '../styles'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@public': path.resolve(__dirname, '..', 'public'),
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
      '@libs': path.resolve(__dirname, '..', 'src', 'libs'),
      '@styles': path.resolve(__dirname, '..', 'styles'),
      '@constants': path.resolve(__dirname, '..', 'src', 'constants'),
      '@types': path.resolve(__dirname, '..', 'src', 'types'),
    };

    // Fix for framer-motion bug https://github.com/framer/motion/issues/1307#issuecomment-974310125
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    });

    const nextConfig = require('./../next.config.js');

    return { ...config, ...nextConfig.webpack };
  },
};
