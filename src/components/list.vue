<template>
  <div>
    <ul>
      <singletodo
        v-for="elem in results"
        :key="elem.id"
        @strike="test1"
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
    if (this.whatToDisplay == "all") {
      axios.get(url).then((response) => {
        this.results = response.data;
        console.log(this.results);
      });
    }
  },
  methods: {
    test1: function(id) {
      this.$emit("strike", id);
    },
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
    task3: function(x) {
      this.listdata.push({ id: this.listdata.length, name: x, todo: true });
    },
  },
};
</script>
