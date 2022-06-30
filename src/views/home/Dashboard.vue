<template>
    <div class="main">
        <Topbar title="MENÚ ADMINISTRACIÓN"/> 
        <img src="../../assets/logo_banco.png" class="image-container">
        <!-- Users Record -->
        <div class="container data-container text-left" onclick="location.href='/registered-users'" style="width: 350px; cursor:pointer;">
            <div class="text-container mt-2">
                Usuarios registrados
            </div> 
            <UsersRecord style="width: 300px;"/> 
        </div>
        <!-- Second row: Services and Balance available -->
        <div class="container mt-4" style="width: 350px;">
            <div class="row justify-content-between">
                <!-- Actual services -->
                <div class="data-container" onclick="location.href='/give-balance'" style="height: 125px; cursor:pointer;">
                    <ActualServices />
                </div>
                <!-- Actual balance -->
                <div class="data-container" style="height: 125px;">
                    <ActualBalance />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Topbar from '@/components/shared/Topbar.vue'
import UsersRecord from '@/components/dashboard/UsersRecord.vue'
import ActualServices from '@/components/dashboard/ActualServices.vue'
import ActualBalance from '@/components/dashboard/ActualBalance.vue'

    export default {
        components: {
            Topbar,
            UsersRecord,
            ActualServices,
            ActualBalance
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

.image-container {
    margin-top: 60px; 
    margin-bottom: 25px; 
    width: 146px; 
    height: 86px;
}

.data-container {
    border: 3px solid #A70187;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    width: 165px;
}

.text-container {
    font-size: 16px;
    font-weight: bold;
}

</style>