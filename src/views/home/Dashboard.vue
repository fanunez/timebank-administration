<template>
    <div class="main">
        <Topbar title="MENÚ ADMINISTRACIÓN"/> 
        <img src="../../assets/logo_banco.png" style="margin-top: 60px; margin-bottom: 25px; width: 146px; height: 86px;">
        <!-- Users Record -->
        <div class="container" style="width: 350px; border: 2px solid #74015E;">
            <BarChart style="width: 300px;"/> 
        </div>
        <!--  -->
        
    </div>
</template>

<script>
import Topbar from '@/components/shared/Topbar.vue'
import BarChart from '@/components/dashboard/UsersRecord.vue'

    export default {
        components: {
            Topbar,
            BarChart,
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