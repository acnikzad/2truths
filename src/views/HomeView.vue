<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import axios from 'axios';

// var limit = 1;

// axios.get('https://api.api-ninjas.com/v1/facts?limit=' + limit,).then(response => {console.log(response.data);
// })
// .catch(error => console.error(error));

// mounted(); {
//   this.getFacts();
// };

// methods:{
//   getFacts() {
//    axios.get(`https://api.api-ninjas.com/v1/facts?limit=2`,
//     {headers: key: "Mmp58EM5mhRBF+5Bh75fcA==VIfI25pl51Ng9oYh"
//     }).then(response => {
//       console.log (response);
//     };
//   }







  //  ({
  //   method: "GET",
  //   url: "https://api.api-ninjas.com/v1/facts?limit=2",
  //   headers:{
  //     key: "Mmp58EM5mhRBF+5Bh75fcA==VIfI25pl51Ng9oYh"}
  //     ).then (response => {
  //     console.log (response);
  //   };
  //   });
  // }


// Vue.ajax({
//     method: 'GET',
    // url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

export default {

  mounted() {
    axios.get('https://api.api-ninjas.com/v1/facts?limit=2', {
      headers: {'X-Api-Key': 'Mmp58EM5mhRBF+5Bh75fcA==VIfI25pl51Ng9oYh'}
    })
    .then((response) => {
      console.log(response)
    })
  },

  methods:{

    // var config = {
    //   headers: {
    //     'key': 'https://api.api-ninjas.com/v1/facts?limit=2'
    //   }
    // }
    // getFacts() {
    //  axios.get(`https://api.api-ninjas.com/v1/facts?limit=2`, config).then(response => {
    //     console.log (response);
    //   };
    }


  }
</script>
