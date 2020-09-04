<template>
  <div>
    <b-input-group prepend="NewTask" class="mt-5 width mx-auto">
      <b-form-input id="add-task" type="text" v-model="addTask"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-secondary" @click="task"
          ><b-icon icon="file-plus"></b-icon>Add</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "add",
  data() {
    return {
      addTask: "",
    };
  },
  methods: {
    task: function() {
      const url = "http://localhost:3000/todo";
      axios.get(url).then((response) => {
        this.results = response.data.length;
        let date = new Date();
        let dateString = date.toString();
        let monObjet = {
          name: this.addTask,
          id: this.results,
          createdAt: dateString,
          todo: true,
        };
        axios.post(url, monObjet);
        this.$store.dispatch("PushData", monObjet);
        console.log(this.results);
      });
    },
  },
};
</script>
