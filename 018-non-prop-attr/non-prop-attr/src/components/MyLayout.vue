<template>
  <header>header tag</header>
  <main v-bind="$attrs">main tag</main>
  <footer> footer tag</footer>
</template>

<script>
export default {
  created(){
    console.log(this.$attrs)
  }

}
</script>

<style>

</style>