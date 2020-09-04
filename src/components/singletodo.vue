<template>
  <div>
    <li v-if="singletodoprops.todo === true" class="m-3"><b-icon icon="x-circle-fill" @click="deleteId(singletodoprops.id)"></b-icon>
      &nbsp;<b-icon icon="check2-circle" @click="update(singletodoprops.id)"></b-icon>
      {{ singletodoprops.name }} 
    </li>
    <li v-else class="m-3 line-through light"><b-icon icon="x-circle-fill" @click="deleteId(singletodoprops.id)">&nbsp;</b-icon>
      &nbsp;<b-icon icon="check-circle-fill" @click="update(singletodoprops.id)"></b-icon>
      {{ singletodoprops.name }} 
    </li>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["singletodoprops"],
  name: "singletodo",
  methods: {
    update: function(x) {
      let that = this;
      const url = `http://localhost:3000/todo/${x}`;
      let m = !this.singletodoprops.todo;
      axios.put(url, m).then(() => {
        console.log(x);
        this.$store.dispatch("PutData", x);
        console.log("aaa");
        console.log(this.singletodoprops.id);
        that.$emit("refresh-page");
      });
    },
    deleteId: function(id){
      this.$store.dispatch("DeleteData", id);
    }
  },
};
</script>
