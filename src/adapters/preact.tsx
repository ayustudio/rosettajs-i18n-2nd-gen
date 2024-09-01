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
