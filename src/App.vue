<template>
  <div>
    <MyHeader/>
    <MyJumbotron/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyJumbotron from "./components/MyJumbotron";
import axios from "axios";
export default {
  components: { //components => enfants associés aux fichiers
    MyJumbotron,
    MyHeader
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData(){
      let y = axios.get("http://localhost:3000/todo").then((response) =>{
        this.$store.dispatch("listData", response.data)
         console.log(y)
      })
     
    },

    task3: function(x){
      this.listdata.push({id:this.listdata.length,name:x,todo:true})
    },
  },
};
</script>
