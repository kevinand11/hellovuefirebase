import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		modal: null,
	},
	getters: {
		isModalLogin: (state) => state.modal == 'login',
		isModalRegister: (state) => state.modal == 'register',
		isModalCreate: (state) => state.modal == 'create',
	},
	mutations: {
		setModal: (state, mode) => (state.modal = mode),
	},
	actions: {
		setModalLogin: ({ commit }) => commit('setModal', 'login'),
		setModalRegister: ({ commit }) => commit('setModal', 'register'),
		setModalCreate: ({ commit }) => commit('setModal', 'create'),
		closeModal: ({ commit }) => commit('setModal', null),
	},
	modules: {},
})
