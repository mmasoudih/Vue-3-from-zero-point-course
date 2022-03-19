<template>
  <div>
    <input type="text" class="bg-green" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false

}
</script>

<style scoped>
input{
  padding: 10px;
  outline: none;
  border: 2px solid #2c2c2c;
}
.bg-green{
  background: lightgreen;
}
</style>