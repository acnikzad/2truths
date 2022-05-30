<template>
  <body>
    <div class="home">
      <ul>
      <li><button><span id="factOne"></span></button></li>
      <li><button><span id="factTwo"></span></button></li>
      <li><button id="lie"><span id="lie"></span></button></li>
      </ul>
      <button v-on:click="getFacts()">Click Me</button>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

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
      let x = 0;
      let result = response.data;
      let factOne = JSON.stringify(result[0])
      let factTwo = JSON.stringify(result[1])
      let fakeFacts = [
        "Thomas Edison, the inventor of the refrigerator was afraid of the rats",
        "Mercury has 16 moons",
        "Reptiles perspire, and have 4 sweat glands",
        "The planet Neptune spins opposite to the other planets in the solar system",
        "Thomas Edison was offered the presidency of Palestine in 1937, but he declined",
        "The New York Public Library, located in New York City, is the largest library in the world",
        "Men smile more than women do",
       ]

       let lie = fakeFacts[x]
       x = Math.floor(Math.random()*fakeFacts.length)
       console.log(x)

      factOne = factOne.substring(9, factOne.length-2);
      factTwo = factTwo.substring(9, factTwo.length-2);

      
      document.getElementById('factOne').innerHTML = factOne;
      document.getElementById('factTwo').innerHTML = factTwo;
      document.getElementById('lie').innerHTML = lie;

    })

    return {
      factOne,
      factTwo
   }
  }
</script>
