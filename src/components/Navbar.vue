<template>
    <header>
        <span>TechWith11</span>
        <nav>
            <a @click.prevent='setModalCreate'>add request</a>
            <a>sign out</a>
        </nav>
    </header>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "Navbar",
    methods:{
        ...mapActions(['setModalCreate'])
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