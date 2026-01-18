---
description: Garanta que este layout seja totalmente fluido e responsivo em desktop, tablet e mobile, sem overflow horizontal
---

# Workflow: Garantir Responsividade

## Objetivo
Tornar o layout completamente fluido e responsivo em todos os breakpoints, sem overflow horizontal.

## Etapas

1. **Verifique a estrutura atual**
   - Identifique larguras fixas
   - Localize possíveis causas de overflow
   - Mapeie elementos que precisam adaptar

2. **Corrija containers principais**
   - Containers de página: `width: 100%`
   - Use `max-width` ao invés de `width` fixa
   - Remova qualquer largura hardcoded
   - Garanta padding adequado por breakpoint (px-4, md:px-6, lg:px-8)

3. **Implemente breakpoints**
   - Mobile (base, <768px): layout em coluna, cards empilhados
   - Tablet (≥768px): 2 colunas quando apropriado
   - Desktop (≥1280px): 3-4 colunas
   - Wide (≥1920px): max-width limitado

4. **Ajuste componentes específicos**
   - Sidebar: desktop only (≥1280px)
   - Header Mobile: mobile/tablet only (<1280px)
   - Grids: auto-fit/auto-fill responsivo
   - Tipografia: escala progressiva (text-base md:text-lg lg:text-xl)

5. **Teste obrigatório**
   - 375px (iPhone SE)
   - 768px (iPad)
   - 1280px (laptop)
   - 1920px (Full HD)

6. **Valide**
   - Nenhum overflow horizontal em qualquer breakpoint
   - Conteúdo legível em todos os tamanhos
   - Touch targets adequados no mobile (44x44px)
   - Inputs com altura mínima 48px e font-size 16px
