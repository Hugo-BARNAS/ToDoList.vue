<template>
  <div class="text-center">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="http://localhost:8080">Todolist</b-navbar-brand>
        <b-nav-item router-link v-for="routes in links" v-bind:key="routes.id" :to="routes.text">{{routes.text}}</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      links: [
        { id: 0, text: "new", page: "./AddForm.vue" },
        { id: 1, text: "todo", page: "./list.vue" },
        { id: 2, text: "done", page: "./list.vue" },
        { id: 3, text: "list", page: "./list.vue" },
      ],
    };
  },
};
</script>

<style></style>
