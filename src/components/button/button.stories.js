import './button.css';

/**
 * Botão para ações. Use `primary` para a ação principal da tela,
 * `secondary` para ações de apoio e `danger` para ações destrutivas.
 */
export default {
  title: 'Componentes/Button',
  tags: ['autodocs'],
  render: ({ label, variant, size, disabled }) => {
    const classes = ['es-button', `es-button--${variant}`];
    if (size !== 'md') classes.push(`es-button--${size}`);
    return `<button type="button" class="${classes.join(' ')}"${disabled ? ' disabled' : ''}>${label}</button>`;
  },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Botão',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Primary = {};

export const Secondary = { args: { variant: 'secondary' } };

export const Danger = { args: { variant: 'danger', label: 'Excluir' } };

export const Disabled = { args: { disabled: true } };

export const Tamanhos = {
  render: () => `
    <div style="display:flex; gap:12px; align-items:center">
      <button class="es-button es-button--primary es-button--sm">Pequeno</button>
      <button class="es-button es-button--primary">Médio</button>
      <button class="es-button es-button--primary es-button--lg">Grande</button>
    </div>`,
};
