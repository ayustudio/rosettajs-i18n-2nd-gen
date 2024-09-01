export function formatDate(date: Date, language: string, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(language, options).format(date);
}
