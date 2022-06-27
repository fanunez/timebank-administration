<template>
    <div class="main">
        <Topbar title="USUARIOS REGISTRADOS"/> 
        <img src="../../assets/logo_banco.png" class="image-container">
        <!-- Users Record -->
        <div class="container text-left" style="width: 350px;">
            <div class="text-container mt-2 text-center">
                BUSCAR POR NOMBRE Y APELLIDO
            </div> 
            <UsersRecord style="width: 300px;"/> 
        </div>
        <b-input-group>
        <form @submit.prevent="searchByName" class="row" style="width: -webkit-fill-available; justify-content: center; max-height: 60px;">
          <b-form-input class="search-bar" id="buscador" v-model="formData.name" placeholder="Nombre" />
          <b-form-input class="search-bar" id="buscador2" v-model="formData.surname" placeholder="Apellido" />
          <div>
            <b-button type = "submit" class="search-button" variant="none">
                <template>
                <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
                </template>
            </b-button>
          </div>  
        </form>
      </b-input-group>
      <div class="text-container">
        Hola
      </div>
    </div>
</template>

<script>
import Topbar from '@/components/shared/Topbar.vue'

import axios from 'axios'

export default {
    components: {
            Topbar,
        },
  data() {
    return{
        formData:{
        name: '',
        surname: ''
        },
        users: [],
    }
  },
  methods: {
    searchByName(){
        axios 
        .get( 'http://localhost:8080/api/users/getUser/' + this.formData.name + '/' +this.formData.surname )
          .then(( response ) => {
            this.users = response.data;
            console.log(this.users)
          }
          )
        .catch(( error ) => console.log( error ))
    }
  },
  async mounted (){
    await axios
      .get( 'http://localhost:8080/api/users/' )
      .then( response => {
        this.users = response.data.usersComunidad;
        console.log(this.users)
      })
      .catch(( e => console.log( e ) ))
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
    font-size: 18px;
    font-weight: bold;
}

  .principal-frame{
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    padding: 100px 0px;
    background-color:white;
    height: fit-content;
    min-height: 900px;
  }
  .bg-light{
    background-color:#74015E!important;
  }
  .btn{
    padding: 0rem;
  }
  .btn-primary{
    background-color: #74015E!important;
  }
  .btn-outline-primary{
    width: -webkit-fill-available;
    background-color: white!important;;
    color: black!important;
    border-color: black!important;
  }
  .card-container {
    margin: 0px auto;
    max-width:360px;
    cursor:pointer;
    border: 1px solid rgba(0,0,0,.125);
  }
  .contenedor{
      position: relative;
      display: inline-block;
      text-align: center;
  }
  .center-left{
      position: absolute;
      top: 50%;
      left: 57%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 24px;
  }
  .center-right{
      position: absolute;
      top: 50%;
      left: 43%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 24px;
  }
  .img-left{
    width: 100%;
    max-width: 167.5px;
    height: auto;
    opacity: 50%;
    margin-right: 5px;
  }
  .img-right{
    width: 100%;
    max-width: 167.5px;
    height: auto;
    opacity: 50%;
    margin-left: 5px;
  }
  .search-bar{
    width:80%;
    margin-top: 5px;
    margin-bottom: 5px;
    border-color: #A70187;
    border-width: medium;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    height:50px;
  }
  .search-button{
    width:50px;
    padding: 7px;
    margin: 10px 0px;
    background-color: #A70187;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

</style>