import { h } from 'preact';
import { usePreactTranslation } from 'rosettajs-i18n';

export default function ShoppingCart() {
  const { t, pluralize, formatNumber } = usePreactTranslation();
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
