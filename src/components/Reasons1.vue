<template>
    <div id="position" :class="$mq">
        <h4>Arrastra los conecptos con sus definiciones pertinentes</h4>
        <div id="origin"
            class="flexbox"
            @dragover.prevent
            @drop.prevent="drop">
            <div class='drag-el'
                v-for='item in items' 
                :key='item.id'
                :id="'card-'+item.id"
                :draggable=true
                @dragstart="dragStart"
                @dragover.stop>{{item.title}}</div>
        </div>
        
        <div>
            <div v-for='item in items' :key='item.id'>
                <div class='dragTotal' style="display: flex">
                    <div class='drop-zone'
                        :id="item.title"
                        @dragover.prevent
                        @drop.prevent="drop">
                    </div>
                    {{item.def}}
                </div>
            </div>
        </div>
        
        <b-button @click="reset">Confirmar</b-button>

        <p v-if="responce === 'notcomplete'" style="color:red">Tienes que colocarlas todas!</p>
        <p v-if="responce === 'tryagain'" style="color:orange">Intentalo de nuevo!</p>
        <p v-if="responce === 'correct'" style="color:green">Well done!</p>
    </div>
</template>

<script>
export default {
    name:'Reason1',
    data(){
        return{
            intro: 'Las redes sociales son muy populares entre los jóvenes, porque nosotros los humanos somos animales …',
            responce: '',
            items:[
                {id:0, title: 'Competencia', def:'Capacidad de participar y aportar en el mundo.', list:1},
                {id:1, title: 'Autonomía', def:'Ser capaz de valersé por uno mismo, tener independencia personal.', list:1},
                {id:2, title: 'Pertenencia', def:'Sentimiento de formar parte de un colectivo', list:1},
            ]
        }
    },
    mounted(){
        this.items.sort(() => Math.random() - 0.5);
    },
    methods:{
        drop(event){
            const card_id = event.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id);
            
            card.style.dysplay = "block";

            event.target.appendChild(card);

        },
        dragStart(event){
            const target = event.target;

            event.dataTransfer.setData('card_id',target.id);

        },
        reset(){
            const bar = document.getElementById('origin');
            this.responce = 'nothing';
            if(bar.childNodes.length === 0){
                this.items.forEach((key,index)=>{
                    const title = document.getElementById(key.title);
                    if(title.id === title.textContent){
                        title.style.backgroundColor = '#44C850';
                        title.childNodes[0].style.backgroundColor = '#44C850';
                        title.childNodes[0].draggable = false;
                    }else{
                        title.style.backgroundColor = '#eee';
                        title.childNodes[0].style.backgroundColor = '#eee';
                        bar.appendChild(title.childNodes[0]);
                        this.responce = 'tryagain';
                    }
                });
                if(this.responce === 'nothing') {
                    this.responce = 'correct';
                    setTimeout(() => this.$emit('enlarge-text'), 1000);
                }
            } else{
                this.responce = 'notcomplete';
            }
           
        }

    }
}
</script>

<!-- BaseTimer.vue -->
<style scoped>
.drop-zone {
    background-color: #eee;
    margin-right: 10px;
    min-height: inherit;
    min-width: 200px;
    color: black;
  }

  .drag-el {
    background-color: #eee;
    margin: 10px;
    padding: 5px;
    width: 33%;
  }
  .dragTotal {
      border-radius: 10px;
      background-color:dimgray;
      padding: 15px;
      margin-top: 15px;
      color: white;
  }

  .flexbox{
      border-radius: 10px;
      display: flex;
      margin:10px;
      background-color: #FFA525;
      height: 60px;
  }
  button{
      margin-top: 30px;
  }
</style>