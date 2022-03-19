<script>
import headerVue from "./components/header.vue";
export default {
  data() {
    return {
      menu: [
        { title: "صفحه اصلی", path: "/" },
        { title: "درباره ما", path: "/about" },
      ],
    };
  },
  components: {
    headerVue
  }
};
</script>

<template>

  <header-vue :menu-item="menu" background="lightgreen" :height="100"></header-vue>

</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
