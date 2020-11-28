<template>
  <v-content>
    <img src="@/assets/viamaker-branco.png" />
    <h3>Dashboard</h3>
    <v-container class="center">
      <router-link to="/schools">
        <Button icon="mdi-school" text="Escolas" />
      </router-link>
      <router-link to="/students">
        <Button icon="mdi-account-supervisor" text="Alunos" />
      </router-link>
      <router-link to="/classes">
        <Button icon="mdi-home" text="Turmas" />
      </router-link>
    </v-container>
  </v-content>
</template>

<script>
import Button from "@/components/button.vue";

export default {
  name: "Home",
  components: {
    Button
  }
};
</script>

<style scoped>
img {
  display: block;
  margin-top: 05%;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
h3 {
  display: none;
}
.center {
  height: 70vh;
}
.v-btn {
  font-size: 20px;
  margin: 20px;
  padding: 30px 50px !important;
  color: #fff;
  background: var(--green) !important;
}

@media (max-width: 650px) {
  img {
    display: none;
  }
  h3 {
    display: block;
    margin: 10vh;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
  .center {
    flex-direction: column;
    height: 55vh;
  }
}
</style>
