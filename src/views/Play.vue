<template>
  <div class="play">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col class="controls">1 of 3</b-col>
        <b-col class="content" cols="9">
          
          <!-- <Concept1 /> -->
          <!-- <Concept1 v-if="steps === 1" /> -->
     

          <!-- <HelloWorld v-if="steps === 2" /> -->
          <transition name="component-fade" mode="out-in">
            <component v-bind:is="view" v-on:enlarge-text="onEnlargeText"></component>
          </transition>

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
import Concept1 from "../components/Concept1";
import Concept2 from "../components/Concept2";
import Concept3 from "../components/Concept3";


export default {
    name: 'Play',
    data(){
        return {
            steps: 0,
            view:'Concept1',
            xx: []
        }
    },
    components: {
        Concept1,
        Concept2,
        Concept3
    },
    methods:{
        onEnlargeText() {
          this.steps++;
          this.view = this.xx[this.steps].name;
        }
    },
    created(){
      this.xx = Object.values(this.$options.components)
      console.log(this.xx);
    },
    updated(){
      console.log('Hello');
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>