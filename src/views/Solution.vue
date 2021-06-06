<template>
    <div>
        <div :style="[actualPage !== 0 ? {'margin-top':'70px'}:{}]" class='solution'>
            <div v-if="actualPage === 1">
                <h2>Como evitar o reducir la FoMO?</h2>
                <h5>Estos 5 pasos pueden ayudar a superar la FoMO:</h5>
                <ol>
                    <li>Comprtir contenido, publicar porque quieres, no porque lo necestes
                        <p>Preguntate quiero publicar esta foto, porque?</p></li>
                    <li>Publicar y passar pagina
                        <p>No estar pendiente ni tener expectativas de los likes, comentarios o reacciónes que pueden haver.</p>
                    </li>
                    <li>Saber cuando parar
                        <p>En el momento en el que ya no estes disfrutando, cerrar la aplicación (Instagram, Facebook, TikTok, ...) y hacer otra cosa.</p>
                    </li>
                    <li>Usar las redes sociales en tiempos muertos
                        <p>Por ejempo: en el tren, esperando a un amigo, los 10 minutos antes de cenar, ...</p>
                    </li>
                    <li>De vez en cuando, eliminar las aplicaciones
                        <p>Desconectar de las Redes Sociales y del mòbil durante un dia, dos, tres o incluso una semana.</p>
                    </li>
                </ol>
                <p class="reference">Reference: <a href="https://socialspacemag.org/overcome-fomo-five-easy-steps-one-social-media-platform-at-a-time" target="_blank">Overcome FOMO: Five Easy Steps, One Social Media Platform at a Time</a> </p>
            </div>
            <div v-if="actualPage === 0">
                <h2>Como evitar o reducir la FoMO?</h2>
                <h5>Opinión personal después de este trabajo:</h5>
                <ul>
                    <li>Desactivar las notificaciones <img src="../assets/icons/sound-off.png"> de Instagram, Facebook y TikTok</li>
                    <li>Limitar el tiempo de las Redes Sociales <img src="../assets/icons/actiondash-logo.png"></li>
                    <li>Ser consciente del tiempo que pasas con el mòbil:
                        <p>Los mobiles de <img src="../assets/icons/apple.png"> ya llevan un registro integrado y para los de <img src="../assets/icons/android.png"> hay muchas aplicaciones que registran toda tu actividad. 
                        Yo recomiendo: <a href="https://play.google.com/store/apps/details?id=com.actiondash.playstore" target="_blank">ActionDash</a>.</p>
                    </li>
                    <li>Tener hobies o pasatiempos, cuando estas en casa. <span style="font-weight: bold;">Que no tengan que ver con la Tecnologia.</span> 
                        <b-container>
                            <b-row>
                                <b-col md="6" class="examples">Leer libros, comics, ...<img src="../assets/icons/libro.png"></b-col>
                                <b-col md="6" class="examples">Dibujar o pintar <img src="../assets/icons/painting.png"></b-col>
                                <b-col md="6" class="examples">Escribir un diario <img src="../assets/icons/diary.png"></b-col>
                                <b-col md="6" class="examples">Hacer deporte <img src="../assets/icons/yoga.png"></b-col>
                            </b-row>
                        </b-container>
                    </li>
                    <li>Participar en las tareas del hogar <img src="../assets/icons/cooking.png"></li>
                    <li>Apagar el mòbil <img src="../assets/icons/turn-off.png"> un par de horas, a partir de las 9 de la noche o hasta un dia entero</li>
                </ul>
            </div>
            <div v-if="actualPage === 2">
                <h5>Si has llegado hasta aqui significa que has terminado todo el "juego".</h5>

                <p>Para terminar me gustaria robarle 10 minutos más respondiendo el siguiente questionario.</p>

                <p>Si por otra parte quiere volver a jugar ... <br>
                <b-button class="home" @click="home">Tornar a jugar</b-button></p> 

                <p style="font-size: 15px;margin-top: 17%;">Este juego es un Trabajo de Fin de Grado del departamento de Tecnologias Interactivas centradas en la Educacción, en la Universitat Pompeu Fabra. Agradezco enormemente su participación y esepro que haya sido de su interes i agrado.</p>

            </div>
        </div>

        <img v-if="actualPage === 2" class="logoupf" src="../assets/icons/UPF.png">
        <b-container fluid class="pages">
            <b-row>
                <b-col>
                    <b-button v-if="actualPage>0" @click="actualPage--">{{previous}}</b-button>
                </b-col>
                <b-col>
                    <b-button v-if="actualPage<2" @click="actualPage++">{{next}}</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Foto from "../components/ConceptProblem";

export default {
    name: 'Solution',
    components: {
        Foto
    },
    data(){
        return{
            ConceptsArray: [1,2,3],
            previous:'< Anterior',
            next:'Siguiente >',
            actualPage:0,
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
.solution{
    /* position: absolute;
    left: 50%;
    top: 45%;
    /* border: 3px solid green; 
    transform: translate(-50%, -50%);
    width: 75%; */
    /* height: 75%; */
    /* text-align: center; */
    margin: auto;
    width: 60%;
    padding: 10px;
    min-height: 80vh;
    
}

div > p{
    margin-top:7%;
}

h5{
    margin-top: 15px;
}
li {
    margin: 5px;
}
 li > p {
     font-size: 14px;
 }

 li > img {
     height: 50px;
 }

 .examples{
     padding: 10px;
 }

 div > img {
     height: 55px;
 }

 .pages {
     text-align: center;
     position:absolute;
     bottom: 5%;
 }

 .reference{
     font-size: 14px;
     margin-top: 60px;
 }
 .logoupf{
     position: absolute;
     left: 45%;
     bottom: 8%;
    /* width: 50%; */
 }

 .home{
     width: 200px;
     margin-top: 40px;
     margin-left: calc(50% - 100px);
 }
</style>