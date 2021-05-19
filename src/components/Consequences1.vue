<template>
    <div id="position">
        <div class="vuelta">
            <h3>{{items[count].title}}</h3>
            <img :src="items[count].imagen">

            <b-container class="bv-example-row">
                <b-row align-h="between">
                    <b-col cols="6"><b-button variant="danger">False</b-button></b-col>
                    <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                    <b-col cols="6"><b-button variant="success">True</b-button></b-col>
                </b-row>
            </b-container>
        </div>
        <!-- <div class="Hello">
            <vue-flip active-click="" width="200px" height="50px">
            <template v-slot:front class="front">
                front
            </template>
            <template v-slot:back class="back">
                back
            </template>
        </vue-flip> 
        </div>   -->
    </div>
</template>

<script>
// import VueFlip from 'vue-flip';
import coche from "../assets/Consequences/coche1.jpg";

export default {
    name:'Consequence',
    // components: {
    //     'vue-flip': VueFlip
    // },
    data(){
        return{
            count:0,

            items:[
                {id:0, title:'El 15% de los accidentes mortales de cotxe son probocados por el mobil', res:false,
                solution:{title:'Las distracciones provocadas por el uso del móvil causan 390 muertos al año (más del 20% del total de fallecidos en accidentes de tráfico).',
                        text:'Esto es una consequencia de la FoMO, ya que en la mayoria de los acidentes los conductores no estan usado el como GPS, sinó que estan hablando, enviando algun mensaje o incluso en las redes sociales.',
                        fuente:'Smartphones: el impacto de la adicción al móvil en los accidentes de tráfico, en setiembre de 2019',
                        link:'https://revista.dgt.es/es/noticias/nacional/2019/09SEPTIEMBRE/0923-Distraciones-moviles-Linea-Directa.shtml'}, 
                imagen: coche
                }
            ]
        }
    }
}
</script>

<style scoped>
img {
    max-width: 350px;
    margin-top: 10px;
    margin-bottom: 25px;
}

.vuelta{
    border: solid 1px brown;
    padding: 30px;
}

.front{
    background-color: yellow;
    color: teal;
}

.back {
    background-color: teal;
    color:yellow;
}

.Hello{
    background-color: teal;
}
</style>