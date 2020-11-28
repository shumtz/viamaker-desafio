<template>
  <router-link :to="link">
    <v-btn color="var(--red)" class="ma-2 white--text">Pagina Principal</v-btn>
  </router-link>
</template>

<script>
export default {
  name: "Back",
  props: {
    link: String
  }
};
</script>

<style scoped>
button {
  color: #fff !important;
  margin: 20px 0px;
}
</style>
