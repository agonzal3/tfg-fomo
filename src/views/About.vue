<template>
  <div class="about">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col class="controls">1 of 3</b-col>
        <b-col class="content" cols="9">
          
          <!-- <Concept1 /> -->
          <Concept1 v-if="steps === 1" />
     

          <HelloWorld v-if="steps === 2" />


          <!-- <b-container class="bv-example-row">
            <b-row align-h="between">
              <b-col cols="6"><b-button @click="home">M'he ha passado</b-button></b-col>
              <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">No m'he ha passado</b-button></b-col>
            </b-row>
          </b-container> -->
        </b-col>
      </b-row>
    </b-container>  
  </div>
</template>

<script>
import Concept1 from "../components/Situations2";
import HelloWorld from "../components/HelloWorld";

export default {
    name: 'About',
    data(){
        return {
            steps: 1,
        }
    },
    components: {
        Concept1,
        HelloWorld
    },
    methods:{
        actualstate(){

        }
    }

}



</script>

<style scoped>
.controls{
  background-color: #2c3e50;
  height:100vh;

}
.content{
  background-color:lightskyblue;
  height:100vh;

}
</style>