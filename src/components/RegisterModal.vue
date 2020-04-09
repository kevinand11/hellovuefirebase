<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Register</h2>
            <form class="register">
                <input type="text" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <button>Register</button>
                <p class="error"></p>
            </form>
            <div>Got an account? <a class="switch" @click.prevent='setModalLogin'>Login instead</a></div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "RegisterModal",
    methods:{
        ...mapActions(['setModalLogin', 'closeModal'])
    }
}
</script>
