<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Login</h2>
            <form class="login" @submit.prevent="loginUser">
                <input type="text" name="email" placeholder="Email" v-model="email">
                <input type="password" name="password" placeholder="Password" v-model="password">
                <button @click.prevent="loginUser">Login</button>
                <p class="error">{{ error }}</p>
            </form>
            <div>No account? <a class="switch" @click.prevent="setModalRegister">Register instead</a></div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import { auth } from '@/firebase.js'

export default {
    name: "LoginModal",
    data: () => ({
        email: '',
        password: '',
        error: ''
    }),
    methods:{
        ...mapActions(['setModalRegister', 'closeModal', 'setUser']),
        setError(message){
            this.error = message
        },
        loginUser(){
            auth.signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.setUser(user)
                    this.closeModal()
                })
                .catch(error => this.setError(error.message));
        }
    }
}
</script>