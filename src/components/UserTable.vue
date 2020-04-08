<template>
	<div class="container">
		<table class="table table-condensed">
			<tr>
				<th>Id</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age</th>
				<th>Location</th>
				<th></th>
				<th></th>
			</tr>
			<tr v-for="user in users" :key="user.id">
				<td>{{ user['.key'] }}</td>
				<td>{{ user.fname }}</td>
				<td>{{ user.lname }}</td>
				<td>{{ user.age }}</td>
				<td>{{ user.location }}</td>
				<td><i class="fas fa-pen text-warning" @click="editUser(user['.key'])"></i></td>
				<td><i class="fas fa-trash text-danger"  @click="deleteUser(user['.key'])"></i></td>
			</tr>
		</table>
		<edit-user-modal :user='user' />
	</div>
</template>

<script>
import { firestore } from '@/firebase'
import EditUserModal from '@/components/EditUserModal'

export default {
	name: 'UserTable',
	data: () => ({
		user: {}
	}),
	computed:{},
	firestore(){
		return {
			users: firestore.collection('users')
		}
	},
	methods:{
		editUser(id){
			firestore.collection('users').doc(id).get()
				.then(result => {
					this.user = result.data()
					this.user['id'] = id
					window.$('#editUserModal').modal('show')
				}).catch(error => console.error(error))
		},
		deleteUser(id){
			if(confirm('Are you sure you want to delete?')){
				firestore.collection('users').doc(id).delete()
					.then(() => console.log('Done'))
					.catch(error => console.log(error))
			}
		}
	},
	components:{
		'edit-user-modal': EditUserModal
	}
}
</script>
