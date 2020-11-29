<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Escola</h1>
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th>Alunos</th>
              <th>Turmas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="aluno in alunos" :key="aluno.id">
              <th>{{ aluno.nome }}</th>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/buttons/button.vue";

export default {
  name: "View",
  mounted() {
    this.$store.dispatch("getAlunos");
  },
  computed: mapState(["alunos"]),
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

tr {
  font-size: 40px;
}
</style>
