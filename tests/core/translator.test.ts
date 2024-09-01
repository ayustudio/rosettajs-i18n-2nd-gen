import { Translator } from '../../src/core/translator';

describe('Translator', () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator({
      defaultLanguage: 'en',
      fallbackLanguage: 'en',
      messages: {
        en: {
          hello: 'Hello, {name}!',
          items: {
            one: 'You have {count} item',
            other: 'You have {count} items'
          }
        },
        fr: {
          hello: 'Bonjour, {name}!',
          items: {
            one: 'Vous avez {count} article',
            other: 'Vous avez {count} articles'
          }
        }
      }
    });
  });

  test('t() translates correctly', () => {
    expect(translator.t('hello', { name: 'Alice' })).toBe('Hello, Alice!');
  });

  test('pluralize() works correctly', () => {
    expect(translator.pluralize('items', 1, { count: 1 })).toBe('You have 1 item');
    expect(translator.pluralize('items', 2, { count: 2 })).toBe('You have 2 items');
  });

  test('setLanguage() changes the language', () => {
    translator.setLanguage('fr');
    expect(translator.t('hello', { name: 'Alice' })).toBe('Bonjour, Alice!');
  });
});
