import { definePlugin, dependsOn, onCreated, useService } from '../../src';
import personPlugin, { personServiceId } from './person.plugin';

export default definePlugin('boris-plugin', () => {
    dependsOn(personPlugin.id);

    onCreated(app => {
        const person = useService(personServiceId);
        person.add({name: 'billy', age: 13})

        app.services[personServiceId].add({name: 'boris', age: 42})

        person.add({name: 'dudule', age: 978});
    })
})