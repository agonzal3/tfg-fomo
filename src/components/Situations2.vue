<template>
    <div>
        <!-- <img src=this.getimage> -->
        <img v-if="counter == 0" :title=getimage() src="../assets/logo.png">
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
        <p v-if="counter == lista.length && resoult > 2">De las anteriores situaciones has mostrado signos de FoMO en {{resoult}} de 4. {{respuestas[0].text}}. 
            Las que estaban a la izquierda son las que eran signos de FoMO.</p>
        <p v-if="counter == lista.length && resoult < 2">De las anteriores situaciones has mostrado signos de FoMO en {{resoult}} de 4. {{respuestas[1].text}}. 
            Las que estaban a la izquierda son las que eran signos de FoMO.</p>
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";



export default {
    name:'Concept1',
    data(){
        return {
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
                {text:'Muy bien!'},
                {text:'jajaajjaaj'},
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
        },
        wrong(){
            this.puntuation -= 10;
            this.counter++;
        }
        
    },
    created(){
        console.log('Created')
    },
    mounted(){
        console.log('Mounted')
    },
    updated(){
        console.log(this.counter)
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
