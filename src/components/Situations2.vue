<template>
    <div class="position">
        <h1>Te ha passado alguna vez?</h1>

        <transition name="slide-fade">
            <div v-if="show">
                <!-- <img src=this.getimage> -->
                <img src="../assets/logo.png">
                <!-- <p>{{getimage()}}</p> -->
                <div v-if="counter < lista.length">
                    <p>{{lista[counter].text}}</p>
                </div>
                <div v-if="counter == lista.length">
                    <p>{{lista[lista.length-1].text}}</p>
                </div>
                <p>{{puntuation}}</p>
                <b-container class="bv-example-row">
                    <div v-if="counter < lista.length">
                        <b-row align-h="between">
                            <b-col cols="6"><b-button @click="correct">{{lista[counter].aswer1}}</b-button></b-col>
                            <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                            <b-col cols="6"><b-button @click="wrong">{{lista[counter].aswer2}}</b-button></b-col>
                        </b-row>
                    </div>
                    <div v-if="counter == lista.length">
                        <b-row align-h="between">
                            <b-col cols="6"><b-button disabled>{{lista[lista.length-1].aswer1}}</b-button></b-col>
                            <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                            <b-col cols="6"><b-button disabled>{{lista[lista.length-1].aswer2}}</b-button></b-col>
                    </b-row>
                    </div>
                    
                </b-container>
                
            </div>
        </transition>
        <div v-if="counter == lista.length">
            <p>De las anteriores situaciones has mostrado signos de FoMO en {{resoult}} de 4.
                <span v-if="resoult >= 2">{{respuestas[0].text}}</span>
                <span v-if="resoult < 2">{{respuestas[1].text}}</span>
            </p>
            <p>Las que estavan a la izquiera eran las respuestas que presentavan signos de FoMO.</p>
            <b-button id='leaft'>Hello</b-button>
        </div>
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";



export default {
    name:'Concept1',
    data(){
        return {
            show: true,
            lista:[
              {text:'Tendría que dormir porque mañana voy al instituto, pero puedo escuchar que recibo algún mensaje y ...',
               imagen:'../assets/logo.png', aswer1:'respondo el mensaje y dejo el móvil encendido.', aswer2:'apago el mobil de golpe.'},
              {text:'Cuando me levanto de la cama lo primero que hago es ...',
               imagen:'../assets/logo.png', aswer1:'coger el mobil para ver que se cuece en las redes sociales.', aswer2:'ir a desayunar o a mear.'},
              {text:'He colgado una history o una publicación y ...',
               imagen:'../assets/logo.png', aswer1:'estoy pendiente de los likes y comentarios que recibo.', aswer2:'no le doy importancia a las reaciones.'},
              {text:'Estoy hablando con mis padres y recibo un mensaje, ...',
               imagen:'../assets/logo.png', aswer1:'cojo el mobil para ver el mensaje.', aswer2:'me espero a terminar de hablar para responder.'}
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
    //props: ['listdata','counter'],
    methods:{
        getimage(){
            return this.lista[this.counter].imagen
            
            //console.log(document.getElementById('mypic').setAttribute('src', xx))
            //console.log(xx)

            //return this.lista[this.counter].imagen;
        },
        counterb(){
            if(this.counter<this.lista.length-1){
                console.log(this.counter++);
            }else{
                this.counter=0;
            }

        },
        correct(){
            this.resoult +=1;
            this.puntuation += 10;
            this.counter++;
            if(this.counter !== 4){
                this.show = !this.show;
                setTimeout(() => this.show = !this.show, 250);
            }
           
        },
            
        wrong(){
            this.puntuation -= 10;
            this.counter++;
            if(this.counter !== 4){
                this.show = !this.show;
                setTimeout(() => this.show = !this.show, 250);
            }
        }
        
    },
    created(){
        console.log('Created')
    },
    mounted(){
        console.log('Mounted')
    },
    updated(){
        console.log(this.counter);
        // if(this.counter == this.lista.length-1){
        //     this.$destroy();
        // }
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroy');
    }
    
}
</script>


<style scoped>

.position{
  position:inherit;
  left: 50%;
  top: 50%;
  border: 3px solid green;
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
}
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