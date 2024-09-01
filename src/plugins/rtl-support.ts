import { Translator } from '../core/translator';

const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

export function rtlSupportPlugin() {
  return {
    name: 'rtlSupport',
    init: (translator: Translator) => {
      translator.isRTL = () => rtlLanguages.includes(translator.getLanguage());
      translator.getTextDirection = () => translator.isRTL() ? 'rtl' : 'ltr';
    }
  };
}
