---
description: Garanta que todos os valores visuais usem apenas variáveis existentes do design system
---

# Workflow: Validação de Tokens

## Objetivo
Garantir que 100% dos valores visuais usem apenas variáveis do design system (tokens).

## Etapas

1. **Escaneie o código**
   - Identifique TODOS os valores visuais no código
   - Cores (hex, rgb, hsl)
   - Espaçamentos (px, rem, em)
   - Tipografia (tamanhos, pesos, line-heights)
   - Bordas, sombras, opacidades

2. **Categorize valores encontrados**
   - ✅ Tokens semânticos: `var(--color-primary)`
   - ✅ Tokens primitivos: `var(--gray-900)`
   - ⚠️ Valores hardcoded: `#E5E5E5`, `24px`, `600`

3. **Para cada valor hardcoded encontrado**
   - Identifique o token correto do design system
   - Se for cor: encontre a primitiva mais próxima
   - Se for espaçamento: use a escala definida
   - Se for tipografia: use a escala tipográfica
   - NUNCA criar novos tokens

4. **Substitua todos os hardcoded**
   - Remova valores diretos
   - Use apenas tokens definidos
   - Priorize semântico sobre primitivo

5. **Documente as mudanças**
   - Liste todas as conversões realizadas:
     - `[valor original]` → `[token usado]` (justificativa)
   - Exemplo: `#F5F5F5` → `--gray-50` (cinza claro de fundo)
   - Exemplo: `28px` → `--spacing-lg` (mais próximo de 32px)

6. **Valide resultado final**
   - Nenhum valor hardcoded deve permanecer
   - 100% de uso de tokens
   - Componente visualmente consistente com o design system
