<template>
  <v-main>
    <v-container>
      <Back />
      <v-card class="mx-auto" tile>
        <v-card-title class="title">
          <h1>Turmas</h1>
          <v-btn>Adicionar</v-btn>
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
              <router-link :to="`/edit/classes/${turma.id}`"
                ><v-btn>Editar</v-btn></router-link
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
  name: "Schools",
  mounted() {
    this.$store.dispatch("getTurmas");
  },
  computed: mapState(["turmas"]),
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
