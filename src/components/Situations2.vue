<template>
    <div>

        <!-- <img src=this.getimage> -->
        <img v-if="counter == 0" :title=getimage() src="../assets/logo.png">
        <!-- <p>{{getimage()}}</p> -->
        <p>{{listdata[counter].text}}</p>

    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";



export default {
    name:'Concept1',
    props: ['listdata','counter'],
    methods:{
        getimage(){
            return this.listdata[this.counter].imagen
            
            //console.log(document.getElementById('mypic').setAttribute('src', xx))
            //console.log(xx)

            //return this.listdata[this.counter].imagen;
        }

        
    }
}
</script>
