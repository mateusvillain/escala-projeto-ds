import './badge.css';

/** Rótulo curto para indicar status ou categoria. */
export default {
  title: 'Componentes/Badge',
  tags: ['autodocs'],
  render: ({ label, status }) =>
    `<span class="es-badge${status === 'neutral' ? '' : ` es-badge--${status}`}">${label}</span>`,
  argTypes: {
    label: { control: 'text' },
    status: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
  },
  args: { label: 'Novo', status: 'info' },
};

export const Default = {};

export const Todos = {
  render: () => `
    <div style="display:flex; gap:8px">
      <span class="es-badge">Neutro</span>
      <span class="es-badge es-badge--info">Info</span>
      <span class="es-badge es-badge--success">Aprovado</span>
      <span class="es-badge es-badge--warning">Pendente</span>
      <span class="es-badge es-badge--danger">Erro</span>
    </div>`,
};
