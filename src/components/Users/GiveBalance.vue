<template>
  <div class="main"> 
      <img src="../../assets/logo_banco.png" class="image-container">
      <div class="container text-left" style="width: 350px;">
          <div class="text-container mt-2 text-center">
              BUSCAR POR NOMBRE Y APELLIDO
          </div> 
      </div>
      <b-input-group>
        <form @submit.prevent="searchByName" class="row" style="width: -webkit-fill-available; justify-content: center;">
          <b-form-input class="search-bar" id="buscador" v-model="formData.name" placeholder="Nombre" />
          <b-form-input class="search-bar" id="buscador2" v-model="formData.surname" placeholder="Apellido" />
          <div style="padding:0px;">
            <b-button type = "submit" class="search-button" variant="none">
                <template>
                  Buscar <Icon icon="charm:search" style="width:22px; height:22px; margin-bottom:5px; color: white;"/>
                </template>
            </b-button>
          </div>  
        </form>
      </b-input-group>
    <div class="container" style="margin-top: 5px;">
      <b-card-group>

        <b-card title="Nombre" body-class="card-names">
          <b-card-text style="color: black;">
            <div v-for="(user,index) in users" :key="index">
              <p style="margin-top: 16px; padding-top: 4px; font-size: 18px;">{{user.name}} {{user.surname}}</p>
            </div>
          </b-card-text>
        </b-card>

        <b-card title="Bonos actuales" body-class="card-balance">
          <b-card-text style="color: black;">
            <div v-for="(user,index) in users" :key="index">
            
              <b-input-group style="justify-content: center; margin: 10px 0px;">
                <b-form-input id="balance" type = "number" v-model="FormData.newValue[index]" :placeholder="''+user.balance" class="balance-form"></b-form-input>
                <b-input-group-append>
                  <b-button text="Button" class="send-button" type="sumbit" v-on:click="updateBalance(user.uid, index)">Enviar</b-button>
                </b-input-group-append>
              </b-input-group>           
              
            </div>
          </b-card-text>
        </b-card>

      </b-card-group>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
        formData:{
        name: '',
        surname: ''
        },
        FormData:{
          newValue: []
        },
        users: [],
    }
  },
  methods: {
    searchByName(){

        const payload = {
            name: this.formData.name,
            surname: this.formData.surname
        }

        axios 
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/get-user-by-full-name' , payload )
          .then(( response ) => {
            this.users = [];
            const Comunity = response.data;
            Comunity.forEach(element => {
            if (element.type_user == "Orange"){
              this.users.push(element)
            }
            });
          })
        .catch(( error ) => console.log( error ))
    },
    async updateBalance(uid, index) {

      const payload = {
        balance: this.FormData.newValue[index]
      }

      await axios
        .put( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/balance-asignator/'+ uid , payload )
        .then( response => {
        })
        .catch( e => console.log( e ))
    }
  },
  async mounted (){
    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/' )
      .then( response => {
        const Comunity = response.data.usersComunidad;
        Comunity.forEach(element => {
          if (element.type_user == "Orange"){
            this.users.push(element)
          }
        });
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
  width:70%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-color: #A70187;
  border-width: medium;
  height:50px;
}
.search-button{
  width:70%;
  padding: 10px;
  margin: 10px 0px;
  background-color: #A70187;
  border-radius: 10px;
  color: white;
}
.card-names{
  padding: 0px;
  border-style: solid;
  border-right-width: 1px;
  border-color: black;
  padding-bottom: 10px;
}
.card-balance{
  padding: 0px;
  border-style: solid;
  border-left-width: 2px;
  border-color: black;
  padding-bottom: 10px;
}
.card-title{
  background-color: #A70187;
  color: white;
  border-bottom-style: solid;
  border-color: black;
}
.send-button{
  background-color: #A70187!important;
  margin: 0px;
  margin-left: 20px; 
  padding: 5px 10px;
  border-radius: 10px!important;
}
.balance-form{
  max-width: 65px;
  border-radius: 4px!important;
}

</style>