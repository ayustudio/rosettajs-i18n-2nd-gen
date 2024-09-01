import { Translator } from '../core/translator';

export interface Plugin {
  name: string;
  init: (translator: Translator) => void;
}

export class PluginManager {
  private plugins: Plugin[] = [];

  registerPlugin(plugin: Plugin): void {
    this.plugins.push(plugin);
  }

  initPlugins(translator: Translator): void {
    this.plugins.forEach(plugin => plugin.init(translator));
  }
}
