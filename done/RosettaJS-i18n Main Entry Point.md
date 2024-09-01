File: src/index.ts
```typescript
import { Translator, TranslatorOptions } from './core/translator';
import { PluginManager, Plugin } from './utils/plugin-manager';

export class RosettaJS {
  private translator: Translator;
  private pluginManager: PluginManager;

  constructor(options: TranslatorOptions = {}) {
    this.translator = new Translator(options);
    this.pluginManager = new PluginManager();
  }

  init(): void {
    this.pluginManager.initPlugins(this.translator);
  }

  use(plugin: Plugin): void {
    this.pluginManager.registerPlugin(plugin);
  }

  t(key: string, params: Record<string, any> = {}): string {
    return this.translator.t(key, params);
  }

  setLanguage(language: string): void {
    this.translator.setLanguage(language);
  }

  formatNumber(number: number, options?: Intl.NumberFormatOptions): string {
    return this.translator.formatNumber(number, options);
  }

  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    return this.translator.formatDate(date, options);
  }

  pluralize(key: string, count: number, params: Record<string, any> = {}): string {
    return this.translator.pluralize(key, count, params);
  }
}

export { currencyConversionPlugin } from './plugins/currency-conversion';
export { rtlSupportPlugin } from './plugins/rtl-support';
export { advancedPluralizationPlugin } from './plugins/advanced-pluralization';
export { parsingPlugin } from './plugins/parsing';
export { languageDetectionPlugin } from './plugins/language-detection';
export { ssrSupportPlugin } from './plugins/ssr-support';

export { TranslatorProvider, useTranslation as useReactTranslation } from './adapters/react';
export { createI18n as createVueI18n, useI18n as useVueI18n } from './adapters/vue';
export { setTranslator as setSvelteTranslator, getTranslator as getSvelteTranslator } from './adapters/svelte';
export { TranslatorProvider as PreactTranslatorProvider, useTranslation as usePreactTranslation } from './adapters/preact';
```
