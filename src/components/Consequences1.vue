<template>
    <div id="position">
        <flipper
            width=100%
            height="600px"
            :flipped="flipped">
            <div class="front" slot="front">
                <div>
                    <h2>Breaking news</h2>
                    <h3>{{items[frontcount].title}}</h3>
                    <img :src="items[frontcount].imagen">

                    <div>
                        <b-button @click="onClick(false)" style="margin-right:20px" variant="danger">False</b-button>
                                <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                        <b-button @click="onClick(true)" style="margin-left:20px" variant="success">True</b-button>
                    </div>
                </div>
            </div>
        
            <div Class="back" slot="back">
                <div>
                    <h2 id="title">{{resolution}}</h2>
                    <h3>It is {{items[backcount].res}}</h3>
                    <h4>{{items[backcount].solution.title}}</h4>
                    <p>{{items[backcount].solution.text}}</p>

                    <p>
                        <b-button  v-if="backcount < items.length-1" @click="nextnew" variant="warning">Siguiente noticia</b-button>
                        <b-button v-else @click="$emit('enlarge-text')" variant="warning">Siguiente noticia</b-button>
                    </p>
                   

                    Fuente: <a :href="items[backcount].solution.link" target="_blank" v-if="items[backcount].solution.fuente">{{items[backcount].solution.fuente}}</a>
                </div>
            </div>
        </flipper>
    </div>
</template>

<script>
// import VueFlip from 'vue-flip';
import coche from "../assets/Consequences/coche1.jpg";
import decreasing from "../assets/Consequences/decreasing.png";
import distraction from "../assets/Consequences/distraction.jpg";
import freetime from "../assets/Consequences/freetime.jpg";
import stress from "../assets/Consequences/stress.jpg";
import friends from "../assets/Consequences/friends.jpg";

import Flipper from 'vue-flipper';


export default {
    name:'Consequence',
    // components: {
    //     'vue-flip': VueFlip
    // },
    components: { Flipper },
    data(){
        return{
            frontcount:0,
            backcount:0,
            flipped: false,
            resolution: null,
            items:[
                {id:0, title:'El 15% de los accidentes mortales de cotxe son probocados por el móvil', res:false,
                solution:{title:'Las distracciones provocadas por el uso del móvil causan 390 muertos al año (más del 20% del total de fallecidos en accidentes de tráfico).',
                        text:'Esto es una consequencia de la FoMO, ya que en la mayoria de los acidentes los conductores no estan usado el como GPS, sinó que estan hablando, enviando algun mensaje o incluso en las redes sociales.',
                        fuente:'Smartphones: el impacto de la adicción al móvil en los accidentes de tráfico, en setiembre de 2019',
                        link:'https://revista.dgt.es/es/noticias/nacional/2019/09SEPTIEMBRE/0923-Distraciones-moviles-Linea-Directa.shtml'}, 
                imagen: coche
                },
                {id:1, title:'La gente cada vez tiende a estar más atenta en las conversaciones físicas con amigos y no se distraen con el móvil.', res:false,
                solution:{title:'Cada vez más gente ignora la presencia de sus amigos, familiares y compañeros, por estar con el móvil. Este fenomeno se dice "Phubbing behaviour".',
                        text:'En muchos casos este comportamento viene dado por estar pendient de lo que otra gente esta haciendo en las redes sociales. Una consequencia directa de la FoMO.',
                        fuente:'Fear of Missing Out as a Predictor of Problematic Social Media Use and Phubbing Behavior among Flemish Adolescents',
                        link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6211134/'}, 
                imagen: friends
                },
                {id:2, title:'Es más probable, que la gente que presenta altos niveles de FoMO, reduzca estos niveles al cabo del tiempo.', res:false,
                solution:{title:'Los adolescentes que reportan altos niveles de FoMO, són más probables que al cabo de un año reporten aún más niveles de FoMO.',
                        text:'Es un Circulo Vicioso, en el que cada vez incrementa en nivel de FoMO y por tanto, el malestar y la dependencia de saber lo que estan haciendo los demas.',
                        fuente:'Examining bi-directionality between Fear of Missing Out and problematic smartphone use. A two-wave panel study among adolescents',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S030646032030099X'}, 
                imagen: decreasing
                },
                {id:3, title:'Los adolsecentes que presentan altos niveles FoMO se estresan más por no ser populares y no sentirse parte de algo en las redes sociales', res:true,
                solution:{title:'Los adolecesentes se estresan al no recivir un comentario o un like de una publicación.',
                        text:'Quiza parezca absurdo o penses que a todo el mundo le pasa, però hay gente que al sube una foto esta muy pendiente de los likes y comentarios y si no los recive se estresa. Eseo le pasa a la gente con niveles notables de FoMO.',
                        fuente:'“I don’t want to miss a thing”: Adolescents’ fear of missing out and its relationship to adolescents’ social needs, Facebook use, and Facebook related stress',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S0747563216304198'}, 
                imagen: stress
                },
                {id:4, title:'Los individuos que presentan altos niveles de FoMO, rinden peor en el trabajo y en las clases.', res:true,
                solution:{title:'Una causa de un mal rendimiento a classe y en el trabajo es el uso indevido del móvil.',
                        text:'Los estudiantes y trabajadores que presentan altos signos de FoMO utilizan con más frequecia las redes sociales, en medio de las clases o del trabajo y són incapaces de prestar toda la atención possible.',
                        fuente:'Fear of Missing Out (FoMO) and social media’s impact on daily-life and productivity at work: Do WhatsApp, Facebook, Instagram, and Snapchat Use Disorders mediate that association?',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S0306460320306171'}, 
                imagen: distraction
                },
                {id:5, title:'Las personas con alto nivel de FoMO són incapaces de aprobechar el tempo libre de manera creativa.', res:true,
                solution:{title:'El tiempo libre ha pasado a ser el tempo con el que estas con el móvil y en las redes sociales.',
                        text:'Por mala suerte, la gente ya no se aburre y el poco tiempo que lo hace, coge el móvil para no hacer-lo. La gente que presta altos niveles de FoMO, a menudo no tiene hobies.',
                        fuente:'Epidemiology and the consequences of fear of missing out (FOMO). The role of general practitioners in early diagnosis, treatment and prevention of FOMO in teenagers and young adults',
                        link:'https://www.researchgate.net/publication/342929360_Epidemiology_and_the_consequences_of_fear_of_missing_out_FOMO_The_role_of_general_practitioners_in_early_diagnosis_treatment_and_prevention_of_FOMO_in_teenagers_and_young_adults'}, 
                imagen: freetime
                },
            ]
        }
    },
    methods:{
        onClick (bool) {
            this.flipped = !this.flipped;
            if(this.frontcount !== 0){
                this.backcount++;
            }
            if (bool === this.items[this.frontcount].res){
                this.resolution = 'Correct';
                document.getElementById("title").style.color = "green";
            } else {
                this.resolution = 'Wrong';
                document.getElementById("title").style.color = "red";

            }
        },
        nextnew(){
            // this.show = !this.show;
            // setTimeout(() => this.show = !this.show, 300);
            this.flipped = !this.flipped;
            this.frontcount++;
        }
    },
    created(){
        this.items.sort(() => Math.random() - 0.5);
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
    background-color: darkslategray;
    color: white;
    border: solid 3px black;
}

.back > div {
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.Hello{
    background-color: teal;
}


</style>