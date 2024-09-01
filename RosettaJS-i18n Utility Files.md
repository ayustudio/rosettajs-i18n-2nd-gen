File: src/utils/testing-helpers.ts
```typescript
import { Translator } from '../core/translator';

export function createMockTranslator(messages: Record<string, Record<string, string>> = {}) {
  return new Translator({
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
    messages,
  });
}

export function mockPlugin(name: string) {
  return {
    name,
    init: jest.fn(),
  };
}
```

File: src/utils/plugin-manager.ts
```typescript
import { Translator } from '../core/translator';

export interface Plugin {
  name: string;
  init: (translator: Translator) => void;
}

export class PluginManager {
  private plugins: Plugin[] = [];

  registerPlugin(plugin: Plugin): void {
    this.plugins.push(plugin);
  }

  initPlugins(translator: Translator): void {
    this.plugins.forEach(plugin => plugin.init(translator));
  }
}
```
