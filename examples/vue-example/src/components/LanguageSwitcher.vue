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
