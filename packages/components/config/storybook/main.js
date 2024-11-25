const config = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-rtl',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  docs: {
    autodocs: true,
    defaultName: 'Spec',
  },
  staticDirs: ['./public'],
};
export default config;
