<template>
    <div class="position">
      <h2>Para saber en que punto estamos te reto a acertar la siguiente pregnta, en menos de tres intentos.</h2>

      <p>¿Cuál es la media de uso del móvil entre los jóvenes de España?</p>

      <!-- <input append="h"> -->
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="6">
            <b-input-group  size="lg" append="h">
                    <vue-numeric-input
                      id="style1"
                      :min="0" 
                      :max="24" 
                      :value="hours" 
                      size="130px"
                      align="center"
                      controls-type="updown"
                      v-model="hours"></vue-numeric-input>
            </b-input-group>
          </b-col>
          <b-col md="6">
            <b-input-group  size="lg" append="min">
              <vue-numeric-input
                      id="style2"
                      :min="0" 
                      :max="50" 
                      :value="minutes" 
                      :step="10"
                      size="130px"
                      align="center"
                      controls-type="updown"
                      v-model="minutes"></vue-numeric-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
      <p>{{hours}}:{{minutes}}</p>
      <b-button @click="calculatetime" :disabled="counter === 0">{{counter}} intentos</b-button>
      <p :class="classe">{{responce}}</p>
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";


export default {
    name:'Concept3',
    data(){
        return {
            show: true,
            minutes: 0,
            hours:0,
            classe:"",
            realhoures:6,
            realminutes:50,
            responce:"",
            counter:3
        }
    },
    //props: ['listdata','counter'],
    methods:{ 
      calculatetime(){
        this.counter--;
        let diferenceh = this.realhoures-this.hours;
        let text1 = "";
        let text2 = "";
        if(this.hours === this.realhoures && this.minutes === this.realminutes){
          this.responce = "Lo has acertado!!";
          this.classe = 'correct';
        }else {
          if(diferenceh === 0){
            text1="creca";
            text2="grande";
          }else if(Math.abs(diferenceh) <= 2){
            text1="creca";
            if(diferenceh>0) text2="grande";
            else text2="pequeño";
          } else {
            text1="lejos";
            if(diferenceh>0) text2="grande";
            else text2="pequeño";
          }
          this.classe = 'wrong';
          this.responce = "Estas "+text1+" de la respuesta y es un numero más "+text2;
        }
      }
    }
}
</script>


<style scoped>
.position{
  position: inherit;
  left: 50%;
  top: 50%;
  /* border: 3px solid green; */
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
input{
  font-size: 50px;
}
#style1{
  font-size: 40px;
}
#style2{
  font-size: 40px;
}
.correct{
  color: green;
}
.wrong{
  color: red;
}

</style>