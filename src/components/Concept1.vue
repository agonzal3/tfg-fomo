<template>
    <div id="position">
        <!-- <div :style='"margin-top:" + margin_top + "px"'> -->
        <transition name="slide-fade">
            <div v-if="show">
                <h1>Ha menudo te passado?</h1>

                <div v-if="counter < lista.length">
                    <p>{{lista[counter].text}}</p>
                </div>

                <img :src="lista[counter].imagen">

                <p>{{puntuation}}</p>
                <b-container class="bv-example-row">
                    <div v-if="counter < lista.length">
                        <b-row align-h="between">
                            <b-col cols="6"><b-button @click="wrong">{{lista[counter].aswer1}}</b-button></b-col>
                            <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                            <b-col cols="6"><b-button @click="correct">{{lista[counter].aswer2}}</b-button></b-col>
                        </b-row>
                    </div>

                </b-container>
            </div>
            <div v-if="show2">

                <p>De las anteriores situaciones has mostrado signos de FoMO en {{resoult}} de 4.
                    <span v-if="resoult >= 2">{{respuestas[0].text}}</span>
                    <span v-if="resoult < 2">{{respuestas[1].text}}</span>
                </p>

                <!-- <iframe src="https://giphy.com/embed/ar4x1w44umngk" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> -->
                <img :src="returnimage" alt="">
                <p>Las que estavan a la izquiera eran las respuestas que presentavan signos de FoMO.</p>
                <b-button @click="$emit('enlarge-text')">Next</b-button>
            </div>
        </transition>
        <!-- </div> -->
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";
import fomo_bed from "../assets/Concept1/fomoBed2.jpg";
import fomo_like from "../assets/Concept1/fomoLike.jpg";
import fomo_parents from "../assets/Concept1/fomoParents.jpg";
import fomo_wakeup from "../assets/Concept1/fomoWakeup.jpg";
import giftwin from "../assets/giphy.gif";


export default {
    name:'Concept1',
    props: ['view'],
    data(){
        return {
            show: true,
            show2: false,
            lista:[
              {text:'Tendría que dormir porque mañana voy al instituto, pero puedo escuchar que recibo algún mensaje y ...',
               imagen: fomo_bed, aswer1:'respondo el mensaje y dejo el móvil encendido, por si tengo más mensajes.', aswer2:'respondo el mensaje y apago el mobil para dormir y no responder más mensajes.'},
              {text:'Cuando me levanto de la cama lo primero que hago es ...',
               imagen: fomo_wakeup, aswer1:'coger el mobil para ver que se cuece en las redes sociales.', aswer2:'ir a desayunar o a mear.'},
              {text:'He colgado una history o una publicación y ...',
               imagen: fomo_like, aswer1:'estoy pendiente de los likes y comentarios que recibo.', aswer2:'por lo general no estoy pendeiente de las reacciones.'},
              {text:'Estoy hablando con mis padres y recibo un mensaje, ...',
               imagen: fomo_parents, aswer1:'cojo el mobil para ver si el mensaje es urgente.', aswer2:'siendo consiciente de que tengo el mensaje, acabo de hablar con mis padres sin echarle un vistazo.'}
            ],
            counter:0,
            puntuation:0,
            resoult:0,
            respuestas:[
                {text:'Es de lo más comun entre los adolesecentes y vamos a ver si podemos canviar-lo!'},
                {text:'Este resultado es para estar contento!'},
            ]
        }
    },
    methods:{
        getimage(){
            return giftwin

            //console.log(document.getElementById('mypic').setAttribute('src', xx))
            //console.log(xx)

            //return this.lista[this.counter].imagen;
        },
        correct(){
            this.puntuation += 10;
            this.counter++;
            if(this.counter < 4){
                this.show = !this.show;
                setTimeout(() => this.show = !this.show, 300);
            } else {
                this.show = false;
                setTimeout(() => this.show2 = true, 400);
            }

        },
        wrong(){
            this.resoult +=1;
            this.puntuation -= 10;
            this.counter++;
            if(this.counter < 4){
                this.show = !this.show;
                setTimeout(() => this.show = !this.show, 300);
            } else {
                this.show = false;
                setTimeout(() => this.show2 = true, 400);
            }
        },
        destroy(){
            this.$emit('view', 'Concept2');
            console.log('Finish');
        }

    },
    computed:{
        returnimage(){
            return giftwin;
        },
        // margin_top(){
        //     let height = this.$refs.infoBox.clientHeight;
        //     return (100 - height)/2;
        // }
    },
    created(){
        console.log('Created')
    },
    mounted(){
        console.log('Mounted');
        
    },
    updated(){
        // In the HTML     <div id="position" ref="infoBox">

        // let height = this.$refs.infoBox.clientHeight;
        // console.log(height);
    },
    beforeDestroy(){

    },
    destroyed(){
        console.log('destroy');
    }

}
</script>


<style scoped>

#leaft{
  position: absolute;
  left: 100%;
  top: 50%;
  border: 3px solid green;
  transform: translate(100%, -100%);
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .7s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
iframe {
    pointer-events: none;
}
img {
    max-width: 300px;
}
</style>