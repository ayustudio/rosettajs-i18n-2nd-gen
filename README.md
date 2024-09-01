File: README.md
```markdown
# 🌐 RosettaJS-i18n

[![npm version](https://img.shields.io/npm/v/rosettajs-i18n.svg)](https://www.npmjs.com/package/rosettajs-i18n)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> RosettaJS-i18n is a lightweight internationalization (i18n) solution designed for small to medium e-commerce sites. It provides a simple, intuitive API for translations, pluralization, number and date formatting, and more.

---

## 📋 Features

- ✅ Basic translation with interpolation
- ✅ Pluralization supporting common European languages
- ✅ Number and date formatting
- ✅ Small bundle size (~10KB minified)
- ✅ Plugin system for extending functionality
- ✅ Framework adapters for React, Vue, Svelte, and Preact
- ✅ TypeScript support
- ✅ Testing utilities

---

## 🚀 Installation

```bash
npm install rosettajs-i18n
```

---

## 🛠️ Basic Usage

```javascript
import { RosettaJS } from 'rosettajs-i18n';

const i18n = new RosettaJS({
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  messages: {
    en: {
      greeting: 'Hello, {name}!',
      items: {
        one: 'You have {count} item',
        other: 'You have {count} items'
      }
    },
    fr: {
      greeting: 'Bonjour, {name}!',
      items: {
        one: 'Vous avez {count} article',
        other: 'Vous avez {count} articles'
      }
    }
  }
});

i18n.init();

console.log(i18n.t('greeting', { name: 'Alice' })); // Output: Hello, Alice!
console.log(i18n.pluralize('items', 1, { count: 1 })); // Output: You have 1 item
console.log(i18n.pluralize('items', 5, { count: 5 })); // Output: You have 5 items

i18n.setLanguage('fr');

console.log(i18n.t('greeting', { name: 'Alice' })); // Output: Bonjour, Alice!
console.log(i18n.pluralize('items', 1, { count: 1 })); // Output: Vous avez 1 article
console.log(i18n.pluralize('items', 5, { count: 5 })); // Output: Vous avez 5 articles
```

---

## 🔧 Advanced Usage

### Using Plugins

RosettaJS-i18n supports plugins to extend its functionality. Here's an example using the currency conversion plugin:

```javascript
import { RosettaJS, currencyConversionPlugin } from 'rosettajs-i18n';

const i18n = new RosettaJS();

i18n.use(currencyConversionPlugin({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.exchangerate.com'
}));

i18n.init();

// Now you can use the currency conversion feature
const convertedAmount = await i18n.convertCurrency(100, 'USD', 'EUR');
```

### Framework Integration

RosettaJS-i18n provides adapters for easy integration with popular frameworks. Here's an example with React:

```jsx
import React from 'react';
import { RosettaJS, TranslatorProvider, useTranslation } from 'rosettajs-i18n';

const i18n = new RosettaJS(/* options */);
i18n.init();

function App() {
  return (
    <TranslatorProvider translator={i18n}>
      <Welcome name="Alice" />
    </TranslatorProvider>
  );
}

function Welcome({ name }) {
  const { t } = useTranslation();
  return <h1>{t('greeting', { name })}</h1>;
}
```

> For examples with other frameworks, please check the `examples` directory in this repository.

---

## 📚 Documentation

- For a detailed API reference, please see the [API documentation](API.md).
- For details on how to use plugins, please see the [Plugins documentation](PLUGINS.md).

---

## 🔄 Comparison with Alternatives

RosettaJS-i18n is designed to be a lightweight alternative to larger i18n libraries, specifically tailored for small to medium e-commerce sites. Here's how it compares to some popular alternatives:

| Feature | RosettaJS-i18n | react-i18next | vue-i18n | i18next |
|---------|:--------------:|:--------------:|:--------:|:-------:|
| Bundle size | ~10KB | ~40KB | ~20KB | ~40KB |
| Framework-agnostic | ✅ | ❌ (React-focused) | ❌ (Vue-focused) | ✅ |
| Plugin system | ✅ | ✅ | ✅ | ✅ |
| Built-in currency handling | ✅ | ❌ | ❌ | ❌ |
| E-commerce focus | ✅ | ❌ | ❌ | ❌ |
| SSR support | ✅ (plugin) | ✅ | ✅ | ✅ |
| Performance | Excellent | Good | Good | Good |
| Learning curve | Low | Medium | Medium | Medium |
| Community size | Small (new) | Large | Large | Large |

### Key Differences:

1. **Size and Performance**: RosettaJS-i18n is significantly smaller and optimized for performance, making it ideal for sites where load times are critical.

2. **E-commerce Focus**: Unlike general-purpose i18n libraries, RosettaJS-i18n includes features specifically useful for e-commerce, such as built-in currency handling.

3. **Simplicity**: RosettaJS-i18n aims for a simpler API and easier setup, especially beneficial for smaller projects or teams new to i18n.

4. **Framework Integration**: While framework-agnostic, RosettaJS-i18n provides dedicated adapters for popular frameworks, offering a consistent API across React, Vue, Svelte, and Preact.

5. **Customization**: The plugin system allows for easy extensibility, letting you add only the features you need.

6. **Community and Ecosystem**: As a newer library, RosettaJS-i18n has a smaller community compared to well-established alternatives. However, this also means it's more focused and potentially more agile in addressing user needs.

> Choose RosettaJS-i18n if you're working on a small to medium e-commerce site and prioritize a lightweight, performant solution with e-commerce-specific features. For larger, more complex applications or those requiring extensive community-supported plugins, you might consider the more established alternatives.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

---

## 📄 License

RosettaJS-i18n is [MIT licensed](LICENSE).
```
