import AddressApi from '@/api/addressSearch'

const state = {
    data: null,
    addressSelectionIsActive: false
}

const mutations = {
    getListAdressesStart(state) {
        state.data = null
    },
    getListAdressesSuccess(state, payload) {
        state.data = payload
    },
    getListAdressesFailure() { },

    toggleaddressSelection(state) {
        state.addressSelectionIsActive =! state.addressSelectionIsActive
    }
}

const actions = {
    getListAdresses(context, address) {
        return new Promise(resolve => {
            context.commit('getListAdressesStart')
            AddressApi.getAddresses(address)
                .then(response => {
                    context.commit('getListAdressesSuccess', response.data.suggestions)
                    resolve(response.data.suggestions)
                })
                .catch(() => {
                    context.commit('getListAdressesFailure')
                })
        })
    },

    toggleaddressSelection(context) {
        context.commit('toggleaddressSelection')
    }
}

export default {
    state,
    mutations,
    actions
}