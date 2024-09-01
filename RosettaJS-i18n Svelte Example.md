File: examples/svelte-example/src/App.svelte
```svelte
<script>
import { setTranslator } from 'rosettajs-i18n';
import { RosettaJS } from 'rosettajs-i18n';
import LanguageSwitcher from './components/LanguageSwitcher.svelte';
import ShoppingCart from './components/ShoppingCart.svelte';

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

setTranslator(i18n);
</script>

<main>
  <LanguageSwitcher />
  <ShoppingCart />
</main>
```

File: examples/svelte-example/src/components/LanguageSwitcher.svelte
```svelte
<script>
import { getTranslator } from 'rosettajs-i18n';

const { setLanguage } = getTranslator();
</script>

<div>
  <button on:click={() => setLanguage('en')}>English</button>
  <button on:click={() => setLanguage('fr')}>Français</button>
</div>
```

File: examples/svelte-example/src/components/ShoppingCart.svelte
```svelte
<script>
import { getTranslator } from 'rosettajs-i18n';

const { t, pluralize, formatNumber } = getTranslator();
const itemCount = 3;
const total = 99.99;
</script>

<div>
  <h1>{$t('welcome')}</h1>
  <p>{$pluralize('items', itemCount, { count: itemCount })}</p>
  <p>{$t('total', { amount: $formatNumber(total, { style: 'currency', currency: 'USD' }) })}</p>
</div>
```

File: examples/svelte-example/src/main.js
```javascript
import App from './App.svelte';

const app = new App({
  target: document.body
});

export default app;
```

File: examples/svelte-example/package.json
```json
{
  "name": "rosettajs-i18n-svelte-example",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public --no-clear"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^17.0.0",
    "@rollup/plugin-node-resolve": "^11.0.0",
    "rollup": "^2.3.4",
    "rollup-plugin-css-only": "^3.1.0",
    "rollup-plugin-livereload": "^2.0.0",
    "rollup-plugin-svelte": "^7.0.0",
    "rollup-plugin-terser": "^7.0.0",
    "svelte": "^3.0.0"
  },
  "dependencies": {
    "rosettajs-i18n": "^1.0.0",
    "sirv-cli": "^1.0.0"
  }
}
```

File: examples/svelte-example/README.md
```markdown
# RosettaJS-i18n Svelte Example

This project demonstrates how to use RosettaJS-i18n in a Svelte application.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:5000](http://localhost:5000) to view the app in your browser.

## Features Demonstrated

- Basic translation
- Pluralization
- Number formatting
- Language switching
- Use of Svelte context for providing the translator
- Integration with Svelte's reactive statements

## Project Structure

- `src/App.svelte`: Main application component
- `src/components/LanguageSwitcher.svelte`: Component for switching languages
- `src/components/ShoppingCart.svelte`: Component demonstrating translations
- `src/main.js`: Entry point of the application

## Notes

This example uses the default Svelte template for simplicity. In a real-world application, you might want to use a more customized setup.

Remember to properly handle language preferences, possibly storing them in local storage or syncing with a backend service.
```
