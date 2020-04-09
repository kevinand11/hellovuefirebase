<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Request a Tutorial</h2>
            <form @submit.prevent="submitRequest">
                <input type="text" v-model="request" placeholder="Course Title" maxlength="30">
                <button @click.prevent="submitRequest">Submit Request</button>
                <p class="error">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import { functions } from '@/firebase.js'

export default {
    name: "CreateRequest",
    data: () => ({
        request: "",
        error: ""
    }),
    methods:{
        ...mapActions(['closeModal']),
        setError(message){
            this.error = message
        },
        submitRequest(){
            const addRequest = functions.httpsCallable('addRequest');
            addRequest({ title: this.request })
            .then(() => this.closeModal())
            .catch(error => this.setError(error.message));
        }
    }
}
</script>