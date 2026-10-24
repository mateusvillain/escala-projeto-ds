// Tokens gerados pelo Style Dictionary + estilos base, carregados em todas as stories
import '../build/css/tokens.css';
import '../src/styles/base.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export default preview;
