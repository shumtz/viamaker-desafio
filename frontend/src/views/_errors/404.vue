<template>
  <v-container class="center">
    <h1>Opa! Você tem certeza que está indo para o lugar certo?</h1>
    <Back link="/" />
  </v-container>
</template>

<script>
import Back from "@/components/buttons/button.vue";

export default {
  name: "404",
  components: {
    Back
  }
};
</script>

<style scoped>
.center {
  flex-direction: column;
  color: #fff;
  height: 100vh;
}
</style>
