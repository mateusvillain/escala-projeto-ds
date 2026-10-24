import StyleDictionary from 'style-dictionary';

/**
 * Style Dictionary lê os tokens DTCG (JSON com $value/$type)
 * e traduz para várias plataformas.
 */
const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  platforms: {
    // CSS custom properties — consumidas pelos componentes
    css: {
      transformGroup: 'css',
      prefix: 'es',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          // mantém referências: --es-semantic-color-text-default: var(--es-color-neutral-900)
          options: { outputReferences: true },
        },
      ],
    },
    // SCSS
    scss: {
      transformGroup: 'scss',
      prefix: 'es',
      buildPath: 'build/scss/',
      files: [{ destination: '_tokens.scss', format: 'scss/variables' }],
    },
    // JavaScript (ES module)
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.json', format: 'json/nested' },
      ],
    },
  },
});

await sd.buildAllPlatforms();
