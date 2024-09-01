import { inject, provide, reactive } from 'vue';
import { Translator } from '../core/translator
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
