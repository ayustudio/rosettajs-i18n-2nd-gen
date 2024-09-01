<script>
import { getTranslator } from 'rosettajs-i18n';

const { setLanguage } = getTranslator();
</script>

<div>
  <button on:click={() => setLanguage('en')}>English</button>
  <button on:click={() => setLanguage('fr')}>Français</button>
</div>
