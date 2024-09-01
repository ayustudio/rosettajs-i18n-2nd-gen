import { h } from 'preact';
import { usePreactTranslation } from 'rosettajs-i18n';

export default function LanguageSwitcher() {
  const { setLanguage } = usePreactTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('fr')}>Français</button>
    </div>
  );
}
