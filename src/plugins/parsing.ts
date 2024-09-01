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
