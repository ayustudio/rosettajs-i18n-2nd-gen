File: tests/core/translator.test.ts
```typescript
import { Translator } from '../../src/core/translator';

describe('Translator', () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator({
      defaultLanguage: 'en',
      fallbackLanguage: 'en',
      messages: {
        en: {
          hello: 'Hello, {name}!',
          items: {
            one: 'You have {count} item',
            other: 'You have {count} items'
          }
        },
        fr: {
          hello: 'Bonjour, {name}!',
          items: {
            one: 'Vous avez {count} article',
            other: 'Vous avez {count} articles'
          }
        }
      }
    });
  });

  test('t() translates correctly', () => {
    expect(translator.t('hello', { name: 'Alice' })).toBe('Hello, Alice!');
  });

  test('pluralize() works correctly', () => {
    expect(translator.pluralize('items', 1, { count: 1 })).toBe('You have 1 item');
    expect(translator.pluralize('items', 2, { count: 2 })).toBe('You have 2 items');
  });

  test('setLanguage() changes the language', () => {
    translator.setLanguage('fr');
    expect(translator.t('hello', { name: 'Alice' })).toBe('Bonjour, Alice!');
  });
});
```

File: tests/plugins/currency-conversion.test.ts
```typescript
import { Translator } from '../../src/core/translator';
import { currencyConversionPlugin } from '../../src/plugins/currency-conversion';

describe('Currency Conversion Plugin', () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator();
    const plugin = currencyConversionPlugin({
      apiKey: 'test-key',
      baseUrl: 'https://api.example.com/convert'
    });
    plugin.init(translator);
  });

  test('convertCurrency() converts correctly', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ rate: 0.85 }),
      })
    );

    const result = await translator.convertCurrency(100, 'USD', 'EUR');
    expect(result).toBe(85);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.example.com/convert?apiKey=test-key&from=USD&to=EUR'
    );
  });
});
```

File: tests/adapters/react.test.tsx
```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Translator } from '../../src/core/translator';
import { TranslatorProvider, useTranslation } from '../../src/adapters/react';

describe('React Adapter', () => {
  const translator = new Translator({
    messages: {
      en: {
        hello: 'Hello, {name}!',
      },
    },
  });

  const TestComponent = () => {
    const { t } = useTranslation();
    return <div>{t('hello', { name: 'Alice' })}</div>;
  };

  test('useTranslation hook works correctly', () => {
    render(
      <TranslatorProvider translator={translator}>
        <TestComponent />
      </TranslatorProvider>
    );

    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });
});
```
