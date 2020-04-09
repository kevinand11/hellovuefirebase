<template>
    <section class="content" id="app">
        <h1>Tutorial Requests</h1>
        <ul class="request-list">
            <li v-for="request in requests" :key="request.id">
                <span class="text">{{ request.title }}</span>
                <div>
                    <span class="votes">{{ request.upvotes }} votes</span>
                    <i class="fas fa-arrow-up"></i>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "RequestList",
    data: () => ({
        requests: [
            { title: 'Laravel 6 for beginners', upvotes: 4, id: 37 }
        ]
    })
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
.request-list .upvote:active{
    color: black;
    background: #ffe100;
}
</style>