<template>
  <div>
    <li
      v-if="choco.todo === true"
      class="m-3"
      @click="$emit('strike', choco.id)"
    >
      <b-icon icon="check2-circle"></b-icon> {{ choco.name }}
    </li>
    <li
      v-else
      class="m-3 line-through light"
      @click="$emit('strike', choco.id)"
    >
      <b-icon icon="check-circle-fill"></b-icon> {{ choco.name }}
    </li>
  </div>
</template>
<script>
export default {
  props: ["choco"],
  name: "singletodo",
};
</script>
