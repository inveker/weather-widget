import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'
import store from '@/store';
import {registerPersistDynamic} from "@/store/plugins/persist";



const MODULE_NAME = 'settings';


if(module.hot && store.hasModule(MODULE_NAME))
    store.unregisterModule(MODULE_NAME);


export interface SettingsState {
    v: string;
}


@Module({
    name: MODULE_NAME,
    namespaced: true,
    store,
    dynamic: true,
})
class Settings extends VuexModule implements SettingsState {
    v = 's';

    @Mutation
    SET_V(v: string) {
        console.log('v: ',this.v)
        this.v = v
    }

    @Action
    setV(v: string) {
        this.SET_V(v)
    }
}

registerPersistDynamic(MODULE_NAME, store);

export default getModule(Settings);

