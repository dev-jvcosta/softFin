# Plano Técnico de Arquitetura & Especificação Funcional — SoftFin PWA

> **Status do Documento:** Fase 2 — Especificação Funcional Consolidada (Grill-Me Concluído: Q1–Q9 Aprovadas)  
> **Diretrizes Ativas:** `core-dev` (Clean Architecture, SOLID, TypeScript Strict, Modularidade), `pwa-expert` (Offline-First, App Shell Model, Core Web Vitals, Workbox & Firestore Local Cache) & `grill-me` (Modelo de Dados, Fluxos de Estado, Parcelas Dinâmicas e Limites Offline)

---

## 1. Stack Tecnológica Recomendada (Foco em Performance Mobile e Carregamento Instantâneo)

A arquitetura foi desenhada sob o paradigma **Offline-First App Shell**, priorizando **Zero Layout Shift**, **Time-to-Interactive (TTI) sub-segundo** em redes móveis (3G/4G) e execução enxuta na *main thread* de dispositivos móveis intermediários.

### 1.1. Core Frontend & Build System
* **Bundler & Build Tool:** **Vite 6+** (ESBuild em dev + Rollup em produção) configurado com `build.target: 'esnext'`, *code-splitting* automático por rota e *tree-shaking* estrito de módulos ES.
* **UI Runtime & Linguagem:** **React 19 + TypeScript 5.x (`strict: true`)**. Uso de componentes funcionais enxutos e carregamento preguiçoso (`React.lazy` + `Suspense`) para todas as rotas fora do caminho crítico inicial.
* **Gerenciamento de Estado:**
  * **Estado de Servidor / Persistente:** Delegado nativamente ao cache IndexedDB do **Firebase Firestore SDK (`onSnapshot`)**, evitando duplicação de cache em memória.
  * **Estado de UI Local / Efêmero:** **Zustand** (menos de 1.5 KB gzipped) para filtros de tela, modais, preferências visuais e estado de conectividade/sincronização.
* **Roteamento:** **React Router v7 (SPA Mode)** ou **TanStack Router** com *route prefetching* inteligente baseado em intenção de toque/foco.
* **Estilização & Design System:**
  * **Tailwind CSS v4** (Zero-Runtime CSS, geração de folha de estilos estática minificada via LightningCSS).
  * **Primitivos Nativos da Plataforma Web:** Uso de `<dialog>` nativo (`showModal()`), `popover` API e formulários com `inputmode="decimal"` para teclado numérico mobile imediato sem dependências pesadas de UI.
* **Motor PWA:** **`vite-plugin-pwa` (Workbox v7)** operando com estratégia de manifesto injetado/gerado, controle de ciclo de vida de atualização e suporte a *Background Sync*.

### 1.2. Diretrizes de Performance Mobile e Core Web Vitals (`LCP`, `INP`, `CLS`)
Para garantir métricas verdes no Chrome UX Report (CrUX) em dispositivos móveis:
1. **Critical Rendering Path (CRP) & LCP (< 1.8s):**
   * **Inline Critical CSS:** Estilos do *App Shell* (header, skeleton do saldo e barra de navegação inferior) injetados diretamente no `<head>` do `index.html`.
   * **Resource Hints Estratégicos:** Uso de `<link rel="preconnect">` para origens críticas do Firebase (`https://firestore.googleapis.com`, `https://identitytoolkit.googleapis.com`, `https://firebasestorage.googleapis.com`) e `<link rel="preload" as="font" type="font/woff2" crossorigin>` apenas para a fonte principal *above-the-fold*.
   * **Priorização de Recursos Visuais:** Uso de `fetchpriority="high"` e `loading="eager"` no elemento visual principal (LCP) do Dashboard, e `loading="lazy"` + formatos modernos (`AVIF`/`WebP`) para elementos fora da dobra inicial.
2. **Desbloqueio da Main Thread & INP (< 100ms):**
   * **Regra dos 50ms:** Qualquer cálculo de agregação financeira local ou processamento de listas com mais de 50ms será fatiado cedendo controle à thread principal via `scheduler.yield()` (com fallback para `Promise` + `setTimeout`).
   * **Offloading via Web Workers:** Exportação de relatórios CSV/PDF e compressão de imagens de comprovantes serão executadas fora da *main thread*.
3. **Estabilidade Visual & CLS (< 0.05):**
   * **CSS Containment em Listas Financeiras:** Aplicação de `content-visibility: auto` combinado com `contain-intrinsic-size: auto 4.5rem` nos itens de extrato/transações abaixo da dobra para pular cálculos de layout fora da viewport sem causar pulos de barra de rolagem.
   * Dimensões explícitas (`width` e `height`) em todos os ícones, avatares e comprovantes.

---

## 2. Integração Firebase (Google Cloud Pro / Blaze Tier)

O projeto utilizará o **Firebase Modular Web SDK (v11+)**, importando exclusivamente as funções utilizadas para permitir *tree-shaking* máximo.

### 2.1. Firebase Authentication
* **Métodos de Autenticação:**
  * **Google Sign-In (`GoogleAuthProvider`):** Fluxo principal com um toque, configurado para lidar de forma transparente com o contexto *standalone* de PWAs instalados.
  * **Email/Senha (`EmailAuthProvider`):** Com fluxos de recuperação de senha e verificação de e-mail.
* **Persistência de Sessão Offline:**
  * Inicialização explícita via `initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] })`.
  * Garante que o usuário permaneça autenticado ao abrir o PWA sem conexão à internet, preservando os tokens no IndexedDB local.

### 2.2. Cloud Firestore (Banco de Dados Principal)
* **Decisão Arquitetural de Consultas (Standard Queries vs. Pipelines):**
  * Como **Persistência Offline (`persistentLocalCache`)** e **Listeners em Tempo Real (`onSnapshot`)** são requisitos centrais e obrigatórios deste PWA, a camada de dados utilizará consultas reativas padrão (`collection`, `query`, `where`, `orderBy`, `limit`, `onSnapshot`) apoiadas por índices compostos em `firestore.indexes.json`.
* **Modelagem Multi-Tenant Isolada por Usuário:**
  * `/users/{uid}` — Perfil do usuário, configurações de moeda, tema e metadados de conta.
  * `/users/{uid}/accounts/{accountId}` — Carteiras, contas bancárias e cartões.
  * `/users/{uid}/categories/{categoryId}` — Categorias personalizadas de receitas/despesas.
  * `/users/{uid}/transactions/{transactionId}` — Lançamentos financeiros indexados por `date`, `type`, `categoryId` e `status`.
* **Security Rules (`firestore.rules`):**
  * Isolamento estrito onde cada usuário autenticado (`request.auth != null && request.auth.uid == uid`) só lê e escreve em sua própria subárvore `/users/{uid}/**`, com validação de tipos, campos obrigatórios (`hasOnly`) e limites de tamanho.

### 2.3. Cloud Storage for Firebase
* **Caso de Uso:** Armazenamento seguro de anexos de transações (fotos de recibos, notas fiscais em PDF/imagem) e foto de perfil.
* **Otimização Mobile Antes do Upload:**
  * Imagens capturadas pela câmera do celular passam por redimensionamento e conversão para `image/webp` no cliente (`OffscreenCanvas`) antes do envio, reduzindo o consumo de franquia de dados móveis e espaço de armazenamento em até 80%.
  * Uso de `uploadBytesResumable` para suportar pausas e retomadas automáticas em conexões móveis instáveis.
* **Estrutura de Caminhos & Segurança (`storage.rules`):**
  * Caminho: `/users/{uid}/receipts/{transactionId}/{fileName}`.
  * Validação nas regras de segurança: `request.auth.uid == uid`, `request.resource.size < 5 * 1024 * 1024` (máx. 5 MB) e `request.resource.contentType.matches('image/.*|application/pdf')`.

### 2.4. Recursos Avançados do Plano Google Cloud Pro (Blaze)
* **Point-in-Time Recovery (PITR) & Backups Agendados:** Ativação de recuperação ponto-a-ponto (janela de 7 dias) no Firestore para proteção financeira crítica contra exclusões acidentais.
* **Firebase App Check (reCAPTCHA Enterprise):** Proteção dos endpoints do Firestore e Cloud Storage contra tráfego automatizado não autorizado.
* **Firebase Hosting + CDN Global:** Deploy com compressão Brotli, HTTP/3 e cabeçalhos `Cache-Control` otimizados para o ciclo de vida do Service Worker.

---

## 3. Estratégia de Persistência Offline (Firestore Offline Persistence)

A aplicação operará sob o princípio **Local-First**: toda interação de leitura ou escrita ocorre instantaneamente contra o banco IndexedDB local gerenciado pelo SDK do Firestore, sem bloquear a interface esperando confirmação de rede.

### 3.1. Inicialização Moderna do Cache Persistente Multi-Abas
Em substituição à API legada `enableIndexedDbPersistence()`, utilizaremos a API modular moderna `initializeFirestore` com `persistentLocalCache` e `persistentMultipleTabManager`:

```typescript
// Conceito arquitetural de inicialização (src/services/firebase/config.ts)
import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  }),
});
```

### 3.2. Ciclo de Vida de Leitura, Escrita e Sincronização Automática
1. **Leituras Instantâneas (`Cache-First` via SDK):**
   * Ao abrir o PWA offline, os *listeners* `onSnapshot(query, { includeMetadataChanges: true })` emitem imediatamente os documentos armazenados no IndexedDB local (latência `< 15ms`).
2. **Escritas Otimistas e Fila de Mutações (`Pending Writes`):**
   * Quando o usuário registra uma despesa ou edita um lançamento sem internet, `addDoc`/`updateDoc`/`deleteDoc` atualizam o cache IndexedDB local imediatamente e disparam um novo *snapshot* para a UI.
   * A transação recebe o metadado `snapshot.metadata.hasPendingWrites === true`.
3. **Indicadores Visuais de Estado de Sincronização (UX Offline-First):**
   * Cada item da lista e o cabeçalho do app monitoram `doc.metadata.hasPendingWrites` e `snapshot.metadata.fromCache`:
     * **Ícone de Nuvem Pendente (`hasPendingWrites: true`):** *"Salvo no dispositivo — aguardando conexão para sincronizar"*.
     * **Ícone de Nuvem Confirmada (`hasPendingWrites: false`):** *"Sincronizado na nuvem"*.
4. **Reconexão e Resolução de Conflitos:**
   * Ao detectar o retorno da conectividade, o canal WebChannel do Firestore drena automaticamente a fila de mutações em ordem FIFO, aplicando transformações de servidor (`serverTimestamp()`, `increment()`) e reconciliando eventuais alterações remotas.
5. **Fila Offline para Anexos do Cloud Storage:**
   * Como o Cloud Storage requer rede para upload de binários, comprovantes anexados enquanto o dispositivo está offline serão gravados temporariamente em uma store dedicada no IndexedDB (`offline-receipts-queue`), vinculando o `transactionId`. Assim que o evento `online` / *Background Sync* disparar, o worker enviará o arquivo ao Cloud Storage e atualizará o campo `attachmentUrl` do documento no Firestore.

---

## 4. Árvore de Diretórios Completa do Projeto

Estrutura modular orientada a domínio (*Feature-Sliced / Clean Architecture*), separando claramente configuração PWA, infraestrutura Firebase, domínio financeiro e componentes visuais:

```text
softFin/
├── .firebaserc                         # Aliases de ambientes Firebase (dev / staging / prod)
├── firebase.json                       # Configuração de Hosting, Firestore, Storage e Auth
├── firestore.rules                     # Regras de segurança estritas do Cloud Firestore
├── firestore.indexes.json              # Índices compostos para queries financeiras offline/online
├── storage.rules                       # Regras de segurança para anexos no Cloud Storage
├── index.html                          # App Shell HTML com Critical CSS inline e meta tags PWA
├── vite.config.ts                      # Configuração Vite + vite-plugin-pwa (Workbox)
├── tsconfig.json                       # Configuração TypeScript Strict Mode
├── package.json                        # Dependências e scripts de build/deploy
├── implementation_plan.md              # Este plano arquitetural
│
├── public/                             # Assets públicos estáticos copiados na raiz do build
│   ├── favicon.svg                     # Ícone vetorial para navegadores modernos
│   ├── apple-touch-icon.png            # Ícone 180x180 exclusivo para iOS/iPadOS Home Screen
│   ├── robots.txt                      # Diretivas de indexação
│   └── icons/                          # Matriz de ícones do Web App Manifest
│       ├── icon-192x192.png            # Ícone padrão Android/Desktop (192x192)
│       ├── icon-512x512.png            # Ícone de alta resolução e Splash Screen (512x512)
│       ├── icon-maskable-512x512.png   # Ícone adaptável com safe-zone de 80% (`purpose: maskable`)
│       └── icon-monochrome.svg         # Ícone monocromático para badges e barra de status
│
└── src/
    ├── main.tsx                        # Ponto de entrada: monta a árvore React e registra o SW
    ├── vite-env.d.ts                   # Tipagens de variáveis de ambiente (`import.meta.env`) e PWA
    │
    ├── app/                            # Camada de Orquestração da Aplicação (App Shell)
    │   ├── App.tsx                     # Composição global de Providers e Layout Base
    │   ├── router.tsx                  # Definição de rotas com Code-Splitting (`React.lazy`)
    │   ├── providers/
    │   │   ├── AuthProvider.tsx        # Contexto reativo de sessão do Firebase Auth
    │   │   ├── NetworkProvider.tsx     # Monitoramento de conectividade + `hasPendingWrites`
    │   │   └── ThemeProvider.tsx       # Controle de tema (Light/Dark) sincronizado com `<meta name="theme-color">`
    │   └── layout/
    │       ├── AppShell.tsx            # Estrutura fixa (Topbar + Área de Conteúdo + Bottom Nav)
    │       ├── BottomNav.tsx           # Navegação ergonômica mobile com touch targets >= 48x48px
    │       └── OfflineBanner.tsx       # Indicador discreto de modo offline e fila de sincronização
    │
    ├── pwa/                            # Camada Especializada de Progressive Web App
    │   ├── sw.ts                       # Custom Service Worker (Workbox routing, precache e background sync)
    │   ├── register-sw.ts              # Lógica de registro, detecção de update e controle de cache
    │   ├── offline-storage-queue.ts    # Fila IndexedDB para uploads de comprovantes feitos offline
    │   └── components/
    │       ├── ReloadPrompt.tsx        # Toast não-intrusivo para atualização de nova versão do PWA
    │       ├── InstallPrompt.tsx       # Banner de instalação customizado (`beforeinstallprompt` + guia iOS)
    │       └── SyncStatusBadge.tsx     # Badge visual (`Sincronizado` vs `Salvo no dispositivo`)
    │
    ├── services/                       # Camada de Infraestrutura e Adaptação Externa
    │   └── firebase/
    │       ├── config.ts               # Inicialização modular do App, Auth, Firestore (Persistent Cache) e Storage
    │       ├── auth.service.ts         # Operações de Login Google, Email/Senha e Logout seguro
    │       ├── firestore.service.ts    # Helpers tipados de CRUD, paginação, batch writes e listeners
    │       └── storage.service.ts      # Compressão WebP client-side e upload resiliente de comprovantes
    │
    ├── features/                       # Módulos de Domínio (Feature-First Architecture)
    │   ├── auth/
    │   │   ├── components/             # Formulários de login/cadastro com suporte a Passkeys/Autofill
    │   │   ├── hooks/                  # `useAuthSession.ts`
    │   │   └── pages/                  # `LoginPage.tsx`, `RegisterPage.tsx`
    │   │
    │   ├── dashboard/
    │   │   ├── components/             # Card de Saldo (LCP), Resumo Mensal, Gráfico leve em SVG
    │   │   ├── hooks/                  # `useFinancialSummary.ts`
    │   │   └── pages/                  # `DashboardPage.tsx`
    │   │
    │   ├── transactions/
    │   │   ├── components/             # Lista virtualizada/content-visibility, Modal de Nova Transação
    │   │   ├── hooks/                  # `useTransactions.ts` (listener `onSnapshot` com metadados de cache)
    │   │   ├── types/                  # `transaction.types.ts`
    │   │   └── pages/                  # `TransactionsPage.tsx`
    │   │
    │   ├── accounts/
    │   │   ├── components/             # Gestão de contas bancárias e carteiras
    │   │   ├── hooks/                  # `useAccounts.ts`
    │   │   └── pages/                  # `AccountsPage.tsx`
    │   │
    │   └── settings/
    │       ├── components/             # Gestão de categorias, diagnóstico de cache offline, exportação
    │       └── pages/                  # `SettingsPage.tsx`
    │
    └── shared/                         # Recursos Compartilhados e Utilitários Puros
        ├── components/                 # Botões, Inputs numéricos, Skeletons, Dialogs nativos
        ├── hooks/                      # `useOnlineStatus.ts`, `useMediaQuery.ts`
        ├── utils/
        │   ├── currency.ts             # Formatação monetária (`Intl.NumberFormat`) e aritmética em centavos
        │   ├── date.ts                 # Manipulação de datas (`Intl.DateTimeFormat`) sem bibliotecas pesadas
        │   └── scheduler.ts            # Utilitário `yieldToMain()` (`scheduler.yield()`) para preservar INP
        ├── styles/
        │   └── index.css               # Tokens CSS, regras Tailwind e classes de `content-visibility`
        └── types/
            └── global.d.ts             # Contratos globais e extensões da Web Platform (`BeforeInstallPromptEvent`)
```

---

## 5. Estratégia de Caching do Service Worker (Workbox)

O Service Worker atuará como um proxy inteligente de rede local, garantindo carregamento instantâneo do *App Shell* e prevenindo conflitos com o motor interno de sincronização do Firebase.

### 5.1. Matriz de Políticas de Cache por Recurso

| Categoria de Recurso | Critério de Match (`Workbox`) | Estratégia | Cache Name & Expiração | Justificativa Técnica (`pwa-expert`) |
| :--- | :--- | :--- | :--- | :--- |
| **App Shell & Bundles de Build** | Manifesto injetado no build (`__WB_MANIFEST`: HTML, JS, CSS, ícones base) | **Precache (`precacheAndRoute`)** | `workbox-precache-v2` (Versionado por hash do build) | Disponibiliza toda a estrutura da aplicação instantaneamente no primeiro acesso e 100% offline. |
| **Navegação de Páginas (HTML / SPA)** | `request.mode === 'navigate'` | **`NetworkFirst`** (Timeout de rede: `3s` + Fallback p/ `/index.html`) | `softfin-pages-cache` | Garante que usuários online recebam a versão mais recente do documento HTML, caindo para o App Shell em cache se offline ou em conexão lenta (*Lie-Fi*). |
| **Assets Estáticos (JS, CSS, Web Fonts)** | `['style', 'script', 'worker', 'font'].includes(request.destination)` | **`CacheFirst`** | `softfin-static-assets` (`maxEntries: 80`, `maxAgeSeconds: 30 dias`, status `[0, 200]`) | Arquivos com hash no nome são imutáveis; servi-los direto do cache elimina latência de rede. |
| **Anexos e Avatares (Cloud Storage)** | `url.hostname.includes('firebasestorage.googleapis.com')` (GET) | **`StaleWhileRevalidate`** | `softfin-storage-media` (`maxEntries: 150`, `maxAgeSeconds: 30 dias`, `purgeOnQuotaError: true`) | Exibe comprovantes e recibos imediatamente do cache enquanto revalida em segundo plano, protegendo a cota de armazenamento do dispositivo. |
| **APIs Públicas / Cotações (GET)** | `url.pathname.startsWith('/api/')` | **`StaleWhileRevalidate`** | `softfin-api-cache` (`maxEntries: 50`, `maxAgeSeconds: 24 horas`, status `[0, 200]`) | Entrega resposta imediata para consultas auxiliares (ex: câmbio/índices) e atualiza o cache silenciosamente. |
| **Streams do Firestore & Auth Endpoints** | `url.hostname.includes('firestore.googleapis.com')` ou `identitytoolkit.googleapis.com` ou `securetoken.googleapis.com` | **`NetworkOnly` (Bypass Explícito)** | *Sem Cache no SW* | **Regra Crítica:** O SDK do Firestore gerencia sua própria persistência e fila offline via IndexedDB e conexões long-lived WebChannel. Interceptar essas chamadas no Service Worker corrompe o estado de sincronização e a renovação de JWT. |

### 5.2. Boas Práticas de Cache e Ciclo de Vida
* **Preservação do Back-Forward Cache (`bfcache`):** Não utilizar `Cache-Control: no-store` no documento HTML principal, usando `Cache-Control: no-cache` ou `max-age=0, must-revalidate` no `firebase.json` para não desabilitar o `bfcache` nos navegadores móveis.
* **Limpeza Automática de Caches Antigos:** Ativação de `cleanupOutdatedCaches: true` no Workbox para remover versões obsoletas após cada deploy.
* **Proteção de Quota:** Uso obrigatório de `ExpirationPlugin` com `purgeOnQuotaError: true` nos caches de mídia para evitar falhas de `QuotaExceededError` em aparelhos com pouco espaço livre.

---

## 6. Checklist de Requisitos do Web App Manifest (`manifest.webmanifest`)

Para atingir 100% de conformidade de instalabilidade no Chrome (Android/Desktop) e Safari (iOS/iPadOS), o manifesto e o `index.html` seguirão rigorosamente este checklist:

### 6.1. Propriedades Essenciais de Identidade e Exibição
- [x] **`name`:** `"SoftFin — Gestão Financeira Inteligente"`
- [x] **`short_name`:** `"SoftFin"` (máx. 12 caracteres para evitar truncamento na tela inicial).
- [x] **`description`:** `"Controle financeiro pessoal e empresarial rápido, seguro e 100% funcional offline."`
- [x] **`id`:** `"/"` (identificador único estável da aplicação).
- [x] **`start_url`:** `"/?source=pwa"` (permite rastrear aberturas via ícone instalado).
- [x] **`scope`:** `"/"`
- [x] **`display`:** `"standalone"` (oculta a barra de endereços do navegador, proporcionando experiência de app nativo).
- [x] **`display_override`:** `["window-controls-overlay", "standalone"]` (integração avançada na barra de título em desktops).
- [x] **`orientation`:** `"portrait-primary"` (otimizado para uso mobile com uma mão).
- [x] **`lang` & `dir`:** `"pt-BR"` / `"ltr"`.
- [x] **`categories`:** `["finance", "productivity", "business"]`.

### 6.2. Cores de Tema e Splash Screen
- [x] **`theme_color`:** `"#0F172A"` (Slate 900 — sincronizado dinamicamente com `<meta name="theme-color">` conforme o modo claro/escuro do sistema operacional).
- [x] **`background_color`:** `"#0F172A"` (evita o *flash* de tela branca durante o carregamento da *Splash Screen* nativa do Android/iOS).

### 6.3. Matriz de Ícones Obrigatória
> **Regra da Especificação W3C:** Jamais combinar `"any maskable"` na mesma entrada de ícone (`purpose`), pois isso força o corte da margem de segurança em plataformas que não usam máscaras. Os ícones devem ser declarados em entradas separadas:

- [x] **Ícone `192x192` (`image/png`, `purpose: "any"`):** Para atalho na tela inicial Android e barra de tarefas.
- [x] **Ícone `512x512` (`image/png`, `purpose: "any"`):** Para geração automática da *Splash Screen* e lojas (Play Store TWA / Desktop).
- [x] **Ícone Maskable `512x512` (`image/png`, `purpose: "maskable"`):** Logo centralizado dentro da *safe zone* circular de 80% do canvas, garantindo recorte perfeito em qualquer fabricante Android (Samsung, Pixel, Xiaomi).
- [x] **Ícone Monocromático (`image/svg+xml`, `purpose: "monochrome"`):** Para badges de notificação e temas de ícones monocromáticos do Android 13+.
- [x] **Compatibilidade Apple iOS/iPadOS (`index.html`):**
  - `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`
  - `<meta name="apple-mobile-web-app-capable" content="yes">`
  - `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`

### 6.4. Atalhos Rápidos de Sistema Operacional (`shortcuts`)
- [x] **Atalho 1 — Nova Despesa:** `{ "name": "Nova Despesa", "short_name": "Despesa", "url": "/transactions/new?type=expense" }` (acessível via *long-press* no ícone do app na tela inicial).
- [x] **Atalho 2 — Nova Receita:** `{ "name": "Nova Receita", "short_name": "Receita", "url": "/transactions/new?type=income" }`.


---

## 7. Especificação Funcional Consolidada (Decisões do Grill-Me: Q1–Q9)

Esta seção consolida todas as regras de negócio, modelos de dados, máquinas de estado, fluxos alternativos e limites offline validados durante a entrevista iterativa.

### 7.1. Modelo de Dados Canônico (TypeScript / Firestore Schema)

Todos os valores monetários são armazenados como **inteiros em centavos (`number`)** para evitar erros de ponto flutuante IEEE 754.

```typescript
// /users/{uid}
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  currency: 'BRL' | 'USD' | 'EUR';
  privacyModeEnabled: boolean;          // Q9: "Olhinho" com memória persistente
  lastUsedAccountId?: string;           // Q8: Pré-seleção na Anotação Relâmpago
  seedCompleted: boolean;               // Q8: Indica se o Kit Inicial já foi criado
  createdAt: Timestamp;
}

// /users/{uid}/accounts/{accountId}
export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'wallet' | 'savings' | 'credit_card';
  currentBalanceInCents: number;        // Q2 & Q5: Atualizado exclusivamente via increment(delta)
  creditLimitInCents?: number;          // Exclusivo para type === 'credit_card'
  closingDay?: number;                  // Q4: Dia de fechamento da fatura (1-31)
  dueDay?: number;                      // Q4: Dia de vencimento da fatura (1-31)
  isArchived: boolean;                  // Q5: Gaveta de Arquivados (nunca delete físico se houver histórico)
  color: string;
  icon: string;
  updatedAt: Timestamp;
}

// /users/{uid}/accounts/{cardId}/statements/{statementId} (Formato YYYY-MM)
export interface CreditCardStatement {
  id: string;                           // Ex: "2026-11"
  cardId: string;
  status: 'open' | 'closed' | 'paid' | 'partial'; // Q4: Máquina de estados da fatura
  totalAmountInCents: number;
  paidAmountInCents: number;
  remainingBalanceInCents: number;      // Q4: Saldo residual rolado para a próxima fatura em pagamento parcial
  closingDate: string;                  // ISO Date
  dueDate: string;                      // ISO Date
}

// /users/{uid}/categories/{categoryId}
export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string;
  color: string;
  isDefaultSeed: boolean;               // Q8: Kit inicial de 8 categorias
  isArchived: boolean;                  // Q5: Soft-archive para preservar relatórios passados
}

// /users/{uid}/recurringTemplates/{templateId}
export interface RecurringTemplate {
  id: string;                           // Q7: "Molde" de Assinaturas e Contas Fixas
  title: string;
  type: 'income' | 'expense';
  amountInCents: number;
  accountId: string;
  categoryId: string;
  dayOfMonth: number;                   // 1-31
  isActive: boolean;
  lastMaterializedMonth: string;        // Ex: "2027-01" (Garante geração da janela de 3 meses offline)
  updatedAt: Timestamp;
}

// /users/{uid}/transactions/{transactionId}
export interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'transfer';
  status: 'pending' | 'paid' | 'cancelled'; // Q2: Máquina de estados
  amountInCents: number;
  originalAmountInCents?: number;       // Q4: Valor original preservado antes de desconto de antecipação
  discountInCents?: number;             // Q4: Desconto obtido na antecipação de parcela
  description: string;                  // Q8: Fallback automático para o nome da categoria se vazio
  accountId: string;                    // Conta principal ou de origem (se transfer)
  destinationAccountId?: string;        // Q2: Conta de destino quando type === 'transfer'
  categoryId: string;
  transactionDate: string;              // Q4: Data real do evento/compra (YYYY-MM-DD)
  competenceMonth: string;              // Q4: Mês de competência / fatura (YYYY-MM)
  statementId?: string;                 // Vinculação à fatura do cartão (YYYY-MM)
  
  // Metadados de Parcelamento Dinâmico (Q1 & Q4)
  installmentGroupId?: string;
  installmentIndex?: number;            // 1..N
  installmentTotal?: number;            // Máx 12 offline / 48 online (Q6)
  isAnticipated?: boolean;              // Q4: Etiqueta de parcela antecipada

  // Metadados de Recorrência / Conta Fixa (Q7)
  recurringTemplateId?: string;

  // Metadados de Comprovante Offline (Q3 & Q6)
  attachmentUrl?: string;
  attachmentSyncStatus?: 'none' | 'queued' | 'uploading' | 'synced' | 'failed';
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

### 7.2. Regras de Negócio & Fluxos de Estado

#### 1. Parcelas Dinâmicas (Q1 & Q6)
* **Materialização Atômica (`writeBatch`):** Ao criar uma compra parcelada em `N` vezes, o app gera imediatamente `N` documentos independentes em `transactions` compartilhando o mesmo `installmentGroupId`.
* **Limite de Segurança Offline (Q6):**
  * **Online:** Até **48 parcelas**.
  * **Offline:** Limitado a **12 parcelas** para proteger a fila `PendingWrites` do Firestore.
* **Regra de Arredondamento e Edição Híbrida (Q1):**
  * **Na Criação:** O resíduo de centavos de divisões não exatas (ex: `R$ 100,00 / 3`) é alocado automaticamente na **1ª parcela** (`R$ 33,34`), mantendo as demais em `R$ 33,33`. Se o usuário editar manualmente o valor da 1ª parcela (entrada), o saldo restante é redistribuído igualmente nas parcelas `2..N`.
  * **Na Edição Posterior:** Ao editar uma parcela existente, um modal pergunta o escopo: *"Apenas esta parcela"* ou *"Esta e todas as futuras em aberto"*. Parcelas com `status === 'paid'` são bloqueadas contra edição em cascata.

#### 2. Ciclo de Cartão de Crédito, Corte e Antecipação (Q4)
* **Corte Automático (`closingDay`):** Compras realizadas em `dia >= closingDay` têm a 1ª parcela alocada automaticamente no `statementId` do mês subsequente.
* **Antecipação com Desconto:** Ao antecipar parcelas futuras para a fatura aberta atual, o `statementId` das parcelas selecionadas muda para o mês atual, `isAnticipated` passa para `true`, `originalAmountInCents` guarda o valor antigo (exibido riscado na UI) e `amountInCents` recebe o valor com desconto.
* **Pagamento Parcial de Fatura:** Se o pagamento da fatura (transação `type: 'transfer'` da Conta Corrente para o Cartão) for menor que `totalAmountInCents`, a fatura recebe `status: 'partial'` e o `remainingBalanceInCents` é rolado automaticamente para a fatura `open` do mês seguinte.

#### 3. Máquina de Estados de Saldo e Conflito Zero Multi-Dispositivo (Q2 & Q5)
* **`pending` (Previsto):** Entra no cálculo do *Saldo Projetado do Mês*, mas **não** altera o `currentBalanceInCents` da conta.
* **`paid` (Efetivado):** Dispara no mesmo `writeBatch` um `updateDoc(accountRef, { currentBalanceInCents: increment(deltaInCents) })`.
* **Prevenção de Conflito *Last-Write-Wins* (Q5):** O saldo nunca é sobrescrito com um valor absoluto; o uso estrito de `increment(delta)` garante que gastos lançados offline no celular e no computador sejam somados matematicamente sem perda quando ambos reconectarem.
* **Botão "Conferir Meu Saldo" (Q5):** Disponível nas Configurações para varrer e auditar o histórico completo caso o usuário deseje validar a soma.
* **Gaveta de Arquivados (Q5):** Contas e categorias com transações vinculadas nunca sofrem `deleteDoc`; recebem `isArchived: true`. Contas com lançamentos `pending` futuros exigem transferência ou cancelamento das pendências antes do arquivamento.

#### 4. Contas Fixas e Assinaturas via "Molde Automático" (Q7)
* Ao abrir o app (mesmo 100% offline), um verificador local inspeciona a coleção `recurringTemplates` em cache e materializa automaticamente os lançamentos `pending` para a janela ativa de **3 meses** (mês atual + próximos 2 meses) caso ainda não existam.
* Reajustes de preço no molde atualizam apenas o template e as ocorrências futuras ainda `pending`, preservando o histórico `paid` dos meses anteriores.

#### 5. Limites Operacionais Offline & Recuperação de Falhas (Q3 & Q6)
* **Janela Deslizante de Listeners (`onSnapshot`):** Ativa apenas para os últimos 3 meses (mês anterior, atual e próximo) + todas as transações `pending` vencidas. Meses antigos são consultados sob demanda (`getDocs`).
* **Teto da "Mochila" (`PendingWrites`):** Aviso preventivo no `OfflineBanner` ao atingir **150 documentos pendentes** de sincronização e bloqueio de novos cadastros em lote ao atingir **250 documentos pendentes**.
* **Fila de Fotos Offline (`offline-receipts-queue`):** Máximo de **20 fotos ou 50 MB** (em WebP). Se a transação for excluída ainda offline, o blob da foto é removido imediatamente do IndexedDB (*Garbage Collection*). Se o upload falhar 3 vezes após reconectar, o item recebe `attachmentSyncStatus: 'failed'` e exibe botão de *"Tentar de novo"* ou *"Descartar"* direto no card.
* **Sessão Expirada com Mochila Cheia:** Se o token expirar com dados locais pendentes, o app **jamais limpa o IndexedDB**; exibe um modal de reautenticação rápida validando o mesmo `uid` para drenar a fila em segurança.

#### 6. UX Anti-Fricção (Perfil TDAH), Privacidade e Exportação (Q8 & Q9)
* **Kit Inicial no 1º Login:** Criação automática da conta `"Carteira Principal"` e 8 categorias essenciais (*Alimentação, Moradia, Transporte, Lazer, Saúde, Assinaturas, Salário, Outros*).
* **Regra dos 3 Segundos (Anotação Relâmpago):** Apenas **Valor** e **Categoria** exigem toque. Data (`Hoje`), Conta (`última usada`), Status (`Pago`) e Descrição (`nome da categoria`) são preenchidos automaticamente.
* **Olhinho com Memória (`privacyModeEnabled`):** Esconde saldos (`R$ ••••`) e persiste a escolha entre sessões para proteger a privacidade no transporte público.
* **Exportação Local com Aviso:** Geração de CSV/PDF via Web Worker funciona offline usando os dados locais e sinaliza com uma tag discreta (`"Pendente de sincronização"`) os itens que ainda estão na mochila local.

---

## 8. Mapeamento de Telas para o Figma (UI Architecture)

Estrutura de telas pronta para ser gerada/mapeada via Figma MCP (Mobile-First `390x844`, Dark/Light Mode):

1. **Tela 01 — Auth & Reautenticação Segura (`LoginPage` + Modal `ReauthGuard`):**
   * Login com 1 toque (Google) + Email/Senha e modal de renovação de sessão que preserva a fila offline.
2. **Tela 02 — Dashboard Principal (`DashboardPage`):**
   * Topbar com Status da Nuvem (`SyncStatusBadge`), botão **"Olhinho"** com memória e `OfflineBanner` inteligente.
   * Card Principal de Saldo (LCP) mostrando *Saldo Atual* vs. *Saldo Projetado do Mês*.
   * Resumo de Faturas de Cartão abertas e Contas Fixas próximas do vencimento.
3. **Tela 03 — Modal / Sheet de Anotação Relâmpago (`QuickTransactionSheet`):**
   * Teclado numérico imediato (`inputmode="decimal"`), grade visual das 8 categorias para toque único, toggle rápido de Parcelamento (`1x..12x` offline / `48x` online) e anexo de comprovante.
4. **Tela 04 — Extrato & Gestão de Parcelas (`TransactionsPage`):**
   * Navegação por mês, filtros rápidos (`Pago`, `Pendente`, `Cartão`), indicadores de sincronização por item (nuvem pendente, botão de reenviar foto) e Modal de Escopo de Edição (*"Apenas esta"* vs *"Esta e futuras"*).
5. **Tela 05 — Detalhe da Fatura do Cartão & Antecipação (`CardStatementPage`):**
   * Barra de limite disponível, data de corte (`closingDay`), seletor de múltiplas parcelas para **Antecipar com Desconto** (exibindo valor original riscado) e modal de Pagamento Total/Parcial.
6. **Tela 06 — Carteiras, Contas Fixas & Configurações (`SettingsPage`):**
   * Gestão de Contas/Cartões, **Moldes de Contas Fixas**, **Gaveta de Arquivados**, botão **"Conferir Meu Saldo"** e Exportação CSV/PDF local.
