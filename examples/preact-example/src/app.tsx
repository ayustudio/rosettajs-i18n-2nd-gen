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
