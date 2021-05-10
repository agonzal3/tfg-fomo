<template>
    <div id="position">
        <p>{{intro}}</p>
    </div>
</template>

<script>

export default {
    name:'Reason1',
    data(){
        return{
            intro: 'Las redes sociales son muy populares entre los jóvenes, porque nosotros los humanos somos animales …'
        }
    },
    mounted(){
        console.log(this.intro.length)
    }
}
</script>

<style>

</style>