import { Translator } from '../core/translator';

export function languageDetectionPlugin() {
  return {
    name: 'languageDetection',
    init: (translator: Translator) => {
      translator.detectLanguage = () => {
        const languages = navigator.languages || [navigator.language];
        for (const lang of languages) {
          const shortLang = lang.split('-')[0];
          if (translator.hasTranslation(shortLang)) {
            return shortLang;
          }
        }
        return translator.getDefaultLanguage();
      };
    }
  };
}
