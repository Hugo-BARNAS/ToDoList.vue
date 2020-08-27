<template>
  <div class="text-center">
    <b-jumbotron header="Todo List" lead="New Features we will have to done for this project">
      <hr class="my-4" />
      <p>Easy to use, we created this web app just for you!</p>
      <sentence v-bind="{ ListD }"></sentence>
      <hr class="my-4" />
      <list @strike="test" v-bind="{ ListD }" />
      </b-jumbotron>
      <add v-on:task="task2"></add>
  </div>
</template>

<script>
import list from "./list";
import add from "./AddForm";
import sentence from "./sentence";
export default {
  props: ["ListD"],
  components: {
    list,
    add,
    sentence,
  },
  methods: {
    test: function(id) {
      this.$emit("strike", id);
    },
    task2: function(y){
      this.$emit("taskname2", y)
    }
  },
};
</script>
