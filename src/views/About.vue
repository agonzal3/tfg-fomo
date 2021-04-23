<template>
  <div class="about">
    <h1>Te ha passado alguna vez?</h1>
    <!-- <Concept1 /> -->
    

      <Concept1 :listdata="lista" :counter="counter"/>

      <b-container class="bv-example-row">
        <b-row align-h="between">
          <b-col cols="6"><b-button @click="home">M'he ha passado</b-button></b-col>
          <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">No m'he ha passado</b-button></b-col>
        </b-row>
      </b-container>
      
  </div>
</template>

<script>
import Concept1 from "../components/Situations2";

export default {
    name: 'About',
    data(){
        return {
            lista:[
              {text:'En jordi es diu aixi',imagen:'../assets/logo.png'},
              {text:'En pere es diu aixi',imagen:''},
              {text:'En martin es diu aixi',imagen:''},
              {text:'Leulalia es diu aixi',imagen:''}
            ],
            counter:0
        }
    },
    components: {
        Concept1
    },
    methods:{
        home(){
          if(this.counter<this.lista.length-1){
            console.log(this.counter++);
          }else{
            this.counter=0;
          }
        }
    }

}



</script>
