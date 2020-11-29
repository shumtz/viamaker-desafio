<template>
  <v-main>
    <v-container>
      <Back link="/classes" />
      <v-card class="mx-auto" tile>
        <v-form>
          <v-text-field
            v-model="name"
            label="Nome da turma"
            required
          ></v-text-field>
          <v-combobox
            dense
            multiple
            small-chips
            v-model="select"
            :items="items"
            label="Combobox"
            outlined
          ></v-combobox>
          <v-btn>Cadastrar</v-btn>
          <v-btn @click="clear">Apagar</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import Back from "@/components/buttons/back.vue";
import { mapState } from "vuex";

export default {
  data: () => ({
    name: "",
    select: ["Vuetify", "Programming"],
    items: ["Programming", "Design", "Vue", "Vuetify"]
  }),
  name: "Classes",
  mounted() {
    this.$store.dispatch("getTurmas");
  },
  computed: mapState(["classes"]),
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
