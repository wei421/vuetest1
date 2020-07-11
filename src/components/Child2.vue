<template>
  <button @click="btnBus">{{ btnName }}</button>
</template>

<script>
  import {eventBus} from '../main'

  export default {
    // name: "child1"
    data: function () {
      return {
        btnName: "haha"
      };
    },
    props: {
      // btnName: {
      //   default: "child2"
      // },
      btnFunc: Function,
    },
    methods: {
      btnPress() {
        this.btnName = "hehe";
        this.$emit("btnPress2", this.btnName);
      },
      btnBus() {
        this.btnName = "hehe"
        eventBus.$emit("eventCommit", this.btnName)
      },
    },
    created() {
      eventBus.$on("eventCommit",(btnNewName)=>{
        this.btnName = btnNewName;
        console.log("btn2 listened!");
      });
    }
  }
</script>

<style scoped>

</style>
