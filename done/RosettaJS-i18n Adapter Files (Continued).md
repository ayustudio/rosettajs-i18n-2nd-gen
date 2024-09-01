File: src/adapters/vue.ts
```typescript
import { inject, provide, reactive } from 'vue';
import { Translator } from '../core/translator';

const TranslatorSymbol = Symbol();

export function createI18n(translator: Translator) {
  const i18n = reactive({
    t: translator.t.bind(translator),
    formatNumber: translator.formatNumber.bind(translator),
    formatDate: translator.formatDate.bind(translator),
    pluralize: translator.pluralize.bind(translator),
    setLanguage: translator.setLanguage.bind(translator),
  });

  return {
    install: (app: any) => {
      app.provide(TranslatorSymbol, i18n);
      app.config.globalProperties.$t = i18n.t;
    },
  };
}

export function useI18n() {
  const i18n = inject(TranslatorSymbol);
  if (!i18n) {
    throw new Error('No i18n provided');
  }
  return i18n;
}
```

File: src/adapters/svelte.ts
```typescript
import { setContext, getContext } from 'svelte';
import { Translator } from '../core/translator';

const TRANSLATOR_KEY = {};

export function setTranslator(translator: Translator) {
  setContext(TRANSLATOR_KEY, {
    t: translator.t.bind(translator),
    formatNumber: translator.formatNumber.bind(translator),
    formatDate: translator.formatDate.bind(translator),
    pluralize: translator.pluralize.bind(translator),
    setLanguage: translator.setLanguage.bind(translator),
  });
}

export function getTranslator() {
  const translator = getContext(TRANSLATOR_KEY);
  if (!translator) {
    throw new Error('No translator provided. Did you forget to use setTranslator?');
  }
  return translator;
}
```

File: src/adapters/preact.tsx
```typescript
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { Translator } from '../core/translator';

const TranslatorContext = createContext<Translator | null>(null);

interface TranslatorProviderProps {
  translator: Translator;
  children: preact.ComponentChildren;
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
