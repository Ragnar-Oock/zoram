import mitt from "mitt";
import {definePlugin} from "../src/plugin";
import {dependsOn, onCreated, onBeforeDestroy, onEvent, Service, ServiceNotifications, addService} from "../src/plugins";

declare module '../src/application' {
  interface ServiceCollection {
    woo: Service<ServiceNotifications & {message: { msg }}>;
    boris: Service<ServiceNotifications & {message: { msg }}>;
    myService: Service;
  }
}

declare const MyService: (new(...args: any[]) => Service);
//
// /**
//  *
//  * @param serviceId
//  */
// declare function useService<id extends keyof ServiceCollection>(serviceId: id): ServiceCollection[id] | undefined;

// declare function addService<id extends keyof ServiceCollection>(id: id, service: Service): void;
// declare function addService<id extends keyof ServiceCollection>(id: id, serviceFactory: (application: Application) => Service): void;

declare const billyPluginId: symbol;

export const pluginId = Symbol('bob');
export default definePlugin(pluginId, () => {
  dependsOn(billyPluginId);

  /*
  // require the current plugin to be loaded after the given one if
  // it is in the application config, if not doesn't do anything.
  dependsOnOptional(borisPlugin); // might be a bad idea...
  dependsOn(borisPlugin, /!* mandatory *!/ false); // might be a bad idea...
  dependsOn(borisPlugin, /!* optional *!/ true); // might be a bad idea...
  */

  const myServiceId = 'myService';
  addService(myServiceId, app => new MyService(app.services.woo));
  addService(myServiceId, new MyService());
  addService(myServiceId, {emitter: mitt<ServiceNotifications>()})

  onCreated(({services}) => {
    services.woo.registerSomething(something);
    services.boris?.registerBob();
  })

  onEvent(app => app.services.woo, 'before_create', console.log);
  onEvent(myServiceId, 'before_destroy', console.log);

  onBeforeDestroy(app => {
    console.log("I'm dying");
    app.services.myService.empty();
  })
})


// setup
// => dependsOn
// => addService
// => addTopic ?
// onCreate
// [onInit]
// => onEvent
// onBeforeDestroy
// [onDestroy]
// => undo onEvent
