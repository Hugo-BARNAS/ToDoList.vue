<template>
  <div>
    <b-input-group prepend="NewTask" class="mt-5 width mx-auto">
      <b-form-input id="add-task" type="text" v-model="addTask"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-secondary" @click="task"><b-icon icon="file-plus"></b-icon>Add</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
export default {
  name: "add",
  data() {
      return {
           addTask:"",
        }
  },
  methods:{
      task:function(){
          console.log(this.addTask);
        
          this.$emit('task',this.addTask)
      }
  }


};

</script>
