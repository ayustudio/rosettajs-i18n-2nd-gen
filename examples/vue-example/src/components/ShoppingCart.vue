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
