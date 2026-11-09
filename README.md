# softFin — Gestão Financeira Pessoal (Apple HIG & Offline-First PWA)

O **softFin** é um Progressive Web App (PWA) de gestão financeira pessoal construído especificamente para **perfis neurodivergentes (TDAH)**, unindo a estética nativa do **Apple Human Interface Guidelines (iOS 26 / iPadOS / macOS — *Liquid Glass*)** a uma arquitetura **100% Offline-First** e **Zero-Float** (cálculo estrito em centavos inteiros).

---

## ✨ Pilares do Projeto

1. **⚡ Fricção Zero para TDAH (Regra dos 3 Segundos)**
   - **Pílula Flutuante (`⚡ Anotar (3s)`)**: Acima da Tab Bar em *Liquid Glass*, abre uma *iOS Sheet* focada no teclado numérico. Digite o valor e toque em **1 das 8 categorias** — salva e fecha automaticamente sem botão "Confirmar" extra.
   - **Rede de Segurança ("Desfazer" de 4s)**: Tocou na categoria errada por impulso? Uma pílula flutuante aparece por 4 segundos (`Salvo em [Categoria] — Desfazer`), desfazendo o lançamento e reabrindo a Sheet com um toque.
   - **Modo Privacidade Instantâneo**: Ícone estilo SF Symbol (`eye` / `eye.slash`) na barra superior para ocultar saldos em público (`R$ •••••`) sem recarregar a página.

2. **🍎 Identidade Visual Apple HIG (*Liquid Glass* & *Inset Grouped*)**
   - **Hierarquia Estrita de Materiais**: *Liquid Glass* (`backdrop-filter: blur(24px) saturate(180%)`) aplicado exclusivamente em barras flutuantes, Action Sheets e Alerts; cartões de conteúdo permanecem sólidos em `systemGroupedBackground` (`#F2F2F7` Light / `#000000` Dark) e `secondarySystemGroupedBackground` (`#FFFFFF` Light / `#1C1C1E` Dark).
   - **Tema Claro/Escuro Automático (`light-dark()`)**: Sincronizado nativamente com o sistema operacional sem FOUC (*Flash of Unstyled Content*), com controle *Segmented Control* de 3 estados (`Automático`, `Claro`, `Escuro`) em **Ajustes**.
   - **Navegação Adaptativa**: Tab Bar inferior de 4 abas (`Início`, `Extrato`, `Cartão`, `Ajustes`) no iPhone (`< 768px`) que se transforma automaticamente em *Sidebar* lateral no iPad e Mac (`>= 768px`).

3. **🧮 Motor Financeiro Zero-Float (Centavos Inteiros)**
   - Nenhum valor monetário usa ponto flutuante (`double`/`float`). Todo cálculo, armazenamento e validação nas regras do Firestore opera em **centavos inteiros (`integer`)**.
   - **Parcelamento Inteligente**: Suporta parcelas iguais (resto distribuído automaticamente na 1ª parcela) ou **1ª parcela customizada** com validação dinâmica em tempo real (`systemRed`).
   - **Fatura de Cartão por Competência (`YYYY-MM`)**: Cálculo automático de fechamento e vencimento com rolagem de meses curtos (`clampDayToMonth`, ex.: dia 31 em fevereiro → 28/29).

4. **📴 Arquitetura Offline-First & Resiliência de Comprovantes**
   - Persistência local imediata + fila de mutações com limite de segurança de **250 operações pendentes** (exibindo um *Apple Alert* crítico caso a sacola atinja o limite sem internet).
   - **Fila de Upload em IndexedDB**: Comprovantes anexados sem internet são comprimidos no cliente (`<= 500 KB`) e salvos no banco `softfin-offline-attachments`, com botão de retentativa inline caso o envio falhe.

---

## 🗂️ Estrutura do Repositório

```text
softFin/
├── .agent/skills/                  # Skills locais (grill-me & apple-hig-matcher)
├── assets/design-system-apple/     # Documentação de referência Apple HIG (Português)
├── public/                         # Ícones PWA e assets estáticos
├── src/
│   ├── app/
│   │   ├── layout/                 # AppShell (Sidebar + Toolbar Large Title), BottomNav, OfflineBanner
│   │   ├── store/                  # Store Zustand (useSoftFinStore) + motor de domínio
│   │   └── App.tsx                 # Roteamento por abas + Code Splitting (React.lazy)
│   ├── features/
│   │   ├── accounts/               # CardStatementPage (Fatura do Cartão por ciclo YYYY-MM)
│   │   ├── auth/                   # ReauthGuardModal (Apple Alert para sessão expirada)
│   │   ├── dashboard/              # DashboardPage (Saldo Livre, Contas e Próximos Vencimentos)
│   │   ├── settings/               # SettingsPage (Aparência, Contas, Categorias e Exportação JSON/CSV)
│   │   └── transactions/           # QuickTransactionModal (iOS Sheet 3s) & TransactionsPage (Extrato)
│   ├── pwa/                        # SyncStatusBadge (Popover Menu) & fila IndexedDB de anexos
│   ├── services/firebase/          # SDK modular v11, persistentLocalCache e seed atômico
│   └── shared/
│       ├── components/             # NativeDialog (<dialog> com variantes sheet, action-sheet e alert)
│       ├── styles/                 # Tokens Apple HIG, tipografia SF Pro e Liquid Glass (index.css)
│       ├── types/                  # Contratos TypeScript estritos (domain.types.ts)
│       └── utils/                  # Utilitários puros: currency.ts, date.ts, scheduler.ts
├── firebase.json                   # Configuração de Hosting (CSP, headers) e emuladores
├── firestore.rules                 # Regras de segurança multi-tenant e validação zero-float
├── firestore.indexes.json          # Índices compostos para consultas offline/online
├── storage.rules                   # Regras de Storage para comprovantes (<= 5MB, imagem/PDF)
└── implementation_plan.md          # Especificação arquitetural completa + decisões do Grill-Me
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** `>= 20`
- **npm** `>= 10`

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Gerar build de produção (TypeScript + Vite PWA)
```bash
npm run build
npm run preview
```

---

## 🔒 Segurança e Arquivos Ignorados no Git (`.gitignore`)

O arquivo [`.gitignore`](file:///Users/jvcosta-mba/Dev/softFin/.gitignore) garante que **não sobem para o repositório**:
- `node_modules/` (dependências instaladas via `npm install`)
- `dist/` e `*.tsbuildinfo` (artefatos gerados no build)
- `.env` e `.env.*` (chaves locais do Firebase)
- `.firebase/` e logs de debug dos emuladores
- `.DS_Store` (arquivos de metadados do macOS)
