<template>
  <div class="play">
    <!-- <b-container fluid class="bv-example-row">
      <b-row> -->
    <div class="controls">
      <h2 id="subtitle">Steps</h2>
      <div class="square">
        <div class="subsquare">
          <b-img center :src="require('../assets/Steps/book1.png')" alt="Center image"></b-img>
        </div>
        <div class="subsquare">
          <b-img center :src="require('../assets/Steps/detective.png')" alt="Center image"></b-img>
        </div>
        <div class="subsquare">
          <b-img center :src="require('../assets/Steps/danger.png')" alt="Center image"></b-img>
        </div>
      </div>
    </div>
    <div class="content">
      
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
    </div>
      <!-- </b-row>
    </b-container>   -->
  </div>
</template>

<script>
import Concept1 from "../components/Concept1";
import Concept2 from "../components/Concept2";
import Concept3 from "../components/Concept3";
import Reason1 from "../components/Reasons1";


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
        Concept3,
        Reason1
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
  /* position: absolute; */
  float: left;
  height:100vh;
  width: 300px;
  min-height: 700px;

}
.content{
  background-color:#FAFAFA;
  float: left;
  width: calc(100% - 300px);
  padding: 10px;
  height:100vh;
  min-height: 700px;

}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#subtitle{
  text-align: center;

  margin-top: 30px;
  margin-bottom: 10px;
  color: #FAFAFA;
}
.square {
  background-color: #FAFAFA;
  margin: auto;
  margin-top: 20px;
  width: 200px;
  height: 80%;
}
.subsquare {
  height: 33.4%;
  border: 3px solid #555;
  margin: auto;
  width: inherit;
}
.subsquare > img {
  position: relative;
  width: 130px;
  /* Center verticaly */
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);


}
</style>