<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/" />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Turmas</h1>
          <Button color="var(--green)" name="Adicionar" link="/" />
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Turma</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="turma in turmas" :key="turma.id">
              <th>{{ turma.id }}</th>
              <th>{{ turma.nome }}</th>
              <Button
                color="var(--green)"
                name="Editar"
                :link="`/edit/classes/${turma.id}`"
              />
              <Button
                color="var(--green)"
                name="Ver"
                :link="`/view/${turma.id}`"
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
    this.$store.dispatch("getTurmas");
  },
  computed: mapState(["turmas"]),
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
