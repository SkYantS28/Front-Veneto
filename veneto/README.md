# Veneto — Frontend (React + Vite)

Este repositório contém a aplicação frontend construída com React e Vite. Abaixo está o resumo da primeira sprint: o que foi feito até agora, como rodar o projeto localmente e próximos passos sugeridos.

## Primeira Sprint — Resumo (até 10/11/2025)

Principais entregas desta sprint:

- Inicialização do projeto com Vite (template React).
- Configuração básica de ESLint (`eslint.config.js`).
- Estrutura de pastas criada em `src/` com componentes e páginas:
	- `src/components/`: `Header`, `Footer`, `NavBar`, `Wallpaper` (cada um com JSX e CSS associados).
	- `src/PageComponents/`: `HomePage`, `LoginPage`, `RegisterPage`, `ProfilePage`, `ReservationPage`, `CartPage`, `ConfigurationPage`.
- Estilos organizados por componente (arquivos CSS separados por componente/página).
- Assets estáticos organizados em `public/img/` e `src/assets/`.
- Arquivos de configuração: `vite.config.js`, `eslint.config.js`.
- Adição de `.gitignore` para evitar versionar `node_modules`, build outputs e arquivos de IDE.

Arquivos criados/alterados mais relevantes (exemplos):

- `index.html`, `vite.config.js`, `package.json`
- `src/main.jsx`, `src/index.css`
- `src/components/Header/Header.jsx`, `src/components/Header/Header_estrutura.css`
- `src/PageComponents/HomePage/Home.jsx`, `src/PageComponents/HomePage/Home.css`

## Como rodar localmente

No Windows PowerShell, abra a pasta `veneto/` e execute:

```powershell
# instalar dependências
npm install

# rodar servidor de desenvolvimento (Vite)
npm run dev
```

Após o comando, abra a URL exibida por Vite (padrão: http://localhost:5173).

## Estrutura resumida do projeto

- `public/` — arquivos estáticos servidos pelo Vite (ex.: imagens)
- `src/` — código fonte React:
	- `components/` — componentes reutilizáveis (Header, Footer, NavBar, Wallpaper)
	- `PageComponents/` — páginas da aplicação (Home, Login, Register, Profile, Reservation, Cart, Configuration)
	- `assets/` — imagens e outros recursos
	- `main.jsx` — ponto de entrada
	- `index.css` — estilos globais

## Próximos passos sugeridos

1. Adicionar roteamento com React Router e configurar navegação entre páginas.
2. Implementar estado global (Context API ou outra biblioteca) para gerenciamento de sessão e carrinho.
3. Integrar chamadas a API (mock inicialmente, depois com backend real) para autenticação, reservas e carrinho.
4. Adicionar testes unitários (Jest + React Testing Library) e testes E2E (Playwright/Cypress).
5. Considerar migração para TypeScript para maior segurança e melhores regras de lint.

## Notas e decisões

- Mantivemos CSS por componente para simplicidade; podemos migrar para CSS Modules ou CSS-in-JS conforme a necessidade.
- Arquivos de configuração e scripts estão na raiz (`package.json`, `vite.config.js`, `eslint.config.js`).

## Contribuindo

1. Abra uma branch para a sua feature ou correção: `git checkout -b feat/nome-da-feature`.
2. Faça commits atômicos e descritivos.
3. Abra um pull request quando a feature estiver pronta.

---

Se quiser, posso também:

- Adicionar uma lista de issues / tarefas no `README` ligada às próximas stories da sprint.
- Gerar um CHANGELOG inicial com as alterações desta sprint.

Diga qual das opções prefere que eu faça a seguir.
