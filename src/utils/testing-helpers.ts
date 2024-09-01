import { Translator } from '../core/translator';

export function createMockTranslator(messages: Record<string, Record<string, string>> = {}) {
  return new Translator({
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
    messages,
  });
}

export function mockPlugin(name: string) {
  return {
    name,
    init: jest.fn(),
  };
}
