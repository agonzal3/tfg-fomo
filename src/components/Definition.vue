<template>
    <div class="position">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <div class="w-100"></div>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";



export default {
    name:'Concept2',
    data(){
        return {
            show: true,
            lista:[
              
            ],
            counter:0,
            puntuation:0,
            resoult:0,
            respuestas:[
                {text:''},
                {text:'Este resultado es para estar contento!'},
            ]
        }
    },
    //props: ['listdata','counter'],
    methods:{ 
    }
}
</script>


<style scoped>
.position{
  position: inherit;
  left: 50%;
  top: 50%;
  border: 3px solid green;
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
</style>