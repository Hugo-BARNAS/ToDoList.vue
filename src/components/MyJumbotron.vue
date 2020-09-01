<template>
  <div class="text-center">
    <b-jumbotron
      header="Todo List"
      lead="New Features we will have to done for this project"
    >
      <hr class="my-4" />
      <p>Easy to use, we created this web app just for you!</p>
      <sentence v-bind="{ ListD }"></sentence>
      <hr class="my-4" />
      <router-view></router-view>
    </b-jumbotron>
  </div>
</template>
<script>
import sentence from "./sentence";
export default {
  props: ["ListD"],
  components: {
    sentence,
  },
  methods: {
    test: function(id) {
      this.$emit("strike", id);
    },
    task2: function(y) {
      this.$emit("taskname2", y);
    },
  },
};
</script>
