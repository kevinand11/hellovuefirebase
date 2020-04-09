<template>
    <header>
        <span>TechWith11</span>
        <nav>
            <a @click.prevent='setModalCreate'>Add request</a>
            <a @click.prevent='isLoggedIn ? signOut() : setModalLogin()'>{{ isLoggedIn ? 'Sign out' : 'Login' }}</a>
        </nav>
    </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {auth} from '@/firebase.js'

export default {
    name: "Navbar",
    computed:{
        ...mapGetters(['isLoggedIn'])
    },
    methods:{
        ...mapActions(['setModalCreate','setUser','setModalLogin']),
        signOut(){
            auth.signOut()
                .then(() => this.setUser(null));
        }
    }
}
</script>

<style lang="scss">
header{
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background: white;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
header span{
    font-size: 18px;
    font-weight: bold;
}
header a{
    margin-left: 10px;
    border-bottom: 2px solid #ffe100;
    padding: 4px;
    cursor: pointer;
}
header a:hover{
    background: #ffe100;
    color: black;
}
</style>