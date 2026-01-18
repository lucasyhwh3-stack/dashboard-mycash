---
description: Revise garantindo width 100% em containers principais e uso correto de max-width
---

# Workflow: Layout Fluído

## Objetivo
Garantir que o layout seja completamente fluido, usando `width: 100%` em containers principais e `max-width` para limitações.

## Etapas

1. **Identifique containers principais**
   - Wrappers de página
   - Containers de seção
   - Elementos que definem a largura do layout

2. **Aplique regras de layout fluido**
   - Containers principais: `width: 100%` (NUNCA fixo)
   - Para limitar largura: use `max-width`, não `width`
   - Desktop: `max-w-[1400px]`
   - Wide/4K: `max-w-[1600px]`

3. **Remova larguras fixas**
   - Procure por: `width: 1200px`, `w-[1200px]`, etc.
   - Substitua por: `width: 100%` + `max-width` quando necessário
   - Frames do Figma NÃO devem virar larguras fixas

4. **Verifique overflow**
   - Nenhum elemento deve causar scroll horizontal
   - Use `overflow-x: hidden` apenas como último recurso
   - Prefira corrigir a causa raiz (larguras fixas)

5. **Valide padding e margens**
   - Mobile: `px-4` (16px)
   - Tablet: `px-6` (24px)
   - Desktop: `px-8` (32px)

6. **Teste fluidez**
   - Redimensione o navegador livremente
   - Layout deve se adaptar suavemente
   - Nenhum ponto deve quebrar ou criar overflow
