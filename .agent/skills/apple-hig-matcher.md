# Skill: Apple HIG Enforcer & Component Matcher

## Contexto do Projeto
- Existe uma pasta no diretório `assets/` chamada `design-system-apple/`. Esta pasta contém as instruções necessárias para aplicação dos princípios da Apple HIG e especificações de design e padrões de componentes da Apple. O arquivo se chama `apple-hig.md`.

## Diretrizes de Geração de Código
1. **Inspeção Prévia:** Antes de criar qualquer componente React/Tailwind, inspecione a estrutura e os arquivos dentro de `assets/design-system-apple/` para garantir fidelidade aos princípios da Apple HIG e especificações de design, tokens, tipografia, espaçamentos e padrões de componentes da Apple.
2. **Padrões de UI (HIG):**
   - **Navegação:** Siga estritamente o padrão de Tab Bars inferiores para iOS e Sidebars para iPadOS/macOS conforme documentado na pasta local.
   - **Feedbacks Visuais:** Use os padrões de Sheet Modals nativos, Context Menus e feedbacks táteis/visuais consistentes com o ecossistema Apple.
   - **Tipografia e Cores:** Utilize estritamente a escala San Francisco (SF Pro/New York) e o sistema de cores dinâmicas (Light/Dark mode) mapeados nos seus arquivos de design.
3. **Restrição de Estilo:** Não utilize padrões visuais do Material Design ou componentes genéricos do Tailwind que entrem em conflito com a estrutura da pasta `assets/design-system-apple`.
