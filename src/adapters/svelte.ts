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
