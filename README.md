# Escala System

Design system didático: **tokens DTCG → Style Dictionary → componentes HTML/CSS → Storybook**.

## Começando

```bash
npm install
npm run storybook   # gera os tokens e abre http://localhost:6006
```

| Script                    | O que faz                                          |
| ------------------------- | -------------------------------------------------- |
| `npm run tokens`          | Traduz `tokens/**/*.json` para `build/`            |
| `npm run storybook`       | Gera tokens + Storybook em modo dev                |
| `npm run build-storybook` | Gera tokens + Storybook estático (`storybook-static/`) |

## Estrutura

```
tokens/                    # Fonte da verdade (formato DTCG: $value, $type, $description)
  primitive/               #   valores brutos: paleta, espaçamento, tipografia
  semantic/                #   valores com significado, referenciando primitivos: {color.blue.600}
style-dictionary.config.js # Configuração da tradução dos tokens
build/                     # Gerado (não versionado)
  css/tokens.css           #   CSS custom properties  --es-*
  scss/_tokens.scss        #   variáveis SCSS          $es-*
  js/tokens.js|json        #   JavaScript / JSON
src/
  index.css                # Importa tokens + base + todos os componentes
  styles/base.css
  components/<nome>/       # <nome>.css + <nome>.stories.js
  foundations/             # Stories que exibem os tokens
.storybook/                # Configuração do Storybook (framework html-vite)
```

## Camadas de tokens

1. **Primitivos** (`color.blue.600`) — a paleta crua. Os componentes **não** usam direto.
2. **Semânticos** (`semantic.color.action.primary.default`) — dizem *para que* serve o valor e referenciam um primitivo.
3. **Componentes** — o CSS só consome `var(--es-semantic-*)` e as escalas de espaço/tipografia.

Experimento para a aula: troque `{color.blue.600}` por `{color.green.700}` em
`tokens/semantic/color.json`, rode `npm run tokens` e veja todos os componentes mudarem.

## Componentes

| Componente | Classe base  | Modificadores                                        |
| ---------- | ------------ | ---------------------------------------------------- |
| Button     | `.es-button` | `--primary`, `--secondary`, `--danger`, `--sm`, `--lg` |
| Badge      | `.es-badge`  | `--info`, `--success`, `--warning`, `--danger`       |
| Input      | `.es-field` + `.es-input` | `.es-field--error`                      |
| Card       | `.es-card`   | `--elevated`                                         |

Nomenclatura no padrão BEM (`bloco__elemento--modificador`) com prefixo `es-`.

### Usando fora do Storybook

```html
<link rel="stylesheet" href="src/index.css" />

<button class="es-button es-button--primary">Salvar</button>
<span class="es-badge es-badge--success">Ativo</span>
```

## Novo componente

1. Crie `src/components/<nome>/<nome>.css` usando apenas tokens (`var(--es-...)`).
2. Crie `src/components/<nome>/<nome>.stories.js` com uma função `render` que retorna uma string HTML.
3. Adicione o `@import` em `src/index.css`.
