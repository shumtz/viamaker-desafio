<template>
  <v-main>
    <v-container>
      <Back link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Alunos</h1>
          <v-btn color="var(--green)">Adicionar</v-btn>
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Aluno</th>
              <th>Turma</th>
              <th>Escola</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="aluno in alunos" :key="aluno.id">
              <th>{{ aluno.id }}</th>
              <th>{{ aluno.nome }}</th>
              <th>{{ aluno.escola.nome }}</th>
              <th>{{ aluno.turma.nome }}</th>
              <router-link :to="`/edit/students/${aluno.id}`"
                ><v-btn color="var(--green)">Editar</v-btn></router-link
              >
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
  name: "Students",
  mounted() {
    this.$store.dispatch("getAlunos");
  },
  computed: mapState(["alunos"]),
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
  > a
  > button {
  width: 100%;
}
tr {
  font-size: 40px;
}
</style>
