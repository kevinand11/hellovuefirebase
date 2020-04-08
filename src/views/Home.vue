<template>
	<div>
		<div class="py-2 px-5 bg-dark" id="nav">
			<span class="text-white font-weight-bold">TechWith11</span>
			<button class="btn btn-primary" @click="openCreateUserModal">Create New User</button>
		</div>
		<create-user-modal />
		<user-table />
	</div>
</template>

<script>
import CreateUserModal from '@/components/CreateUserModal.vue'
import UserTable from '@/components/UserTable.vue'

export default {
	name: 'Home',
	components: {
		'create-user-modal': CreateUserModal,
		'user-table': UserTable
	},
	methods: {
		openCreateUserModal(){
			window.$('#createUserModal').modal('show')
		}
	}
}
</script>

<style lang="scss" scoped>
	#nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
