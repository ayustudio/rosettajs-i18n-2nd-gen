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
