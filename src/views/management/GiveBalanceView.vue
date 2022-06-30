<template>
    <div class="main">
        <Topbar title="OTORGAR BONOS"/> 
        <GiveBalance/>
    </div>
</template>

<script>
import Topbar from '@/components/shared/Topbar.vue'
import GiveBalance from '@/components/Users/GiveBalance.vue'

    export default {
        components: {
            Topbar,
            GiveBalance 
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