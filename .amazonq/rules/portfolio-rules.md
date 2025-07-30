# Portfolio Project Rules

## Stack & Dependencies
- React 18.3.1 + TypeScript + Vite
- Material-UI (MUI) v6 como biblioteca de componentes
- React Hook Form + Zod para formulários e validação
- Emotion para styled components
- React Toastify para notificações

## Code Standards
- Use TypeScript estrito com tipos explícitos
- Componentes funcionais com hooks
- Material-UI components como padrão de UI
- React Hook Form para todos os formulários
- Zod schemas para validação de dados
- Emotion/styled para customizações de estilo quando necessário

## File Structure
- Componentes em PascalCase
- Hooks customizados com prefixo "use"
- Tipos TypeScript em interfaces ou types
- Imports organizados: React, bibliotecas externas, componentes locais

## Best Practices
- Minimize re-renders usando useMemo/useCallback quando apropriado
- Use Material-UI theme system para consistência visual
- Implemente error boundaries para componentes críticos
- Mantenha componentes pequenos e focados em uma responsabilidade
- Use React.lazy para code splitting quando necessário