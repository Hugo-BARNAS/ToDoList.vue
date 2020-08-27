<template>
  <div>
    <ul>
    <singletodo v-for="truc in ListD" :key="truc.id" @strike="test" :choco="truc"/><!-- v-for="truc in ListD" v-bind:key="truc.id" v-on:strike="test" v-bind:choco="truc"-->
    </ul>
  </div>
</template>
<script>
import singletodo from "./singletodo";
import "bootstrap/dist/css/bootstrap.css";  
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  props: ["ListD"],
  name: "list",
  components: {
    singletodo,
  },
  methods:{
    test:function(id){
      this.$emit("strike",id)
    },
  }
};
</script>
