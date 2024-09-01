import { Translator } from '../core/translator';

export function ssrSupportPlugin() {
  return {
    name: 'ssrSupport',
    init: (translator: Translator) => {
      if (typeof window === 'undefined') {
        // Server-side specific logic
        translator.getSEOAttributes = (url: string) => {
          const language = translator.getLanguage();
          return {
            'hreflang': language,
            'rel': 'alternate',
            'href': `${url}?lang=${language}`
          };
        };
      } else {
        // Client-side specific logic
        translator.getSEOAttributes = () => ({});
      }
    }
  };
}
