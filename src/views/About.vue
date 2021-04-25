<template>
  <div class="about">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col cols="9">
          <h1>Te ha passado alguna vez?</h1>
          
          <!-- <Concept1 /> -->
          <Concept1 />
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

export default {
    name: 'About',
    data(){
        return {
            
        }
    },
    components: {
        Concept1
    },
    methods:{
        
    }

}



</script>

<style scoped>

</style>