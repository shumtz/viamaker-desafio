<template>
  <v-main>
    <v-container>
      <Back />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Escolas</h1>
          <v-btn>Adicionar</v-btn>
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Escola</th>
              <th>Cnpj</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="escola in escolas" :key="escola.id">
              <th>{{ escola.id }}</th>
              <th>{{ escola.nome }}</th>
              <th>{{ escola.cnpj }}</th>
              <router-link :to="`/edit/schools/${escola.id}`"
                ><v-btn>Editar</v-btn></router-link
              >
              <router-link :to="`/view/${escola.id}`">
                <v-btn>Ver</v-btn>
              </router-link>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Back from "@/components/back.vue";
import { mapState } from "vuex";

export default {
  name: "Schools",
  mounted() {
    this.$store.dispatch("getEscolas");
  },
  computed: mapState(["escolas"]),
  components: {
    Back
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
