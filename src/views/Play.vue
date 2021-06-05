<template>
  <div class="play">
    <!-- <b-container fluid class="bv-example-row">
      <b-row> -->
    <div id="controles" class="controls">
      <h2 id="subtitle">Niveles</h2>
      <div class="square">
          <div class="subsquare">
            <transition name="component-fade2">
              <b-img  v-if="pasos > 7" center :src="require('../assets/Steps/book1.png')" alt="Center image"></b-img>
            </transition>
          </div>
          <div class="subsquare">
            <transition name="component-fade2">
              <b-img v-if="pasos > 14" center :src="require('../assets/Steps/detective.png')" alt="Center image"></b-img>
            </transition>
          </div>
          <div class="subsquare">
            <transition name="component-fade2">
              <b-img v-if="pasos > 17" center :src="require('../assets/Steps/danger.png')" alt="Center image"></b-img>
            </transition>
          </div>
      </div>
    </div>
    <div id="contenido" class="content">
      
      <!-- <Concept1 /> -->
      <!-- <Concept1 v-if="steps === 1" /> -->
      <transition name="component-fade" mode="out-in">
        <Textinteract v-if="pasos === 0" v-bind:text="text" v-bind:responcebutton="responcebutton" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 1" v-bind:text="text1" v-bind:responcebutton="responcebutton1" v-on:enlarge-text="onEnlargeText"/>
        <Concept1 v-if="pasos === 2" v-on:enlarge-text="onEnlargeText"/>
        <Concept2 v-if="pasos === 3" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 4" v-bind:text="text2" v-bind:responcebutton="responcebutton2" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 5" v-bind:text="text3" v-bind:responcebutton="responcebutton3" v-on:enlarge-text="onEnlargeText"/>
        <Concept3 v-if="pasos === 6" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 7" :number=0 @enlarge-text="onEnlargeText"/>
        <Reasontext v-if="pasos === 8" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 9" v-bind:text="text4" v-bind:responcebutton="responcebutton4" v-on:enlarge-text="onEnlargeText"/>
        <Reason1 v-if="pasos === 10" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 11" v-bind:text="text5" v-bind:responcebutton="responcebutton5" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 12" v-bind:text="text6" v-bind:responcebutton="responcebutton6" v-on:enlarge-text="onEnlargeText"/>
        <Reason2 v-if="pasos === 13" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 14" :number=1 @enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 15" v-bind:text="text7" v-bind:responcebutton="responcebutton7" v-on:enlarge-text="onEnlargeText"/>
        <Consequence v-if="pasos === 16" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 17" :number=2 @enlarge-text="onEnlargeText"/>
        <!-- <Reasontext v-if="pasos === 0" v-on:enlarge-text="onEnlargeText"/> -->
        <!-- <b-button @click="start()">Start</b-button> -->

        <!-- <Compensation v-if="pasos === 1" @enlarge-text="onEnlargeText"/> -->
        

      </transition>

      <!-- <HelloWorld v-if="steps === 2" /> -->
      <!-- <transition name="component-fade" mode="out-in">
        <component v-bind:is="view" v-on:enlarge-text="onEnlargeText"></component>
      </transition> -->

    </div>
      <!-- </b-row>
      </b-container>   -->
  </div>
</template>

<script>
import Textinteract from "../components/Textinteraction";
import Concept1 from "../components/Concept1";
import Concept2 from "../components/Concept2";
import Concept3 from "../components/Concept3";
import Reason1 from "../components/Reasons1";
import Reason2 from "../components/Reasons2";
import Consequence from "../components/Consequences1";
import Reasontext from "../components/ReasonsText";
import Compensation from "../components/Compensation";


export default {
    name: 'Play',
    data(){
        return {
          pasos: 0,
          view:'Concept1',
          show:false,
          count: 0,
          // text: ['Hola, mi nombre es Alex y vengo del futuro. En el 2043 la sociedad se ha vuelto totalmente dependiente del móvil, antisocial, infeliz y no parece que la cosa vaya a mejorar. \n Estamos a un paso del declive de la civilización. Y vosotros, los adolescentes del pasado y futuros trabajadores, emprendedores, empresarios, investigadores y adultos sois los únicos que podéis cambiar el destino de la humanidad. Para que no cometáis los mismos errores que nosotros y podamos tener una vida llena de aventuras, emociones, amigos y de satisfacción. \n Necesitamos tu ayuda para salvar la humanidad y aquí es donde empieza el cambio.',
          //       '¡Te necesitamos para salvar-nos! ¿Ahora o nunca?'],
          text:['helo','bye'],
          responcebutton:[{button1:"Yo, estáis seguros de que no queréis a otra persona?", button2:"Vamos a ello"},
                          {button2:"Ahora!"}],
          text1:['Des de hace 10 años, se está investigando y escribiendo acerca de la FoMO (Fear of Missing Out). Que hoy en día, en 2021 aún no se sabe si es un síntoma, una adición tecnológica o solo un efecto secundario de la vida tecnológica.'],
          responcebutton1:[{button2:"Ponme en contexto."}],
          text2:['Y el móvil y las redes sociales lo que hacen cada vez es potenciar más este sentimiento.'],
          responcebutton2:[{button2:'Pero que tiene que ver esto con salvar la humanidad'}],
          text3:['El mundo se ha vuelto un lugar más oscuro y en parte viene a raíz de estas situaciones, que parecen una tontería, pero no lo son porque es el día a día de muchos jóvenes. Y esto problema que lo vamos a ir desengrasando paso a paso. \n Para saber en que punto estamos te reto a acertar la siguiente pregnta, en menos de tres intentos'],
          responcebutton3:[{button2:'Acepto el reto'}],
          text4:['Entramos en el juego de las redes sociales para satisfacer nuestras necesidades. ¿Pero realmente se satisfacen?','Según grandes investigaciones, para estar satisfecho se tienen que cumplir 3 necesidades psicológicas: \n Competencia, Autonomía y Pertenencia \n ¿Sabrías asociar el significado de cada una de ellas?'],
          responcebutton4:[{button1:'Vamos a descubrir-lo'},{button2:'Vamos a ver-lo'}],
          text5:['¿Ahora que sabemos que se necesita para estar satisfecho también podemos deducir cuando no lo estamos, verdad?','Si, no estaremos satisfechos, siempre y cuando no se cumplan, no seas Competente, Autónomo y tengas el sentimiento de pertenencia.'],
          responcebutton5:[{button1:'No estoy seguro de seguir-te', button2:'Claro que si'}, {button1:'Ahora si, que lo entiendo'}],
          text6:['Sabiendo esto vamos a ver si a partir de situaciones reales, puedes deducir si son causas o signos de FoMO. \n En los próximos 60 segundos tendrás que decidir si las siguientes afirmaciones/situaciones pueden ser posibles simptomas de la FoMO o no!'],
          responcebutton6:[{button2:"Let's go!"}],
          text7:['Ya tienes la idea, las causas y ahora nos falta la última parte y la más importante, las consecuencias. A continuación saldrán noticias relacionadas con la FoMO y tendrás que escoger si son falsas o verdaderas en función de tu criterio. Después de cada apartado saldrá la respuesta. ¿Estás listo?',
          'A la que hagas el primero lo vas a entender en seguida.'],
          responcebutton7:[{button1:'No acabo de entender-lo.',button2:'Por su puesto'},{button2:'De acuerdo vamos alla!'}],
          startTypers: false,
          actualtext: ''
        }
    },
    components: {
        Concept1,
        Concept2,
        Concept3,
        Reason1,
        Reason2,
        Consequence,
        Textinteract,
        Reasontext,
        Compensation
    },
    methods:{
        onEnlargeText() {
          this.pasos++;
          // this.view = this.xx[this.steps].name;
        },
        start() {
          document.getElementById("controles").hidden;
            this.$confetti.start({
                particles: [
                    {
                    type: 'rect',
                    dropRate: 40,
                    size: 15,
                    },
                    {
                    type: 'circle',
                    dropRate: 40,
                    size: 15,
                    },
                ],
                windSpeedMax: 3,
                particlesPerFrame: 4
            });

            setTimeout(() => this.$confetti.stop(), 400);
        },
    },
    computed:{
      
    },
    created(){
      this.xx = Object.values(this.$options.components)
      console.log(this.xx);
      // console.log(this.formatText(this.text, 0, 22));

    },
    updated(){
      console.log('update');
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
  transition: opacity 1s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.component-fade2-enter-active{
  transition: all 2s ease;
}

.component-fade2-enter{
  transform: translateZ(10px);
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