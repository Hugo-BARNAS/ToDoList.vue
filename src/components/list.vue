<template>
  <div>
    <ul>
      <singletodo
        v-for="elem in listedData"
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
  computed: {
    listedData(){
      let a = this.$store.getters.ListedData(this.whatToDisplay);
      console.log(a);
      return a;
    }
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
