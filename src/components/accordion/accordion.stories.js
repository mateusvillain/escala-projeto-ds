import './accordion.css';
import '../selection-control/selection-control.css';

// Ícones do Penpot (Icon/*), traço em currentColor para herdar o token de cor
const svg = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

const icons = {
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>',
};
const chevron = '<path d="M6 9l6 6 6-6"/>';

let uid = 0;

const accordion = ({ title, body, icon = 'none', open = false, optionsType = 'none', options = [], name }) => {
  const id = `es-accordion-${++uid}`;
  const iconMarkup = icon !== 'none' ? `<span class="es-accordion__icon">${svg(icons[icon])}</span>` : '';
  const bodyMarkup = body ? `<p class="es-accordion__body" id="${id}-body">${body}</p>` : '';
  const optionsMarkup =
    optionsType !== 'none' && options.length
      ? `<fieldset class="es-accordion__options"${body ? ` aria-describedby="${id}-body"` : ''}>
          <legend class="es-accordion__legend">${title}</legend>
          ${options
            .map(
              (label, i) => `
          <label class="es-choice">
            <input class="es-choice__input" type="${optionsType}" name="${id}-option" value="${i + 1}"${i === 0 ? ' checked' : ''} />
            <span>${label}</span>
          </label>`
            )
            .join('')}
        </fieldset>`
      : '';

  return `
    <details class="es-accordion"${open ? ' open' : ''}${name ? ` name="${name}"` : ''}>
      <summary class="es-accordion__header">
        ${iconMarkup}
        <span class="es-accordion__title">${title}</span>
        <span class="es-accordion__chevron">${svg(chevron)}</span>
      </summary>
      <div class="es-accordion__content">
        ${bodyMarkup}
        ${optionsMarkup}
      </div>
    </details>`;
};

const frame = (content, width = 400) => `<div style="max-width:${width}px">${content}</div>`;

/**
 * Seção expansível que mostra ou esconde conteúdo relacionado a um título.
 * Documentação completa na página Docs (accordion.mdx).
 */
export default {
  title: 'Componentes/Accordion',
  render: (args) => frame(accordion(args)),
  argTypes: {
    title: { control: 'text', description: 'Texto do cabeçalho (nome acessível do controle).' },
    body: { control: 'text', description: 'Texto do corpo. Deixe vazio para ocultar.' },
    icon: {
      control: 'select',
      options: ['none', 'info', 'settings', 'filter'],
      description: 'Ícone decorativo ao lado do título.',
    },
    open: { control: 'boolean', description: 'Estado inicial: aberto (`open`) ou fechado (`closed`).' },
    optionsType: {
      control: 'inline-radio',
      options: ['none', 'checkbox', 'radio'],
      description: 'Tipo do grupo de opções no conteúdo.',
    },
    options: { control: 'object', description: 'Labels das opções.' },
  },
  args: {
    title: 'Título do accordion',
    body: 'Conteúdo do accordion. Use este espaço para descrever o assunto, dar contexto ou orientar a escolha entre as opções abaixo.',
    icon: 'info',
    open: false,
    optionsType: 'checkbox',
    options: ['Opção 1', 'Opção 2', 'Opção 3'],
  },
};

export const Default = {};

export const Aberto = { args: { open: true } };

export const SoTexto = {
  name: 'Só texto',
  args: { open: true, optionsType: 'none' },
};

export const ComCheckbox = {
  name: 'Com checkbox',
  args: {
    open: true,
    icon: 'filter',
    title: 'Status do projeto',
    body: 'Mostre apenas os projetos nos status selecionados.',
    optionsType: 'checkbox',
    options: ['Ativo', 'Pausado', 'Arquivado'],
  },
};

export const ComRadio = {
  name: 'Com radio',
  args: {
    open: true,
    icon: 'settings',
    title: 'Frequência de notificações',
    body: 'Escolha com que frequência você quer receber o resumo por e-mail.',
    optionsType: 'radio',
    options: ['Diária', 'Semanal', 'Nunca'],
  },
};

export const SemIcone = {
  name: 'Sem ícone',
  args: { open: true, icon: 'none', optionsType: 'none' },
};

export const Grupo = {
  render: () =>
    frame(`
      <div class="es-accordion-group">
        ${accordion({
          name: 'faq',
          open: true,
          icon: 'info',
          title: 'O que é o Escala System?',
          body: 'Um design system didático construído com tokens DTCG, Style Dictionary e HTML/CSS puro.',
        })}
        ${accordion({
          name: 'faq',
          icon: 'info',
          title: 'Como atualizo os tokens?',
          body: 'Edite os arquivos JSON em /tokens e rode npm run tokens.',
        })}
        ${accordion({
          name: 'faq',
          icon: 'info',
          title: 'Posso usar em qualquer framework?',
          body: 'Sim. Os componentes são HTML e CSS e funcionam com qualquer stack.',
        })}
      </div>`, 480),
};

export const Responsivo = {
  render: () =>
    frame(
      accordion({
        open: true,
        icon: 'settings',
        title: 'Preferências de privacidade e compartilhamento de dados da conta',
        body: 'Em telas estreitas o título quebra em várias linhas e o ícone continua alinhado à primeira linha.',
        optionsType: 'checkbox',
        options: ['Perfil público', 'Mostrar e-mail para a equipe'],
      }),
      320
    ),
};

// Exemplos dos "Dos and don'ts" — tag !dev: aparecem só na página Docs

export const DoTituloCurto = {
  tags: ['!dev'],
  render: () => frame(accordion({ icon: 'filter', title: 'Status do projeto' })),
};

export const DontTituloLongo = {
  tags: ['!dev'],
  render: () =>
    frame(
      accordion({
        icon: 'filter',
        title: 'Clique aqui para ver e selecionar os status dos projetos que você deseja filtrar na lista abaixo',
      })
    ),
};

export const DoConteudoOpcional = {
  tags: ['!dev'],
  render: () =>
    frame(
      accordion({
        open: true,
        icon: 'settings',
        title: 'Opções avançadas',
        body: 'Ajustes que a maioria das pessoas não precisa alterar.',
        optionsType: 'checkbox',
        options: ['Ativar modo de depuração', 'Mostrar IDs internos'],
      })
    ),
};

export const DontConteudoCritico = {
  tags: ['!dev'],
  render: () =>
    frame(
      accordion({
        icon: 'info',
        title: 'Termos de uso (obrigatório)',
        body: 'Você precisa aceitar os termos para continuar.',
        optionsType: 'checkbox',
        options: ['Li e aceito os termos de uso'],
      })
    ),
};

export const DoIconesConsistentes = {
  tags: ['!dev'],
  render: () =>
    frame(`
      <div class="es-accordion-group">
        ${accordion({ icon: 'info', title: 'Sobre o projeto' })}
        ${accordion({ icon: 'info', title: 'Equipe' })}
        ${accordion({ icon: 'info', title: 'Prazos' })}
      </div>`),
};

export const DontIconesMisturados = {
  tags: ['!dev'],
  render: () =>
    frame(`
      <div class="es-accordion-group">
        ${accordion({ icon: 'info', title: 'Sobre o projeto' })}
        ${accordion({ title: 'Equipe' })}
        ${accordion({ icon: 'filter', title: 'Prazos' })}
      </div>`),
};
