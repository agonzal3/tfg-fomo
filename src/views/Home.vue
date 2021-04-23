<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Presentatión</h1>
      <h3>Queres saber como puedes salvar el futuro?</h3>
      <h4>Antes de jugar escoje un idoma <br/> para poder entrar de lleno!!</h4>

      <b-button to="/play">Español</b-button>
      <b-button>English</b-button>
    </div>

    
</template>

<!-- <script>
 // @ is an alias to /src
 import HelloWorld from '@/components/HelloWorld.vue'

 export default {
   name: 'Home',
   components: {
    HelloWorld
  }
}
 </script> -->

<style scoped>
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  /* border: 3px solid green; */
  transform: translate(-50%, -50%);
  width: 40%;
  /* height: 75%; */
  text-align: center;
}

.home h1 {
  margin: 20px;
}
.home h3 {
  margin: 30px;
}
.home button {
  margin: 25px;
}
</style>
