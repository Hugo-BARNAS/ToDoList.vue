<template>
  <div>
    <MyHeader/>
    <MyJumbotron v-on:strike="test" v-bind:ListD="listdata" @taskname2="task3"/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyJumbotron from "./components/MyJumbotron";
export default {
  components: { //components => enfants associés aux fichiers
    MyJumbotron,
    MyHeader
  },
  data() {
    return {
      listdata: [
        { id: 0, name: "Ecrire le sujet", todo: true },
        { id: 1, name: "Faire le sujet", todo: true },
        { id: 2, name: "Vendre le sujet", todo: true },
        { id: 3, name: "Partir en vacances", todo: true },
      ],
    };
  },
  methods: {
    test: function(id) {
      console.log(id);
      this.listdata.forEach((element) => {
        if (element.id === id) {
          if (element.todo === true) {
            element.todo = false;
          } else if (element.todo === false) {
            element.todo = true;
          }
        }
      });
    },
    task3: function(x){
      this.listdata.push({id:this.listdata.length,name:x,todo:true})
    },
  },
};
</script>
