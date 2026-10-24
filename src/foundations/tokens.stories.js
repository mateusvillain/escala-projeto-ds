import tokens from '../../build/js/tokens.json';

/**
 * Visualização dos tokens gerados pelo Style Dictionary a partir dos
 * arquivos DTCG em `/tokens`. Edite o JSON, rode `npm run tokens` e veja aqui.
 */
export default {
  title: 'Fundamentos/Tokens',
};

// Achata o objeto aninhado em [["color-blue-500", "#3b82f6"], ...]
const flatten = (obj, path = []) =>
  Object.entries(obj).flatMap(([key, value]) =>
    typeof value === 'object' && !Array.isArray(value)
      ? flatten(value, [...path, key])
      : [[[...path, key].join('-'), value]]
  );

const swatch = ([name, value]) => `
  <div style="display:flex; align-items:center; gap:12px; font-size:14px">
    <div style="width:48px; height:48px; border-radius:8px; background:${value}; border:1px solid #e2e8f0"></div>
    <div><code>--es-${name}</code><br/><span style="color:#64748b">${value}</span></div>
  </div>`;

const grid = (items) =>
  `<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:16px">${items}</div>`;

export const Cores = {
  render: () => grid(flatten(tokens.color, ['color']).map(swatch).join('')),
};

export const CoresSemanticas = {
  name: 'Cores semânticas',
  render: () =>
    grid(flatten(tokens.semantic.color, ['semantic', 'color']).map(swatch).join('')),
};

export const Espacamento = {
  name: 'Espaçamento',
  render: () =>
    flatten(tokens.space, ['space'])
      .map(
        ([name, value]) => `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px; font-size:14px">
          <code style="width:120px">--es-${name}</code>
          <div style="height:16px; width:${value}; background:var(--es-color-blue-500)"></div>
          <span style="color:#64748b">${value}</span>
        </div>`
      )
      .join(''),
};

export const Tipografia = {
  render: () =>
    flatten(tokens.font.size, ['font', 'size'])
      .map(
        ([name, value]) => `
        <p style="font-size:${value}; margin:0 0 12px">
          <code style="font-size:12px; color:#64748b">--es-${name} (${value})</code><br/>
          O design system em escala
        </p>`
      )
      .join(''),
};
