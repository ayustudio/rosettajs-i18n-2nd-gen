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
