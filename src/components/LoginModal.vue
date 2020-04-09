<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Login</h2>
            <form class="login">
                <input type="text" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <button>Login</button>
                <p class="error"></p>
            </form>
            <div>No account? <a class="switch" @click.prevent="setModalRegister">Register instead</a></div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "LoginModal",
    methods:{
        ...mapActions(['setModalRegister', 'closeModal'])
    }
}
</script>