<template>
  <body>
    <div class="home">
     <h1><span id="factOne"></span></h1>
     <h1><span id="factTwo"></span></h1>
      <h1 id="lie"></h1>
      <!-- <button v-on:click="getFacts()">Click Me</button> -->
    </div>
  </body>
</template>

<script>
import axios from 'axios';

  // document.getElementById('factOne').innerHTML = factOne;
  // document.getElementById('factTwo').innerHTML = factTwo;

export default {

  data() {
    return {
      factOne: "",
      factTwo: "",
    }
  },

  mounted() {

    getFacts();

    },
  }

  function getFacts() {
       axios.get('https://api.api-ninjas.com/v1/facts?limit=2', {
      headers: {'X-Api-Key': 'Mmp58EM5mhRBF+5Bh75fcA==VIfI25pl51Ng9oYh'}
    })
    .then((response) => {
      let result = response.data;
      let factOne = JSON.stringify(result[0])
      let factTwo = JSON.stringify(result[1])

      factOne = factOne.substring(9, factOne.length-2);
      factTwo = factTwo.substring(9, factTwo.length-2);
      
      document.getElementById('factOne').innerHTML = factOne;
      document.getElementById('factTwo').innerHTML = factTwo;

    })

    return {
      factOne,
      factTwo
   }
  }
</script>
