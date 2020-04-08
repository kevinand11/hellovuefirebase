<template>
	<div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="createUserModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" placeholder="First name" class="form-control m-1" v-model="user.fname">
                    <input type="text" placeholder="Last name" class="form-control m-1" v-model="user.lname">
                    <input type="number" class="form-control m-1" placeholder="Age" v-model="user.age">
                    <input type="text" placeholder="Location" class="form-control m-1" v-model="user.location">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click='createUser' :disabled='isEmpty'>Save user</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { firestore } from '@/firebase.js'

export default {
	name: 'CreateUserModal',
	data: () => ({
		user: {
			fname: '',
			lname: '',
			age: null,
			location: ''
		}
	}),
	computed:{
		isEmpty(){
			return !(this.user.fname && this.user.lname && this.user.age && this.user.location)
		}
	},
	methods: {
		createUser(){
			firestore.collection('users').add(this.user)
				.then(doc => {
					console.log(doc.id)
					window.$('#createUserModal').modal('hide')
				}).catch(error => console.log(error))
		}
	}
}
</script>
