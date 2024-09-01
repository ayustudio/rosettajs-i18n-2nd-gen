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
