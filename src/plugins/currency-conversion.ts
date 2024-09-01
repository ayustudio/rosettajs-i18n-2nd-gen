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
