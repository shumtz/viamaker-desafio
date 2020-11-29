<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/schools" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome da Escola"
            required
          ></v-text-field>
          <v-text-field v-model="cnpj" label="Cnpj" required></v-text-field>
          <v-btn>Cadastrar</v-btn>
          <v-btn @click="clear">Apagar</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Button from "@/components/buttons/button.vue";

export default {
  data: () => ({
    name: "",
    cnpj: ""
  }),
  name: "Students",
  methods: {
    clear() {
      (this.name = ""), (this.cnpj = "");
    }
  },
  components: {
    Button
  }
};
</script>
