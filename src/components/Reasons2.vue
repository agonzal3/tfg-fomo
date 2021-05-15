<template>
    <div style="display: flex">
        <b-button variant="danger" class="bigbutton">Sintoma de la FoMO</b-button>
        <div class="center">
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <g class="circle">
                    <circle class="elypse" cx="50" cy="25" r="20"/>
                    <text x="50%" y="50%" text-anchor="middle" fill="black" dy=".3em">{{formattedTimeLeft}}</text>
                    <path
                    class="path-remaining"
                    d="
                        M 20, 20
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                    "></path>
                </g>
            </svg>
            
            <p>Hello</p>
        </div>
        <b-button variant="success" class="bigbutton" style="align-items: flex-end">NO Sintoma de la FoMO</b-button>
    </div>
</template>

<script>

export default {
    name:'Reason2',
    data(){
        return{
            timeLimit: 20,
            timePassed: 0,
            timerInterval: null,

            intro: 'Las redes sociales son muy populares entre los jóvenes, porque nosotros los humanos somos animales …',
            items:[
                {id:0, title: 'Competencia', def:'Capacidad de participar y aportar en el mundo.', list:1},
                {id:1, title: 'Autonomía', def:'Ser capaz de valersé por uno mismo, tener independencia personal.', list:1},
                {id:2, title: 'Pertenencia', def:'Sentimiento de formar parte de un colectivo', list:1},
            ]
        }
    },
    computed: {
        timeLeft() {
            return this.timeLimit - this.timePassed
        },
        formattedTimeLeft() {
            const timeLeft = this.timeLeft
            // The largest round integer less than or equal to the result of time divided being by 60.
            const minutes = Math.floor(timeLeft / 60)
            // Seconds are the remainder of the time divided by 60 (modulus operator)
            let seconds = timeLeft % 60
            // If the value of seconds is less than 10, then display seconds with a leading zero
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            // The output in MM:SS format
            return `${minutes}:${seconds}`
        }
    },
    methods:{
        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },
    mounted() {
        this.startTimer();
    },
}
</script>

<!-- BaseTimer.vue -->
<style scoped>

.bigbutton{
    position: relative;
    width: 30%;
    height:99.3vh;
    font-size: 30px;
    margin:-8px;
}
.center{
    margin:8px;
    width: 63%;
    height: auto;
    /* Center horontaly */
    position: relative;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    /* Center Vertically */
    /* top: 50%; */
    /* -ms-transform: translateY(-50%);
    transform: translateY(50%); */
}
.circle{
    fill: none;
    stroke: none;
}

.elypse{
    stroke-width: 4px;
    stroke:grey;
}

.path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 4px;
    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;
    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;
    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;
    /* Allows the ring to change color when the color value updates */
    stroke: rgb(65, 184, 131);
  }
  svg {
    /* transform: scaleX(-1); */
  }
</style>