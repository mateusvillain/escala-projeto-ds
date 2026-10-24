import './input.css';

/** Campo de texto com label e mensagem de ajuda/erro. */
export default {
  title: 'Componentes/Input',
  tags: ['autodocs'],
  render: ({ label, placeholder, hint, error, disabled }) => `
    <div class="es-field${error ? ' es-field--error' : ''}" style="max-width:320px">
      <label class="es-field__label" for="campo">${label}</label>
      <input id="campo" class="es-input" type="text" placeholder="${placeholder}"
        ${disabled ? 'disabled' : ''} ${error ? 'aria-invalid="true"' : ''} aria-describedby="campo-hint" />
      ${hint ? `<span id="campo-hint" class="es-field__hint">${hint}</span>` : ''}
    </div>`,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'E-mail',
    placeholder: 'voce@exemplo.com',
    hint: 'Usaremos para enviar novidades.',
    error: false,
    disabled: false,
  },
};

export const Default = {};

export const ComErro = {
  args: { error: true, hint: 'Informe um e-mail válido.' },
};

export const Desabilitado = { args: { disabled: true } };
