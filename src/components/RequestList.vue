<template>
    <section class="content">
        <h1>Tutorial Requests</h1>
        <ul class="request-list">
            <li v-for="request in requests" :key="request.id">
                <span class="text">{{ request.title }}</span>
                <div>
                    <span class="votes">{{ request.upvotes }} votes</span>
                    <i class="fas fa-arrow-up" @click.prevent="upvoteRequest(request['.key'])"></i>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import {firestore,functions} from '@/firebase.js'
export default {
    name: "RequestList",
    firestore: () => ({
        requests: firestore.collection('requests').orderBy('upvotes', 'desc')
    }),
    methods: {
        upvoteRequest(id){
            const upvote = functions.httpsCallable('upvote');
            upvote({ id })
                .then(() => alert('Done'))
                .catch(error => alert(error.message));
        }
    }
}
</script>

<style lang="scss">
.content{
    max-width: 600px;
    margin: 40px auto 0;
}
.request-list li{
    padding: 20px;
    margin: 10px auto;
    list-style-type: none;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
}
.request-list .votes{
    top: -5px;
    z-index: 0;
    margin: 0 1rem;
}
.request-list i{
    cursor: pointer;
    border-radius: 50%;
}
</style>