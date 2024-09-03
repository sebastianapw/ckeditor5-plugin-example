import type { Testplugin } from './index.js';
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [Testplugin.pluginName]: Testplugin;
    }
}
