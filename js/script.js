'use strict';

const { createApp } = Vue

createApp({
  data(){
    return{
      objsList : [
        {
          text : 'Cucinare la pentola',
          done : false 
        },
        {
          text : 'Lavara i muri',
          done : false 
        },
        {
          text : 'Aspirare il frigo',
          done : false 
        },
        {
          text : 'Stirare i tapetti',
          done : false 
        },
        {
          text : 'Suonare il campanello dei vicini',
          done : false 
        },
        {
          text : 'Cambiare la lettiera al cocodrilo',
          done : false 
        },
        {
          text : 'Sistemare gli armadi nei vestiti',
          done : false 
        },
      ]
    }
  }
}).mount('#app')
