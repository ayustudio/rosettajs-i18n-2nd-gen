File: src/adapters/react.tsx
```typescript
import React, { createContext, useContext, ReactNode } from 'react';
import { Translator } from '../core/translator';

const TranslatorContext = createContext<Translator | null>(null);

interface TranslatorProviderProps {
  translator: Translator;
  children: ReactNode;
}

export function TranslatorProvider({ translator, children }: TranslatorProviderProps) {
  return (
    <TranslatorContext.Provider value={translator}>
      {children}
    </TranslatorContext.Provider>
  );
}

export function useTranslator() {
  const translator = useContext(TranslatorContext);
  if (!translator) {
    throw new Error('useTranslator must be used within a TranslatorProvider');
  }
  return translator;
}

export function useTranslation() {
  const translator = useTranslator();
  return {
    t: translator.t.bind(translator),
    formatNumber: translator.formatNumber.bind(translator),
    formatDate: translator.formatDate.bind(translator),
    pluralize: translator.pluralize.bind(translator),
  };
}
```

File: src/adapters/vue.ts
```typescript
import { inject, provide, reactive } from 'vue';
import { Translator } from '../core/translator
