import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'
import store from '@/store';
import {hasLocalPreserveState, registerPersistDynamic} from "@/store/plugins/persist";
import {getIpInfo} from "@/api/ipGeoLocation";


const MODULE_NAME = 'settings';


if(module.hot && store.hasModule(MODULE_NAME))
    store.unregisterModule(MODULE_NAME);


registerPersistDynamic(MODULE_NAME, store)

export interface SettingsState {
    cities: Array<string>;
}


@Module({
    name: MODULE_NAME,
    namespaced: true,
    store,
    dynamic: true,
    preserveState: hasLocalPreserveState(MODULE_NAME),
})
class Settings extends VuexModule implements SettingsState {

    cities: SettingsState['cities'] = [];


    @Mutation
    SET_CITIES(cities: SettingsState['cities']) {
        this.cities = cities;
    }

    @Mutation
    ADD_CITY(city: string) {
        this.cities.push(city);
    }

    @Mutation
    REMOVE_CITY(city: string) {
        const id = this.cities.indexOf(city);
        this.cities.splice(id, 1)
    }

    @Action
    addUserLocation() {
        getIpInfo().then(info => {
            this.ADD_CITY(`${info.city}, ${info.country_code2}`)
        })
    }
}

//init module
const SettingsModule = getModule(Settings);
if(!SettingsModule.cities.length)
    SettingsModule.addUserLocation();

export default SettingsModule;

