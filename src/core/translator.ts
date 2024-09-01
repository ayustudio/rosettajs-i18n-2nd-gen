import { interpolate } from './interpolation';
import { getPluralForm } from './pluralization';
import { formatNumber } from './number-formatter';
import { formatDate } from './date-formatter';

export interface TranslatorOptions {
  defaultLanguage?: string;
  fallbackLanguage?: string;
  messages?: Record<string, Record<string, string>>;
}

export class Translator {
  private language: string;
  private fallbackLanguage: string;
  private messages: Record<string, Record<string, string>>;

  constructor(options: TranslatorOptions = {}) {
    this.language = options.defaultLanguage || 'en';
    this.fallbackLanguage = options.fallbackLanguage || 'en';
    this.messages = options.messages || {};
  }

  setLanguage(language: string): void {
    this.language = language;
  }

  t(key: string, params: Record<string, any> = {}): string {
    const message = this.getMessage(key, this.language) || this.getMessage(key, this.fallbackLanguage) || key;
    return interpolate(message, params);
  }

  private getMessage(key: string, language: string): string | undefined {
    return key.split('.').reduce((obj, k) => obj && obj[k], this.messages[language]) as string | undefined;
  }

  formatNumber(number: number, options?: Intl.NumberFormatOptions): string {
    return formatNumber(number, this.language, options);
  }

  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    return formatDate(date, this.language, options);
  }

  pluralize(key: string, count: number, params: Record<string, any> = {}): string {
    const pluralForm = getPluralForm(this.language, count);
    const pluralKey = `${key}.${pluralForm}`;
    return this.t(pluralKey, { ...params, count });
  }
}
