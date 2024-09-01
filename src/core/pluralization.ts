const pluralRules: { [key: string]: (n: number) => string } = {
  en: (n) => n === 1 ? 'one' : 'other',
  fr: (n) => n === 0 || n === 1 ? 'one' : 'other',
  // Add more languages as needed
};

export function getPluralForm(language: string, count: number): string {
  return pluralRules[language]?.(count) || 'other';
}
