export { dependsOn } from './depends-on.composable';
export type { Service } from './add-service.composable';
export { addService } from './add-service.composable';
export { onBeforeCreate, onCreated, onBeforeDestroy } from "./define-hooks";
export { onEvent } from './on-event.composable';
export {
    definePlugin, getActivePlugin
} from './define-plugin';
export type {
    PluginId,
    DefinedPlugin, PluginHook,
    PluginHooks,
    PluginSetup
} from './define-plugin';
