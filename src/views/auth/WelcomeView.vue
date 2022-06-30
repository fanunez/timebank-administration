<template>
    <div class="main">
      <img src="../../assets/logo_banco.png" style="margin: 20px auto; width: 146px; height: 86px;">
      <div class="timebank-header">Inicio de sesión <br>
                                   Administración
      </div>
      <div class="timebank-title mx-3 mt-3">Pagina para administracion <br> 
                                       y estudio estadistico de la <br>
                                       pagina banco de tiempo
      </div>
      <b-button href="/login" class="login-button">Ingresar</b-button>
      <!-- CITIAPPS logo -->
      <div class="row" style="margin-left:15px; padding-top: 120px;">
        <img src="../../assets/logo_citiaps.png" style="width: 173px; height: 55px; ">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped>
.main{
  min-height: -webkit-fill-available;
  height: 100vh;
  padding-top: 80px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white
}
.timebank-header{
  font-weight: bold;
  font-size: 28px;
}
.timebank-title{
  font-weight: 300;
  font-size: 24px;
}

.login-button{
  width: -webkit-fill-available;
  margin: 20px 40px;
  background-color: white!important;;
  color: #A70187!important;
  border-color: #A70187!important;
  font-size: x-large;
  border: groove;
  border-radius: 10px;
}

</style>