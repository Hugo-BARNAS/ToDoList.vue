<template>
  <div>
    <li v-if="singletodoprops.todo === true" class="m-3" @click="update">
      <b-icon icon="check2-circle"></b-icon> {{ singletodoprops.name }}
    </li>

    <li v-else class="m-3 line-through light" @click="update">
      <b-icon icon="check-circle-fill"></b-icon> {{ singletodoprops.name }}
    </li>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["singletodoprops"],
  name: "singletodo",
  methods: {
    update: function() {
      let that = this
      const url = `http://localhost:3000/todo/${this.singletodoprops.id}`;
      axios.put(url, { todo: !this.singletodoprops.todo }).then((response) => {
        console.log(response);
        that.$emit('refresh-page');
      });
    },
  },
};
</script>
