---
description: Analise este código buscando bugs, edge cases e melhorias
---

# Workflow: Analisar Código

## Objetivo
Realizar uma análise profunda do código fornecido, identificando bugs potenciais, edge cases não tratados e oportunidades de melhoria.

## Etapas

1. **Leia o código cuidadosamente**
   - Entenda o propósito e contexto
   - Identifique as dependências e integrações

2. **Análise de Bugs**
   - Procure por erros lógicos
   - Identifique possíveis null/undefined references
   - Verifique tratamento de erros
   - Analise race conditions em código assíncrono

3. **Edge Cases**
   - Valores extremos (0, -1, null, undefined, string vazia)
   - Arrays vazios ou com um único elemento
   - Objetos sem propriedades esperadas
   - Estados inesperados da aplicação

4. **Melhorias Potenciais**
   - Oportunidades de refatoração
   - Violações de princípios (SOLID, DRY, KISS)
   - Performance
   - Legibilidade
   - Manutenibilidade

5. **Gere o relatório**
   - Liste os problemas encontrados por categoria
   - Priorize por severidade (crítico, alto, médio, baixo)
   - Sugira correções específicas para cada item
