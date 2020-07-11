<template>
  <div>
    <button @click="btnName='test'">{{ btnName }}</button>
    <hr>
    <child1 :btnName="btnName" @btnPress1="btnName=$event" :btnFunc="btnRefresh"></child1>
    <hr>
    <child2 :btnName="btnName" @btnPress2="btnName=$event" :btnFunc="btnRefresh"></child2>
  </div>

</template>

<script>

  import Child1 from "./Child1";
  import Child2 from "./Child2";

  export default {
    data: function () {
      return {
        btnName: "test"
      }
    },
    components: {
      child1: Child1,
      child2: Child2,
    },
    methods:{
      btnRefresh(str){
        this.btnName=str;
        console.log(this.btnName)
      }
    }
    // name: "child1"
  }
</script>

<style scoped>

</style>
