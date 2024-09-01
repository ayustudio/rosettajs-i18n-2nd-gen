File: examples/preact-example/src/app.tsx
```typescript
import { h } from 'preact';
import { RosettaJS, PreactTranslatorProvider } from 'rosettajs-i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import ShoppingCart from './components/ShoppingCart';

const i18n = new RosettaJS({
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  messages: {
    en: {
      welcome: 'Welcome to our store!',
      items: {
        one: 'You have {count} item in your cart',
        other: 'You have {count} items in your cart'
      },
      total: 'Total: {amount}'
    },
    fr: {
      welcome: 'Bienvenue dans notre magasin!',
      items: {
        one: 'Vous avez {count} article dans votre panier',
        other: 'Vous avez {count} articles dans votre panier'
      },
      total: 'Total: {amount}'
    }
  }
});

export function App() {
  return (
    <PreactTranslatorProvider translator={i18n}>
      <LanguageSwitcher />
      <ShoppingCart />
    </PreactTranslatorProvider>
  );
}
```

File: examples/preact-example/src/components/LanguageSwitcher.tsx
```typescript
import { h } from 'preact';
import { usePreactTranslation } from 'rosettajs-i18n';

export default function LanguageSwitcher() {
  const { setLanguage } = usePreactTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('fr')}>Français</button>
    </div>
  );
}
```

File: examples/preact-example/src/components/ShoppingCart.tsx
```typescript
import { h } from 'preact';
import { usePreactTranslation } from 'rosettajs-i18n';

export default function ShoppingCart() {
  const { t, pluralize, formatNumber } = usePreactTranslation();
  const itemCount = 3;
  const total = 99.99;

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{pluralize('items', itemCount, { count: itemCount })}</p>
      <p>{t('total', { amount: formatNumber(total, { style: 'currency', currency: 'USD' }) })}</p>
    </div>
  );
}
```

File: examples/preact-example/src/index.tsx
```typescript
import { h, render } from 'preact';
import { App } from './app';

render(<App />, document.body);
```

File: examples/preact-example/package.json
```json
{
  "name": "rosettajs-i18n-preact-example",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "preact watch",
    "build": "preact build",
    "serve": "sirv build --port 8080 --cors --single"
  },
  "devDependencies": {
    "preact-cli": "^3.0.0",
    "sirv-cli": "1.0.3"
  },
  "dependencies": {
    "preact": "^10.5.13",
    "rosettajs-i18n": "^1.0.0"
  }
}
```

File: examples/preact-example/README.md
```markdown
# RosettaJS-i18n Preact Example
