File: examples/react-example/src/App.tsx
```typescript
import React from 'react';
import { RosettaJS, TranslatorProvider, useReactTranslation } from 'rosettajs-i18n';

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

function ShoppingCart() {
  const { t, pluralize, formatNumber } = useReactTranslation();
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

function LanguageSwitcher() {
  const { setLanguage } = useReactTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('fr')}>Français</button>
    </div>
  );
}

function App() {
  return (
    <TranslatorProvider translator={i18n}>
      <LanguageSwitcher />
      <ShoppingCart />
    </TranslatorProvider>
  );
}

export default App;
```

File: examples/react-example/src/index.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

File: examples/react-example/package.json
```json
{
  "name": "rosettajs-i18n-react-example",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "rosettajs-i18n": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "typescript": "^4.5.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

File: examples/react-example/README.md
```markdown
# RosettaJS-i18n React Example

This project demonstrates how to use RosettaJS-i18n in a React application.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Features Demonstrated

- Basic translation
