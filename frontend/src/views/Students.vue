<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Alunos</h1>
          <Button color="var(--green)" name="Adicionar" link="/" />
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Aluno</th>
              <th>Escola</th>
              <th>Turma</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="aluno in alunos" :key="aluno.id">
              <th>{{ aluno.id }}</th>
              <th>{{ aluno.nome }}</th>
              <th>{{ aluno.escola.nome }}</th>
              <th>{{ aluno.turma.nome }}</th>
              <Button
                color="var(--green)"
                name="Editar"
                :link="`/edit/students/${aluno.id}`"
              />
              <Button
                color="var(--green)"
                name="Ver"
                :link="`/view/${aluno.id}`"
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
  name: "Students",
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
