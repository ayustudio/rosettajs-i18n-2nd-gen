File: src/core/translator.ts
```typescript
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
```

File: src/core/interpolation.ts
```typescript
export function interpolate(message: string, params: Record<string, any>): string {
  return message.replace(/{(\w+)}/g, (_, key) => params[key]?.toString() || '');
}
```

File: src/core/pluralization.ts
```typescript
const pluralRules: { [key: string]: (n: number) => string } = {
  en: (n) => n === 1 ? 'one' : 'other',
  fr: (n) => n === 0 || n === 1 ? 'one' : 'other',
  // Add more languages as needed
};

export function getPluralForm(language: string, count: number): string {
  return pluralRules[language]?.(count) || 'other';
}
```

File: src/core/number-formatter.ts
```typescript
export function formatNumber(number: number, language: string, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(language, options).format(number);
}
```

File: src/core/date-formatter.ts
```typescript
export function formatDate(date: Date, language: string, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(language, options).format(date);
}
```
