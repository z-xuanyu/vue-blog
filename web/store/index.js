import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        strict: false,
        state: () => ({
            drawer: false
        }),
        mutations: {
            changeDrawer(state) {
                state.drawer = !state.drawer
            }
        }
    })
}

export default createStore