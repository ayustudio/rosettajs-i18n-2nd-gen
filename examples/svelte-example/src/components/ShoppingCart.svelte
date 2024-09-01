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
