<template>
  <v-main>
    <v-container>
      <Back link="/schools" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome da Escola"
            required
          ></v-text-field>
          <v-text-field v-model="name" label="Cnpj" required></v-text-field>
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
    select: ""
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
