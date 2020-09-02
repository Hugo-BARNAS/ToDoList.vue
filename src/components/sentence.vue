<template>
  <div>
    
    <!-- <p class="danger" v-if="sentence() === 'A'">
      <b-icon icon="emoji-angry"></b-icon>&nbsp;It's time to start working you
      have {{this.ListD.length}} tasks to do !&nbsp; <b-icon icon="emoji-angry"></b-icon>
    </p>
    <p class="ok" v-else-if="sentence() === 'D'">
      <b-icon icon="emoji-sunglasses"></b-icon>&nbsp;Congratulation !! You
      finished all the tasks&nbsp;<b-icon icon="emoji-sunglasses"></b-icon>
    </p>
    <p class="prudence" v-else-if="sentence() === 'B'">
      <b-icon icon="emoji-frown"></b-icon>&nbsp;Continue that way and you will
      finish soon, still have {{this.x()}}/{{this.ListD.length}} tasks.&nbsp;<b-icon
        icon="emoji-frown"
      ></b-icon>
    </p>
    <p class="good" v-else-if="sentence() === 'C'">
      <b-icon icon="emoji-smile"></b-icon>&nbsp;Good !! You made halk or more
      {{this.x()}}/{{this.ListD.length}} tasks&nbsp;<b-icon icon="emoji-smile"></b-icon>
    </p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sentence",
  props: [  ],
  methods: {
    x: function() {
      let countTrue = this.ListD.filter((element) => element.todo === true)
        .length;
      return countTrue;
    },

    done: function() {
      const url = "http://localhost:3000/todo";
      if (this.whatToDisplay == "all") {
        axios.get(url, { todo: false}).then((response) => {
        console.log(response);
        });
      }
    },
    // sentence: function() {
    //   let countTrue = this.ListD.filter((element) => element.todo === true)
    //     .length;

    //   if (countTrue === this.ListD.length) {
    //     return "A";
    //   }
    //   if (countTrue === 0) {
    //     return "D";
    //   }
    //   if (countTrue < (1 / 3) * this.ListD.length) {
    //     return "C";
    //   }
    //   if (countTrue > 3 / 4) {
    //     return "B";
    //   }
    // },
  },
};
</script>
