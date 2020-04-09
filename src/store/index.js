import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		modal: null,
		user: {},
	},
	getters: {
		isModalLogin: (state) => state.modal == 'login',
		isModalRegister: (state) => state.modal == 'register',
		isModalCreate: (state) => state.modal == 'create',
		getUser: (state) => state.user,
	},
	mutations: {
		setModal: (state, mode) => (state.modal = mode),
		setUser: (state, user) => (state.user = user),
	},
	actions: {
		setUser: ({ commit }, user) => commit('setUser', user),
		setModalLogin: ({ commit }) => commit('setModal', 'login'),
		setModalRegister: ({ commit }) => commit('setModal', 'register'),
		setModalCreate: ({ commit }) => commit('setModal', 'create'),
		closeModal: ({ commit }) => commit('setModal', null),
	},
	modules: {},
})
