import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-docs',
      // remark-gfm habilita tabelas Markdown nas páginas .mdx
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } },
    },
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
