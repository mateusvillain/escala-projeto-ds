import './selection-control.css';

// `indeterminate` não existe como atributo HTML: só pode ser definido via JS
const withIndeterminate = (html) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  wrapper.querySelectorAll('[data-indeterminate]').forEach((input) => (input.indeterminate = true));
  return wrapper;
};

/**
 * Checkbox ou radio com label. Usa o `<input>` nativo para manter teclado,
 * foco e leitores de tela funcionando sem JavaScript. O checkbox aceita o
 * estado misto (`input.indeterminate = true`), por exemplo em "Selecionar todos".
 */
export default {
  title: 'Componentes/Selection Control',
  tags: ['autodocs'],
  render: ({ label, type, checked, disabled }) => `
    <label class="es-choice">
      <input class="es-choice__input" type="${type}" name="exemplo"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} />
      <span>${label}</span>
    </label>`,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'inline-radio', options: ['checkbox', 'radio'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Opção',
    type: 'checkbox',
    checked: false,
    disabled: false,
  },
};

export const Checkbox = {};

export const Radio = { args: { type: 'radio' } };

export const Misto = {
  render: ({ label }) =>
    withIndeterminate(`
      <label class="es-choice">
        <input class="es-choice__input" type="checkbox" data-indeterminate />
        <span>${label}</span>
      </label>`),
  args: { label: 'Selecionar todos' },
};

export const Todos = {
  render: () =>
    withIndeterminate(`
    <div style="display:flex; gap:24px; flex-wrap:wrap">
      <label class="es-choice"><input class="es-choice__input" type="checkbox" /><span>Checkbox</span></label>
      <label class="es-choice"><input class="es-choice__input" type="checkbox" checked /><span>Marcado</span></label>
      <label class="es-choice"><input class="es-choice__input" type="checkbox" data-indeterminate /><span>Misto</span></label>
      <label class="es-choice"><input class="es-choice__input" type="radio" name="todos" /><span>Radio</span></label>
      <label class="es-choice"><input class="es-choice__input" type="radio" name="todos" checked /><span>Selecionado</span></label>
      <label class="es-choice"><input class="es-choice__input" type="checkbox" disabled /><span>Desabilitado</span></label>
    </div>`),
};
