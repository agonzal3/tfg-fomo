<template>
    <div class="home" :class="$mq">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Presentación 
        <!-- <br/> <span style="color:blue;">Presentation</span> -->
      </h1>
      <h3>Quieres saber como puedes salvar el futuro?  
        <!-- <span style="color:blue;"> Do you want to know how you can save the future?</span> -->
      </h3>
      <h4>Antes de jugar escoje un idoma 
        <!-- <br/> <span style="color:blue;"> Before play chose a language </span> -->
      </h4>

      <b-button><router-link id="link" to="/play">Empezar el juego</router-link></b-button>
      <!-- <b-button>English</b-button> -->
     
    </div>

    
</template>

 <script>
 // @ is an alias to /src

 export default {
   name: 'Home',
   
}
 </script> 


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
.home.mobil {
  width: 80%;

}
.home.laptop {
  width: 40%;

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
#link {
  color: white;
  text-decoration: none;
}
</style>
