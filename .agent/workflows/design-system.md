---
description: Ajuste este componente para seguir rigorosamente o design system e tokens
---

# Workflow: Conformidade com Design System

## Objetivo
Garantir que o componente siga rigorosamente o design system e use apenas tokens definidos.

## Etapas

1. **Revise a hierarquia de variáveis**
   - 1º: Variáveis SEMÂNTICAS (`--color-primary`, `--spacing-container`)
   - 2º: Variáveis PRIMITIVAS (`--gray-900`, `--lime-500`, `--spacing-md`)
   - 3º: Valores locais → CONVERTER INTELIGENTEMENTE
   - 4º: NUNCA valores hardcoded

2. **Analise o código atual**
   - Identifique todos os valores visuais (cores, espaçamentos, tipografia)
   - Localize valores hardcoded (hex, px, rem diretos)
   - Mapeie quais tokens deveriam ser usados

3. **Aplique conversões inteligentes**
   - **Cores hex**: comparar e escolher primitiva mais próxima
     - Exemplo: `#E5E5E5` → `--gray-200`
   - **Espaçamentos**: arredondar para token da escala
     - Exemplo: `28px` → `--spacing-lg` (se lg=32px)
   - **Tipografia**: mapear peso e tamanho para escala
     - Exemplo: `400` → `font-normal`, `600` → `font-semibold`

4. **Substitua valores hardcoded**
   - Remova todos os valores hardcoded
   - Use tokens do design system
   - Documente as conversões realizadas

5. **Valide conformidade**
   - Nenhum valor hardcoded deve permanecer
   - Apenas tokens semânticos ou primitivos
   - Componente visualmente idêntico ao original
   - Liste todas as conversões feitas
