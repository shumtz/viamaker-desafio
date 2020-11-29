<template>
  <v-main>
    <v-container>
      <Back link="/students" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome do Aluno"
            required
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            label="Turma"
            data-vv-name="turma"
            required
          ></v-select>
          <v-select
            v-model="select"
            :items="items"
            label="Escola"
            data-vv-name="Escola"
            required
          >
          </v-select>
          <v-btn>Cadastrar</v-btn>
          <v-btn @click="clear">Apagar</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Back from "@/components/buttons/back.vue";

export default {
  data: () => ({
    name: "",
    select: "",
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  name: "Students",
  methods: {
    clear() {
      (this.name = ""), (this.select = ""), (this.items = []);
    }
  },
  components: {
    Back
  }
};
</script>

<style scoped>
.v-card {
  padding: 20px;
}
</style>
