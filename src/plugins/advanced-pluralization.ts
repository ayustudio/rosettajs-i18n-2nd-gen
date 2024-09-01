import { Translator } from '../core/translator';

const advancedPluralRules: { [key: string]: (n: number) => string } = {
  en: (n) => n === 1 ? 'one' : 'other',
  ru: (n) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'one';
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'few';
    return 'many';
  },
  // Add more complex pluralization rules for other languages
};

export function advancedPluralizationPlugin() {
  return {
    name: 'advancedPluralization',
    init: (translator: Translator) => {
      translator.getAdvancedPluralForm = (count: number) => {
        const rule = advancedPluralRules[translator.getLanguage()] || advancedPluralRules.en;
        return rule(count);
      };
    }
  };
}
