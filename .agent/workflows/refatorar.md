---
description: Refatore este código melhorando legibilidade e manutenção sem alterar o comportamento
---

# Workflow: Refatorar Código

## Objetivo
Melhorar a qualidade do código mantendo exatamente o mesmo comportamento funcional.

## Etapas

1. **Entenda o comportamento atual**
   - Documente exatamente o que o código faz
   - Identifique inputs e outputs esperados
   - Mapeie efeitos colaterais

2. **Identifique problemas de qualidade**
   - Nomes pouco descritivos
   - Funções muito longas (>50 linhas)
   - Responsabilidades múltiplas
   - Duplicação de código
   - Acoplamento excessivo
   - Complexidade ciclomática alta

3. **Aplique refatorações**
   - Extraia funções menores e focadas
   - Renomeie para clareza
   - Remova duplicação
   - Simplifique lógica complexa
   - Melhore a estrutura de dados

4. **Mantenha conformidade com as regras**
   - Siga User Rules (Clean Code, nomes descritivos)
   - Siga Project Rules (arquitetura de componentes)
   - Use o design system corretamente

5. **Valide que o comportamento não mudou**
   - Compare inputs/outputs
   - Verifique efeitos colaterais
   - Confirme que não introduziu bugs
