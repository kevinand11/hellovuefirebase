<template>
    <div class="background">
        <div class="outside" @click="closeModal"></div>
        <div class="modal">
            <h2>Request a Tutorial</h2>
            <form>
                <input type="text" name="request" placeholder="Course Title">
                <button>Submit Request</button>
                <p class="error"></p>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "CreateRequest",
    methods:{
        ...mapActions(['closeModal'])
    }
}
</script>