# Escala System

Este é um **design system didático**: um conjunto de cores, tipografia, espaçamentos e componentes de interface (botões, inputs, etc.) documentados e prontos para explorar no navegador.

Você não precisa ser desenvolvedor para rodar o projeto. Basta instalar algumas ferramentas e seguir os comandos abaixo.

---

## O que você precisa instalar

Antes de começar, deixe estas ferramentas no computador:

| Ferramenta | Para quê serve | Como instalar |
| ---------- | -------------- | ------------- |
| **Node.js** (versão 20 ou mais recente) | Roda o projeto e baixa as dependências. Vem junto com o `npm`, o comando que usamos no terminal. | [nodejs.org](https://nodejs.org/) — baixe a versão **LTS** |
| **Git** | Baixa (clona) o código deste repositório. | [git-scm.com](https://git-scm.com/) |
| **Editor de código** (opcional, mas recomendado) | Abre e edita os arquivos do projeto. | [Cursor](https://cursor.com/) ou [VS Code](https://code.visualstudio.com/) |

### Como conferir se já está instalado

Abra o **Terminal** (no Mac: app Terminal; no Windows: PowerShell ou Terminal) e digite:

```bash
node -v
npm -v
git -v
```

Se aparecer um número de versão em cada um (ex.: `v22.14.0`), está tudo certo. Se der erro de “comando não encontrado”, instale a ferramenta que faltou pelos links acima e feche/abra o terminal de novo.

---

## Como rodar o projeto (passo a passo)

### 1. Baixar o código

No terminal, escolha uma pasta (por exemplo a de Documentos) e rode:

```bash
cd ~/Documents
git clone https://github.com/mateusvillain/escala-projeto-ds.git
cd escala-projeto-ds
```

Isso copia o projeto para o seu computador e entra na pasta dele.

### 2. Instalar as dependências

Ainda dentro da pasta do projeto:

```bash
npm install
```

Esse comando baixa tudo que o projeto precisa para funcionar (fica na pasta `node_modules`). Só precisa rodar na primeira vez, ou quando alguém adicionar pacotes novos.

### 3. Abrir o Storybook

O Storybook é a “vitrine” do design system: uma página no navegador onde você vê e interage com os componentes.

```bash
npm run storybook
```

Espere o terminal terminar de carregar. O navegador deve abrir em:

**http://localhost:6006**

Se não abrir sozinho, copie esse endereço e cole no Chrome, Firefox ou Safari.

Para parar o Storybook, volte ao terminal e pressione `Ctrl + C`.

---

## Outros comandos úteis

| Comando | O que faz |
| ------- | --------- |
| `npm install` | Instala as dependências do projeto |
| `npm run storybook` | Gera os tokens e abre o Storybook em modo desenvolvimento |
| `npm run tokens` | Só atualiza os tokens (cores, tipografia, etc.) sem abrir o Storybook |
| `npm run build-storybook` | Gera uma versão estática do Storybook (pasta `storybook-static/`) |

---

## O que tem dentro do projeto (visão rápida)

```
tokens/          → Fonte da verdade: cores, tipografia, espaçamento (arquivos JSON)
src/components/  → Componentes (botão, badge, input, card…) em HTML/CSS
src/foundations/ → Páginas do Storybook que mostram os tokens
.storybook/      → Configuração do Storybook
build/           → Arquivos gerados automaticamente (não edite à mão)
```

### Tokens em duas camadas

1. **Primitivos** — a paleta crua (ex.: `color.blue.600`). Os componentes não usam isso direto.
2. **Semânticos** — dizem *para que* serve o valor (ex.: cor primária de ação) e apontam para um primitivo.

Experimento simples: em `tokens/semantic/color.json`, troque `{color.blue.600}` por `{color.green.700}`, rode `npm run tokens` (ou reinicie o Storybook) e veja os componentes mudarem de cor.

---

## Componentes disponíveis

| Componente | Classe base | Variações |
| ---------- | ----------- | --------- |
| Button | `.es-button` | `--primary`, `--secondary`, `--danger`, `--sm`, `--lg` |
| Badge | `.es-badge` | `--info`, `--success`, `--warning`, `--danger` |
| Input | `.es-field` + `.es-input` | `.es-field--error` |
| Card | `.es-card` | `--elevated` |

### Usar fora do Storybook

```html
<link rel="stylesheet" href="src/index.css" />

<button class="es-button es-button--primary">Salvar</button>
<span class="es-badge es-badge--success">Ativo</span>
```

---

## Problemas comuns

| Problema | O que tentar |
| -------- | ------------ |
| `command not found: node` ou `npm` | Instale o [Node.js LTS](https://nodejs.org/) e reabra o terminal |
| `command not found: git` | Instale o [Git](https://git-scm.com/) |
| A porta 6006 já está em uso | Feche outro Storybook/terminal que esteja rodando, ou reinicie o computador |
| `npm install` falhou | Confira se está na pasta certa (`escala-projeto-ds`) e se o Node está na versão 20+ (`node -v`) |

Se travar em algum passo, copie a mensagem de erro do terminal — ela costuma dizer exatamente o que faltou.
