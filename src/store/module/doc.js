import axios from "axios";
const initialState = () => {
    return {
        allUrls: {},
        addUrl: {},
        removeStatus: false
    }
};

const state = initialState();

const getters = {
    getAllUrl: state => state.allUrls,
    getAddStatus: state => state.addUrl,
    getRemoveStatus: state => state.removeStatus
}

const mutations = {
    setAllUrls(state, data) {
        state.allUrls = data
    },
    setAddUrl(state, data) {
        state.addUrl = data
    },
    setDeleteStatus(state, status) {
        state.removeStatus = status
    }
}
const actions = {
    fetchAllUrls: async ({ commit }) => {
        try {
            commit("setAllUrls", null);
            let response = await axios.get('http://localhost:3000/apis')
            commit("setAllUrls", response.data)
        } catch (err) {
            console.log(err)
        }
    },
    addApiUrl: async ({ commit }, params) => {
        try {
            commit("setAddUrl", null);
            let response = await axios.post('http://localhost:3000/apis', params)
            commit("setAddUrl", response.data)
        } catch (err) {
            console.log(err)
        }
    },
    removeUrl: async ({ commit }, params) => {

        try {
            commit("setDeleteStatus", null)
            let resp = await axios.delete('http://localhost:3000/apis/' + params)
            commit("setDeleteStatus", resp)
        } catch (err) {
            console.log(err)
        }
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}