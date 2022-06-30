<template>
    <div class="main">
        <Topbar title="USUARIOS REGISTRADOS"/> 
        <RegisteredUsers/>
    </div>
</template>

<script>
import Topbar from '@/components/shared/Topbar.vue'
import RegisteredUsers from '@/components/Users/RegisteredUsers.vue'

    export default {
        components: {
            Topbar,
            RegisteredUsers 
    }
    }

</script>

<style scoped>
.main{
    min-height: -webkit-fill-available;
    height: 100vh;
    padding-top: 20px;
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    background-color:white
}

</style>