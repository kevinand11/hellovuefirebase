<template>
    <div class="modal fade" id="editUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control m-1" v-model="user.fname">
                    <input type="text" class="form-control m-1" v-model="user.lname">
                    <input type="number" class="form-control m-1" v-model="user.age">
                    <input type="text" class="form-control m-1" v-model="user.location">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click='saveUser'>Save user</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { firestore } from '@/firebase'

export default {
    name: "EditUserModal",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods:{
        saveUser(){
            firestore.collection('users').doc(this.user.id)
                .update(this.user)
                .then(() => console.log('Updated'))
                .catch(error => console.error(error))
            window.$('#editUserModal').modal('hide')
        }
    }
}
</script>