<template>
    <div id="position">
        <!-- <div class="vuelta">
            <h3>{{items[count].title}}</h3>
            <img :src="items[count].imagen">

            <b-container class="bv-example-row">
                <b-row align-h="between">
                    <b-col cols="6"><b-button variant="danger">False</b-button></b-col>
                    <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> --
                    <b-col cols="6"><b-button variant="success">True</b-button></b-col>
                </b-row>
            </b-container>
        </div> -->
        <flipper
            width=100%
            height="600px"
            :flipped="flipped">
            <div class="front" slot="front">
                <div>
                    <h2>Breaking news</h2>
                    <h3>{{items[count].title}}</h3>
                    <img :src="items[count].imagen">

                    <div>
                        <b-button @click="onClick" style="margin-right:20px" variant="danger">False</b-button>
                                <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                        <b-button @click="onClick" style="margin-left:20px" variant="success">True</b-button>
                    </div>
                </div>
            </div>
        
            <div Class="front" slot="back">
                <div>
                    <h3>It is {{items[count].res}}</h3>
                    <h4>{{items[count].solution.title}}</h4>
                    <p>{{items[count].solution.text}}</p>

                    <p><b-button variant="warning">Siguiente noticia</b-button></p>

                    Fuente: <a :href="items[count].solution.link" target="_blank" v-if="items[count].solution.fuente">{{items[count].solution.fuente}}</a>
                </div>
            </div>
        </flipper>
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
import Flipper from 'vue-flipper';


export default {
    name:'Consequence',
    // components: {
    //     'vue-flip': VueFlip
    // },
    components: { Flipper },
    data(){
        return{
            count:0,
            flipped: false,
            items:[
                {id:0, title:'El 15% de los accidentes mortales de cotxe son probocados por el mobil', res:false,
                solution:{title:'Las distracciones provocadas por el uso del móvil causan 390 muertos al año (más del 20% del total de fallecidos en accidentes de tráfico).',
                        text:'Esto es una consequencia de la FoMO, ya que en la mayoria de los acidentes los conductores no estan usado el como GPS, sinó que estan hablando, enviando algun mensaje o incluso en las redes sociales.',
                        fuente:'Smartphones: el impacto de la adicción al móvil en los accidentes de tráfico, en setiembre de 2019',
                        link:'https://revista.dgt.es/es/noticias/nacional/2019/09SEPTIEMBRE/0923-Distraciones-moviles-Linea-Directa.shtml'}, 
                imagen: coche
                },
                {id:1, title:'Ahora la gente cuando queda, se presta más atención y deja el mobil de banda.', res:false,
                solution:{title:'Cunado estamos comiendo el mobil nos lleva a un ',
                        text:'',
                        fuente:'',
                        link:''}, 
                imagen: coche
                },
                {id:1, title:'', res:false,
                solution:{title:'',
                        text:'',
                        fuente:'',
                        link:''}, 
                imagen: coche
                },
                {id:1, title:'', res:false,
                solution:{title:'',
                        text:'',
                        fuente:'',
                        link:''}, 
                imagen: coche
                },
                {id:1, title:'', res:false,
                solution:{title:'',
                        text:'',
                        fuente:'',
                        link:''}, 
                imagen: coche
                }
            ]
        }
    },
    methods:{
        onClick () {
            this.flipped = !this.flipped;
        }
    }
}
</script>

<style src="vue-flipper/dist/vue-flipper.css" />
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
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* box-shadow: 0 3px 15px rgba(#000, 0.45); */
    border: solid 3px black;
    box-shadow: 10px 5px 5px black;
    
}
.front > div {
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}


.back {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* box-shadow: 0 3px 15px rgba(#000, 0.45); */
    background-color: teal;
    border: solid 3px black;
    

}

.Hello{
    background-color: teal;
}
</style>