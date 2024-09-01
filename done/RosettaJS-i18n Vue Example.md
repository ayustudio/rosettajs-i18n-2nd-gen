File: examples/vue-example/src/App.vue
```vue
<template>
  <div id="app">
    <LanguageSwitcher />
    <ShoppingCart />
  </div>
</template>

<script>
import { createI18n } from 'rosettajs-i18n';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const i18n = createI18n({
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

export default {
  name: 'App',
  components: {
    LanguageSwitcher,
    ShoppingCart
  },
  provide: {
    i18n
  }
}
</script>
```

File: examples/vue-example/src/components/LanguageSwitcher.vue
```vue
<template>
  <div>
    <button @click="setLanguage('en')">English</button>
    <button @click="setLanguage('fr')">Français</button>
  </div>
</template>

<script>
import { useI18n } from 'rosettajs-i18n';

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { setLanguage } = useI18n();
    return { setLanguage };
  }
}
</script>
```

File: examples/vue-example/src/components/ShoppingCart.vue
```vue
<template>
  <div>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ pluralize('items', itemCount, { count: itemCount }) }}</p>
    <p>{{ t('total', { amount: formatNumber(total, { style: 'currency', currency: 'USD' }) }) }}</p>
  </div>
</template>

<script>
import { useI18n } from 'rosettajs-i18n';

export default {
  name: 'ShoppingCart',
  setup() {
    const { t, pluralize, formatNumber } = useI18n();
    const itemCount = 3;
    const total = 99.99;

    return { t, pluralize, formatNumber, itemCount, total };
  }
}
</script>
```

File: examples/vue-example/src/main.js
```javascript
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

File: examples/vue-example/package.json
```json
{
  "name": "rosettajs-i18n-vue-example",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0",
    "rosettajs-i18n": "^1.0.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0"
  }
}
```

File: examples/vue-example/README.md
```markdown
# RosettaJS-i18n Vue Example

This project demonstrates how to use RosettaJS-i18n in a Vue 3 application.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run serve
   ```

3. Open [http://localhost:8080](http://localhost:8080) to view the app in your browser.

## Features Demonstrated

- Basic translation
- Pluralization
- Number formatting
- Language switching
- Use of Vue 3 Composition API
- Integration with Vue 3's provide/inject for global i18n instance

## Project Structure

- `src/App.vue`: Main application component
- `src/components/LanguageSwitcher.vue`: Component for switching languages
- `src/components/ShoppingCart.vue`: Component demonstrating translations
- `src/main.js`: Entry point of the application

## Notes

This example uses Vue CLI for simplicity. In a real-world application, you might want to use a more customized setup.

Remember to properly handle language preferences, possibly storing them in local storage or syncing with a backend service.
```
