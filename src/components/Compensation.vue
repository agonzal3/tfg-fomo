<template>
    <div id="position">
        <transition name="component-fade">
            <div v-if="show" class ="border1">
                <h2>Has superado el {{items[number].number}} nivel</h2>
                <h4>Aqui tienes tu insignia</h4>

                <p class="insignia">{{items[number].insigne}}</p>
                <transition appear name="bounce">
                    <b-img center :src="items[number].image" alt="Center image"></b-img>
                </transition>
                <p></p>
                <b-button @click="resetClick()">Next</b-button>
            </div>
        </transition>
        
    </div>
</template>

<script>
import concept from "../assets/Steps/book1.png";
import reasons from "../assets/Steps/detective.png";
import consequences from "../assets/Steps/danger.png";


export default {
    name:"Compensation",
    props: {
        number: Number,
    },
    data(){
        return{
            counter: 0,
            show:true,
            items: [{image:concept, number: '1r', insigne: 'Que es la FoMO?'},
                    {image:reasons, number: '2r', insigne: 'Cual es su origen?'},
                    {image:consequences, number: '3r', insigne: 'Y sus consequencias?'}
            ],

        }
    },
    methods: {
        start() {
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

            setTimeout(() => this.$confetti.stop(), 500);
        },
    
        resetClick() {
            this.show = false;
            this.counter++;
            setTimeout(() => {
                document.getElementById("controles").style.display = "block";
                let contenido = document.getElementById("contenido").style;
                contenido.background = "#FAFAFA";
                if(this.$mq === 'tablet'){
                    contenido.height = "calc(100vh - 150px)";
                }
                if(this.$mq === 'laptop'){
                    contenido.width = "calc(100% - 300px)";
                }
                if(this.$mq === 'mobil'){
                    contenido.marginTop = '150px';
                    contenido.height = 'calc(100vh - 150px)';
                }
            },1000)
            setTimeout(() => this.$emit('enlarge-text'),1100)
        },
        changeShape(){
            document.getElementById("controles").style.display = "none";
            let contenido = document.getElementById("contenido").style;
            contenido.background = "#6699ff";
            contenido.width = "100%";
            if(this.$mq === 'tablet'){contenido.height = '100vh';}
            if(this.$mq === 'mobil'){
                contenido.marginTop = '0px';
                contenido.height = '100vh';
            }
        }
    },
    mounted(){
        console.log(this.counter);
        this.changeShape();
        this.start();
    }
}
</script>

<style scoped>

.border1{
    border: 3px solid white;
    padding: 10px;
    /* height: 450px; */
    width: 600px;
    max-width: 90%;
    text-align: center;
    margin: auto;
    margin-top: calc(50vh - 225px);
}

img{
    width: 200px;
}

.component-fade-leave-active {
  animation: bounce-in 2s;
}
.component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    animation: bounce-in .9s reverse;
}

.bounce-enter-active, .bounce-leave-active {
  animation: bounce-in 2s;
}
.bounce-leave-active, .bounce-leave-to {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.insignia{
    color: white;
    font-size: 30px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

</style>