export function interpolate(message: string, params: Record<string, any>): string {
  return message.replace(/{(\w+)}/g, (_, key) => params[key]?.toString() || '');
}
