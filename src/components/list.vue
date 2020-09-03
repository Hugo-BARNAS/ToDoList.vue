<template>
  <div>
    <ul>
      <singletodo
        v-for="elem in results"
        :key="elem.id"
        @refresh-page="refresh"
        :singletodoprops="elem"
      />
    </ul>
  </div>
</template>
<script>
import singletodo from "./singletodo";
import axios from "axios";
export default {
  name: "list",
  props: { whatToDisplay: String },


  data() {
    return {
      results: [],
    };
  },
  components: {
    singletodo,
  },
  mounted() {
    const url = "http://localhost:3000/todo";
    axios.get(url).then((response) => {
      if (this.whatToDisplay == "todo") {
        this.results = response.data.filter((todo) => todo.todo);
      } else if (this.whatToDisplay == "done") {
        this.results = response.data.filter((todo) => !todo.todo);
      } else {
        this.results = response.data;
      }
    });
  },
  methods: {
    refresh: function() {
      const url = "http://localhost:3000/todo";
      if (this.whatToDisplay == "all") {
        axios.get(url).then((response) => {
          this.results = response.data;
        });
      }
    },
  },
};
</script>
