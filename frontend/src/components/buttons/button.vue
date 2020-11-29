<template>
  <router-link :to="link">
    <v-btn :color="color" class="ma-2 white--text">{{ name }}</v-btn>
  </router-link>
</template>

<script>
export default {
  name: "Back",
  props: {
    name: String,
    color: String,
    link: String
  }
};
</script>
