<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/students" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome do Aluno"
            required
          ></v-text-field>
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
    Button
  }
};
</script>
