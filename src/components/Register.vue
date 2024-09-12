<script  lang="ts">
  import { defineComponent,ref } from 'vue';
  interface User {
    name: string;
    dateOfBirth: string;
    phone: string;
    address: string;
    email: string;
  }
  export default defineComponent({
    name: 'Register',
    setup() {
      const users = ref<User[]>([]);
      return {
        name: ref(''),
        errorName: ref(false),
        dateOfBirth: ref(''),	
        errorDateOfBirth: ref(false),
        phone: ref(''),
        errorPhone: ref(false),
        address: ref(''),
        errorAddress: ref(false),
        email: ref(''),
        errorEmail: ref(false),
        isValid: ref(true),
        users
      };
    },
    methods:{
      validation(){

        if(this.name === ''){
          this.errorName = true
          this.isValid = false
        }

        if(this.dateOfBirth === ''){
          this.errorDateOfBirth = true
          this.isValid = false
        }

        if(this.phone === ''){
          this.errorPhone = true
          this.isValid = false
        }

        if(this.address === ''){
          this.errorAddress = true
          this.isValid = false
        }

        if(this.email === ''){
          this.errorEmail = true
          this.isValid = false
        }
        return this.isValid
      },
      closePopup(){
        this.isValid = true
      },
      save(){
        this.validation();

        if(this.isValid){
          this.users.push({
            name: this.name,
            dateOfBirth: this.dateOfBirth,
            phone: this.phone,
            address: this.address,
            email: this.email
          });
          this.name = '';
          this.dateOfBirth = '';
          this.phone = '';
          this.address = '';
          this.email = '';
          this.errorName = false
          this.errorDateOfBirth = false
          this.errorEmail = false
          this.errorPhone = false
          this.errorAddress = false
        }
        localStorage.setItem('newUserRegistered', 'true');
      }
    }
  });
  </script>

<template>
  <div style="width: 95vw; display: flex; justify-content: center">
    <div class="box">
      <div  :class="{'popup': true , 'open-popup': !isValid}">
        <h2>Rellena todos los campos antes de enviar por favor!</h2>
        <button @click="closePopup">OK</button>
      </div>
      <div class="container">
        <h1>Regístrate</h1>
        <label for="name">Nombre</label>
        <input type="text" v-model="name"  :style="{ border: errorName ? '2px solid #FF5E5E' : '' }">
        <label for="date">Fecha de nacimiento</label>
        <input type="text" v-model="dateOfBirth" :style="{ border: errorDateOfBirth ? '2px solid #FF5E5E' : '' }">
        <label for="phone">Teléfono</label>
        <input type="text" v-model="phone" :style="{ border: errorPhone ? '2px solid #FF5E5E' : '' }">
        <label for="address">Dirección</label>
        <input type="text" v-model="address" :style="{ border: errorAddress ? '2px solid #FF5E5E' : '' }">
        <label for="email">Correo</label>
        <input type="text" v-model="email" :style="{ border: errorEmail ? '2px solid #FF5E5E' : '' }"> 
        <button @click="save">Enviar</button>
        <hr>
        <h3>¿Ya hiciste tu cuenta? <a href="/">Iniciar sesión</a></h3>
      </div>
      <div class="container">
        <h2>Información de tí</h2>
        <table>
          <th>Nombre</th>
          <th>Fecha de nacimiento</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Correo</th>
          <tr v-for="user in users">
            <td>{{ user.name }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.phone }}</td> 
            <td style="text-wrap: wrap;">{{ user.address }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  
  
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .box{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    width: fit-content;
    justify-items: center;
    justify-self: center;
    border: 2px, solid, #353535;
    border-radius: 30px;
    background-color: #D9D9D9;
    padding: 20px;
    box-shadow: #284B63 0px 5px 15px;
  }
  button{
    background-color: #3C6E71;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    padding: 5px;
    color: white;
    
  }
  button:hover{
    background-color: #284B63;
  }
  input{
    outline-color: #3C6E71;
  
  }
  th{
    margin: 6px;
    padding: 5px;
    color: #284B63;
    text-align: center;
  }
  td{
    padding: 6px;
  }
  h1,h2{
    color: #353535;
  }
  label{
    color: #284B63;
  }
  table{
    border: 2px solid #3C6E71;
    text-align: center;
    border-radius: 5px;
    color: #353535;
  }
  .popup{
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 30px;
    border: 2px,solid, #FF5E5E;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%) scale(0.1);
    text-align: center;
    padding: 30px;
    box-shadow: #353535 0px 5px 10px;
    visibility: hidden;
    transition: transform 0.4s, top 0.4s;
  }
  .popup button{
    width: 100px;
    box-shadow: #284B63 0px 5px 10px;
  }
  .open-popup{
    visibility: visible;
    top: 50%;
    transform: translate(-50%,-50%) scale(1);
  }
</style>
