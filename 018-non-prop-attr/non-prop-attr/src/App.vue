<template>
  <text-box class="x-large" @input="showText" placeholder="this is a placeholder"></text-box>
  <my-layout class="text-red" @click="showLog"></my-layout>
</template>

<script>
import TextBox from './components/TextBox.vue'
import MyLayout from './components/MyLayout.vue'
export default {
  components:{
    TextBox,
    MyLayout
  },
  methods:{
    showText(event){
      console.log(event.target.value)
    },
    showLog(){
      console.log('you clicked here ')
    }
  }
}
</script>

<style>
.x-large{
  padding: 15px !important;
}
.text-red{
  color: red;
}
</style>