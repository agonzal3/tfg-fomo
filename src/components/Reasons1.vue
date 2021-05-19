<template>
    <div id="position">
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
        
        <div class='dragTotal'>
            <div v-for='item in items' :key='item.id' >
                <div class='drop-zone'
                    :id="item.title"
                    @dragover.prevent
                    @drop.prevent="drop"></div>
                {{item.def}}
            </div>
        </div>
        
        <b-button @click="reset">Validate</b-button>
    </div>
</template>

<script>
export default {
    name:'Reason1',
    data(){
        return{
            intro: 'Las redes sociales son muy populares entre los jóvenes, porque nosotros los humanos somos animales …',
            items:[
                {id:0, title: 'Competencia', def:'Capacidad de participar y aportar en el mundo.', list:1},
                {id:1, title: 'Autonomía', def:'Ser capaz de valersé por uno mismo, tener independencia personal.', list:1},
                {id:2, title: 'Pertenencia', def:'Sentimiento de formar parte de un colectivo', list:1},
            ]
        }
    },
    computed: {
        
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

            setTimeout(()=>{
                
            });
        },
        reset(){
            const bar = document.getElementById('origin');
            if(bar.childNodes.length === 0){
                this.items.forEach((key,index)=>{
                    const title = document.getElementById(key.title);
                    console.log(title.childNodes[0]);
                    if(title.id === title.textContent){
                        title.style.backgroundColor = 'green';
                        title.childNodes[0].style.backgroundColor = 'green';
                        title.childNodes[0].draggable = false;
                    }else{
                        title.style.backgroundColor = '#eee';
                        title.childNodes[0].style.backgroundColor = '#eee';
                        bar.appendChild(title.childNodes[0]);
                    }
                });
            }
           
        }

    }
}
</script>

<!-- BaseTimer.vue -->
<style scoped>
.drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    min-height: 20px;
  }

  .drag-el {
    background-color: #eee;
    margin: 10px;
    padding: 5px;
    width: 33%;
  }
  .dragTotal {
      background-color:dimgray;
      padding: 5px;
  }

  .flexbox{
      display: flex;
      margin:10px;
      background-color: firebrick;
      height: 60px;
      
  }
</style>