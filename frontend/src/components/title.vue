<template>
  <v-card-title class="title">
    <h1>{{ title }}</h1>
    <v-btn>Adicionar</v-btn>
  </v-card-title>
</template>

<script>
export default {
  name: "List",
  props: {
    title: String
  }
};
</script>

<style scoped>
.v-card {
  padding: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
}

tr {
  font-size: 40px;
}
</style>
