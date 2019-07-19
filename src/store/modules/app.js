const app = {
    state: {
        fullMap: false
    },
    mutations: {
        SET_FULL_MAP: (state, isFull) => {
            state.fullMap = isFull
        },
    },
    actions: {
        changeMapState({ commit }, isFull) {
            commit('SET_FULL_MAP', isFull)
        }
    }
}

export default app