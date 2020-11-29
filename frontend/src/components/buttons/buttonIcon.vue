<template>
  <v-btn class="ma-2 white--text">
    {{ text }}
    <v-icon dark>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    icon: String
  }
};
</script>
