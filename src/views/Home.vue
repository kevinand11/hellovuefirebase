<template>
	<div>
		<nav-bar />
		<login-modal v-if='isModalLogin'/>
		<register-modal v-if='isModalRegister'/>
		<create-request-modal v-if='isModalCreate'/>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from '@/components/Navbar.vue'
import LoginModal from '@/components/LoginModal.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import CreateRequestModal from '@/components/CreateRequest.vue'

export default {
	name: 'Home',
	components: {
		'nav-bar': NavBar,
		'login-modal': LoginModal,
		'register-modal': RegisterModal,
		'create-request-modal': CreateRequestModal
	},
	computed:{
        ...mapGetters(['isModalLogin','isModalCreate', 'isModalRegister'])
    },
}
</script>
