
const { createApp } = Vue

createApp({
  data(){
    return{

      objsList : [

      ]
    };
  },

  methods: {
    taskDone(index){
      this.objsList[index].done = !this.objsList[index].done
    },

    taskDelete(index){
      this.objsList.splice(index , 1)
    },

    addTask(){
      let newTask = {
        text : this.pp,
        done : false,
      }

      this.objsList.push(newTask)

      this.pp = ''
    }
  },
}).mount('#app')
