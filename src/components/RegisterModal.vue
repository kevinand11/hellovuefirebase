<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Register</h2>
            <form class="register" @submit.prevent="registerUser">
                <input type="text" name="email" placeholder="Email" v-model="email">
                <input type="password" name="password" placeholder="Password" v-model="password">
                <button @click.prevent="registerUser">Register</button>
                <p class="error">{{ error }}</p>
            </form>
            <div>Got an account? <a class="switch" @click.prevent='setModalLogin'>Login instead</a></div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import { auth } from '@/firebase.js'

export default {
    name: "RegisterModal",
    data: () => ({
        email: '',
        password: '',
        error: ''
    }),
    methods:{
        ...mapActions(['setModalLogin', 'closeModal', 'setUser']),
        setError(message){
            this.error = message
        },
        registerUser(){
            auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.setUser(user)
                    this.closeModal()
                })
                .catch(error => this.setError(error.message));
        }
    }
}
</script>
