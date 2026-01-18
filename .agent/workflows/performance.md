---
description: Otimize este código focando em performance
---

# Workflow: Otimizar Performance

## Objetivo
Identificar e resolver gargalos de performance no código.

## Etapas

1. **Identifique possíveis gargalos**
   - Re-renderizações desnecessárias de componentes React
   - Loops com operações pesadas
   - Requisições de rede redundantes
   - Cálculos complexos em render
   - Operações síncronas bloqueantes

2. **Analise React específico**
   - Componentes que re-renderizam sem necessidade
   - Props que mudam em toda renderização
   - Contextos com valores não memoizados
   - Listas sem keys apropriadas
   - Efeitos executando em excesso

3. **Aplique otimizações apropriadas**
   - `useMemo` para cálculos custosos
   - `useCallback` para funções passadas como props
   - `React.memo` para componentes puros
   - Debounce/throttle para eventos frequentes
   - Lazy loading de componentes pesados
   - Virtualização de listas longas

4. **Otimize código JavaScript**
   - Use métodos nativos otimizados
   - Evite operações custosas em loops
   - Cache resultados quando possível
   - Considere Web Workers para tarefas pesadas

5. **Valide melhorias**
   - Explique as otimizações aplicadas
   - Justifique cada escolha
   - Indique impacto esperado
   - Mencione trade-offs se houver
