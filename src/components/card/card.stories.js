import './card.css';
import '../button/button.css';
import '../badge/badge.css';

/** Agrupa conteúdo relacionado. Compõe outros componentes (Badge, Button). */
export default {
  title: 'Componentes/Card',
  tags: ['autodocs'],
  render: ({ title, body, elevated, showBadge, showFooter }) => `
    <article class="es-card${elevated ? ' es-card--elevated' : ''}" style="max-width:360px">
      ${showBadge ? '<span class="es-badge es-badge--success" style="align-self:flex-start">Ativo</span>' : ''}
      <h3 class="es-card__title">${title}</h3>
      <p class="es-card__body">${body}</p>
      ${
        showFooter
          ? `<div class="es-card__footer">
              <button class="es-button es-button--primary es-button--sm">Abrir</button>
              <button class="es-button es-button--secondary es-button--sm">Compartilhar</button>
            </div>`
          : ''
      }
    </article>`,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    elevated: { control: 'boolean' },
    showBadge: { control: 'boolean' },
    showFooter: { control: 'boolean' },
  },
  args: {
    title: 'Projeto Escala',
    body: 'Um design system didático construído com tokens DTCG, Style Dictionary e HTML/CSS puro.',
    elevated: false,
    showBadge: true,
    showFooter: true,
  },
};

export const Default = {};

export const Elevado = { args: { elevated: true } };

export const Simples = { args: { showBadge: false, showFooter: false } };
