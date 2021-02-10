import {Store} from "vuex";
import createPersistedState from "vuex-persistedstate";

const PREFIX = 'vuex-';

/*
* Dynamically registers new vuex-persistedstate plugin for dynamic modules
*
* @param {string} moduleName - Module namespased
* @param {Store} store - Vuex store
* @param {Option createPersistedState} options - Additional options for configuring the plugin
*/
export function registerPersistDynamic(
    moduleName: string,
    store: Store<any>,
    options?: Parameters<typeof createPersistedState>[0]
) {
    const plugin = createPersistedState({
        key: PREFIX + moduleName,
        paths: [moduleName],
        filter(mutation) {
            return !mutation.type.indexOf(moduleName);
        },
        ...options
    });
    plugin(store);
}

export function hasLocalPreserveState(moduleName: string) {
    return Boolean(localStorage.getItem( PREFIX + moduleName))
}
