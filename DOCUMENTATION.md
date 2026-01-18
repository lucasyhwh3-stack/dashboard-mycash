# mycash+ — Documentação

## Progresso

- [x] **PROMPT 0**: Análise e Planejamento Inicial
- [x] **PROMPT 1**: Estrutura Base
- [x] **PROMPT 2**: Layout Desktop
- [ ] **PROMPT 3**: Sistema de Design
- [ ] **PROMPT 4**: Componentes Dashboard

---

## PROMPT 0: Análise e Planejamento Inicial

**Status**: ✅ Concluído  
**Data**: 18/01/2026  
**Fonte**: [Figma Design](https://www.figma.com/design/YNgBv9zNPdesG0WTZ7Yk8x/Portifolio?node-id=441-45613)

![Dashboard Design](file:///.gemini/antigravity/brain/db233093-e7c8-4d85-b7ec-7e226c235819/dashboard_design_details_1768746102548.png)

### 📋 Componentes Identificados

#### 1. Sidebar (Desktop - Navegação)
- **Logo**: "mycash+" no topo
- **Itens de Menu**:
  - "Home" (ativo - com fundo `--lime-400` arredondado)
  - "Cartões"
- **Perfil** (rodapé):
  - Foto do usuário
  - Nome: "Lucas Marte"
  - Email

#### 2. Header (Topo da Página)
- **Campo de Busca**: Input com ícone de lupa
- **Filtro de Data**: Seletor de período (ex: "01 Jan - 31 Jan 2026")
- **Ação Principal**: Botão "**+ Nova transação**" (estilo sólido)

#### 3. Métricas de Categoria (Cards Top Row)
Cards individuais com progresso circular:
- Aluguel (R$ 2.000,00 / R$ 2.000,00)
- Alimentação (R$ 846,00 / R$ 2.000,00)
- Mercado (R$ 1.350,00 / R$ 2.000,00)  
- Academia (R$ 150,00)

Cada card possui:
- Gráfico circular de progresso
- Valor atual vs limite
- Indicador visual de cor

#### 4. Cards de Resumo Financeiro
- **Saldo Total**: R$ 12.000,00 (card azul primário destacado)
- **Receitas**: R$ 12.000,00 (verde, seta para cima)
- **Despesas**: R$ 10.000,00 (vermelho, seta para baixo)

#### 5. Cards & Contas
Lista de bancos com saldos:
- Nubank (R$ 5.000,00)
- Inter (R$ 3.500,00)
- Picpay (R$ 3.500,00)

Cada card tem:
- Ícone do banco
- Nome da instituição
- Saldo

#### 6. Fluxo Financeiro
Gráfico de área comparativo:
- Linha verde: Receitas
- Linha vermelha: Despesas
- Eixo X: Meses (JAN-JUN)
- Eixo Y: Valores (R$ 10.000 - R$ 70.000)

#### 7. Próximas Despesas
Lista de contas a vencer:
- Coluna "Conta" com checkbox
- Data de vencimento
- Status visual

#### 8. Extrato Detalhado (Tabela)
Colunas:
- Membro (avatar + nome)
- Data
- Descrição
- Categoria
- Conta/Cartão
- Parcelas
- Valor

### 🎨 Design System - Tokens Identificados

#### Cores

##### Semânticas (Sugestão via Análise)
```css
--color-primary: #[azul vibrante do Saldo Total]
--color-success: #[verde das Receitas]
--color-error: #[vermelho das Despesas]
--color-sidebar-active: #D4FF00 (lime)
--color-bg-page: #F8F9FA (off-white)
--color-text-primary: #1A1A1A
--color-text-secondary: #6B7280
--color-border: #E5E7EB
```

##### Primitivas Identificadas
- **Lime**: `#D4FF00` (estado ativo sidebar)
- **Gray 50**: `#F8F9FA` (fundo página)
- **Gray 100**: `#F3F4F6` (cards)
- **Gray 200**: `#E5E7EB` (borders)
- **Gray 600**: `#6B7280` (texto secundário)
- **Gray 900**: `#1A1A1A` (texto primário)

#### Espaçamento

**Auto Layout identificado no Figma:**
- Gap entre cards no grid principal: `16px`
- Gap entre seções: `24px`
- Padding externo do container: `32px`
- Padding interno dos cards: `16px` - `24px`

**Escala proposta:**
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
```

#### Tipografia

**Fonte**: Sans-serif (estilo Inter)

**Pesos identificados:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Tamanhos:**
- Valores grandes (Saldo Total): `32px` - `36px`
- Títulos de seção: `20px` - `24px`
- Labels: `14px` - `16px`
- Texto secundário/small: `12px` - `14px`

#### Shape

**Border Radius:**
- Cards principais: `16px` - `20px`
- Botões: `8px` - `12px`
- Badges/Pills: `24px` (rounded full)
- Item ativo sidebar: `12px`

### 🧭 Estrutura de Navegação

#### Desktop (≥1280px)
- **Sidebar fixa** no lado esquerdo
- Dois estados:
  - **Expanded**: Ícones + labels de texto
  - **Collapsed**: Apenas ícones
- Sidebar **empurra** o conteúdo (não sobrepõe)
- Item ativo destacado com fundo lime

#### Mobile & Tablet (<1280px)
- Sidebar **não renderiza**
- **Header Mobile aparece** com:
  - Botão de menu (hambúrguer)
  - Ações principais
- Menu como **drawer/overlay**

#### Transições entre Seções
- Navegação via sidebar/menu
- Sem animações complexas visíveis no design estático

### 🏗️ Arquitetura Proposta

#### Estrutura de Pastas

```
src/
├── components/
│   ├── ui/                    # Componentes base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Avatar.tsx
│   ├── layout/                # Estrutura de layout
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderMobile.tsx
│   │   ├── Container.tsx
│   │   └── MainLayout.tsx
│   └── dashboard/             # Componentes do dashboard
│       ├── MetricCard.tsx     # Cards de categoria
│       ├── SummaryCard.tsx    # Saldo/Receitas/Despesas
│       ├── BankCard.tsx       # Cards de bancos
│       ├── FinanceChart.tsx   # Gráfico de fluxo
│       ├── ExpensesList.tsx   # Próximas despesas
│       └── TransactionTable.tsx # Extrato detalhado
├── pages/
│   ├── Dashboard.tsx
│   ├── Cards.tsx
│   ├── Transactions.tsx
│   └── Profile.tsx
├── hooks/
│   ├── useSupabase.ts
│   ├── useAuth.ts
│   └── useResponsive.ts
├── services/
│   ├── api/
│   └── supabase/
├── styles/
│   ├── globals.css
│   └── tokens.css             # Design tokens como CSS vars
├── types/
│   └── index.ts
└── utils/
    └── formatters.ts
```

#### Hierarquia de Componentes

```
App
└── MainLayout
    ├── Sidebar (desktop ≥1280px)
    │   ├── Logo
    │   ├── Navigation
    │   │   ├── NavItem (Home)
    │   │   └── NavItem (Cartões)
    │   └── UserProfile
    │       ├── Avatar
    │       └── UserInfo
    ├── HeaderMobile (mobile/tablet <1280px)
    │   ├── MenuButton
    │   └── ActionButton
    ├── Header (desktop)
    │   ├── SearchInput
    │   ├── DatePicker
    │   └── Button (Nova transação)
    └── Container (main content)
        └── DashboardPage
            ├── MetricsRow
            │   ├── MetricCard (Aluguel)
            │   ├── MetricCard (Alimentação)
            │   ├── MetricCard (Mercado)
            │   └── MetricCard (Academia)
            ├── SummaryRow
            │   ├── SummaryCard (Saldo Total)
            │   ├── SummaryCard (Receitas)
            │   └── SummaryCard (Despesas)
            ├── Grid
            │   ├── BankCards
            │   │   ├── BankCard (Nubank)
            │   │   ├── BankCard (Inter)
            │   │   └── BankCard (Picpay)
            │   ├── FinanceChart
            │   ├── ExpensesList
            │   └── TransactionTable
```

#### Estratégia de Componentização

**Princípios Aplicados:**

1. **Atomic Design**
   - Começar com componentes base (`ui/`)
   - Compor features a partir deles
   - Páginas apenas orquestram

2. **Single Responsibility**
   - `MetricCard`: Exibe uma métrica de categoria
   - `SummaryCard`: Exibe resumo financeiro
   - `TransactionTable`: Exibe lista de transações

3. **Design System First**
   - TODOS os estilos vêm de tokens
   - Hierarquia: Semântico → Primitivo → Conversão
   - ZERO valores hardcoded

4. **Responsividade**
   - Mobile-first
   - Breakpoints: md:768px, lg:1280px, xl:1920px
   - Sidebar/Header condicional por breakpoint

### 🎯 Conversões Planejadas

**Exemplos de conversões que serão aplicadas:**

| Valor no Figma | Token CSS | Justificativa |
|----------------|-----------|---------------|
| `#D4FF00` | `--color-sidebar-active` | Cor específica do estado ativo |
| `#F8F9FA` | `--gray-50` | Fundo da página (primitiva mais próxima) |
| `24px` (spacing) | `--spacing-lg` | Espaçamento padrão entre seções |
| `16px` (spacing) | `--spacing-md` | Gap entre cards |
| `32px` (spacing) | `--spacing-xl` | Padding do container |
| Azul do Saldo | `--color-primary` | Cor primária do brand |
| Verde Receitas | `--color-success` | Cor semântica de sucesso |
| Vermelho Despesas | `--color-error` | Cor semântica de erro |

### ✅ Próximos Passos

**Pronto para avançar para:**
- **PROMPT 1**: Estrutura base do projeto (setup Vite + React + TypeScript + Tailwind)

---

*Última atualização: 18/01/2026 11:15*
