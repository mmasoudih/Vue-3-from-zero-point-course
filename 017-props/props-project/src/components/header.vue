<template>
  {{ $props }}
  <nav :style="{ height: localHeight, backgroundColor: background }">
    <ul>
      <li v-for="item in menuItem">
        {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // props: ["menuItem", "height", "background"],
  data(){
    return {
      localHeight: this.height
    }
  },
  methods:{
    changeHeight(){
      this.localHeight = '10px'
    }
  },
  mounted(){
    setTimeout(()=> {
      this.changeHeight()
      console.log(this.$props)
    }, 3000)
  },
  props: {
    menuItem: {
      type: Array
    },
    height:{
      type: Number,
      default: 50
    },
    background:{
      validator(value){
        return ["orange","lightgreen","yellow"].includes(value)
      }
    }

  },

  computed:{
    newHeight(){
      return this.height + 'px'
    }
  }
};
</script>

<style></style>
