<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Escolas</h1>
          <Button color="var(--green)" name="Adicionar" link="/" />
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
              <Button
                color="var(--green)"
                name="Editar"
                :link="`/edit/schools/${escola.id}`"
              />
              <Button
                color="var(--green)"
                name="Ver"
                :link="`/view/${escola.id}`"
              />
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Button from "@/components/buttons/button.vue";
import { mapState } from "vuex";

export default {
  name: "Schools",
  mounted() {
    this.$store.dispatch("getEscolas");
  },
  computed: mapState(["escolas"]),
  components: {
    Button
  }
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
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
