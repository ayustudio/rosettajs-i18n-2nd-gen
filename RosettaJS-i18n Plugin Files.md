File: src/plugins/currency-conversion.ts
```typescript
import { Translator } from '../core/translator';

interface CurrencyConversionOptions {
  apiKey: string;
  baseUrl: string;
}

export function currencyConversionPlugin(options: CurrencyConversionOptions) {
  return {
    name: 'currencyConversion',
    init: (translator: Translator) => {
      translator.convertCurrency = async (amount: number, from: string, to: string) => {
        const response = await fetch(`${options.baseUrl}?apiKey=${options.apiKey}&from=${from}&to=${to}`);
        const data = await response.json();
        return amount * data.rate;
      };
    }
  };
}
```

File: src/plugins/rtl-support.ts
```typescript
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
```

File: src/plugins/advanced-pluralization.ts
```typescript
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
```

File: src/plugins/parsing.ts
```typescript
import { Translator } from '../core/translator';

export function parsingPlugin() {
  return {
    name: 'parsing',
    init: (translator: Translator) => {
      translator.parseNumber = (str: string) => {
        const numberFormat = new Intl.NumberFormat(translator.getLanguage());
        const parts = numberFormat.formatToParts(1234.5);
        const numerals = Array.from({ length: 10 }, (_, i) => numberFormat.format(i));
        const index = new Map(numerals.map((d, i) => [d, i]));
        const group = new RegExp(`[${parts.find(d => d.type === 'group')?.value}]`, 'g');
        const decimal = new RegExp(`[${parts.find(d => d.type === 'decimal')?.value}]`);
        const numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        return parseFloat(str
          .trim()
          .replace(group, '')
          .replace(decimal, '.')
          .replace(numeral, d => index.get(d)!.toString())
        );
      };
    }
  };
}
```

File: src/plugins/language-detection.ts
```typescript
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
```

File: src/plugins/ssr-support.ts
```typescript
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
```
