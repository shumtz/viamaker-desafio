<template>
  <v-main>
    <v-container>
      <Back link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Escolas</h1>
          <v-btn color="var(--green)">Adicionar</v-btn>
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
                ><v-btn color="var(--green)">Editar</v-btn></router-link
              >
              <router-link :to="`/view/${escola.id}`">
                <v-btn color="var(--green)">Ver</v-btn>
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

button {
  color: #fff !important;
}

body
  > main
  > div
  > div
  > div
  > div.v-data-table.theme--light
  > div
  > table
  > tbody
  > tr
  > a:nth-child(4)
  > button {
  width: 50%;
}

body
  > main
  > div
  > div
  > div
  > div.v-data-table.theme--light
  > div
  > table
  > tbody
  > tr
  > a:nth-child(5)
  > button {
  width: 50%;
}
tr {
  font-size: 40px;
}
</style>
