<template>
    <div class="concept">
        <h1>Componente</h1>
        <router-link :to="{ name: 'Concept', params: {id:item} }"
            v-for="(item,index) of ConceptsArray" :key="index">
            <button>foto {{item}}</button>
        </router-link>

        <Foto />

        <p></p>
        <button @click="home">Home</button>
    </div>
</template>

<script>
import Foto from "../components/ConceptProblem";

export default {
    name: 'Conceptos',
    components: {
        Foto
    },
    data(){
        return{
            ConceptsArray: [1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        }
    }

}
</script>