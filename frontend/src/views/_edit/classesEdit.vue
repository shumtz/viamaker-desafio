<template>
  <v-main>
    <v-container>
      <Button color="var(--red)" name="Voltar" link="/classes" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome da turma"
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
import { mapState } from "vuex";

export default {
  data: () => ({
    name: "",
    select: ["Vuetify", "Programming"],
    items: ["Programming", "Design", "Vue", "Vuetify"]
  }),
  name: "Classes",
  methods: {
    clear() {
      this.name = "";
    }
  },
  mounted() {
    this.$store.dispatch("getTurmas");
  },
  computed: mapState(["classes"]),
  components: {
    Button
  }
};
</script>
