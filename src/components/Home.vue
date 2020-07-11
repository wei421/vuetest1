<template>
  <div>
    <!--    <p>Server Status: {{ status }}</p>-->
    <!--    <hr>-->
    <!--    <button @click="changeStatus">Change Status</button>-->
    <button @click="changeBtnName">Change Btn Name</button>
    <my-cmp2 v-for="(i,index) in 5" :key="index"></my-cmp2>
    <Server-status v-for="(i,index) in 5" :key="index+5" :tailfix="tailfix1" :tailfix1="tailfix1"></Server-status>

  </div>
</template>

<script>
  import ServerStatus from "./ServerStatus";

  export default {
    // data: function () {
    //   return {
    //     status: "Critical",
    //     statusBool: true,
    //   };
    // },
    // methods: {
    //   changeStatus() {
    //     this.statusBool = !this.statusBool;
    //     this.status = this.statusBool === true ? "Critical" : "Normal";
    //   },
    // }
    data:
      function () {
        return {
          tailfix1: ""
        };
      }

    , methods: {
      changeBtnName() {
        this.tailfix1="呵呵";
      }
    },
    components: {
      // "my-cmp2": ServerStatus,
      myCmp2: ServerStatus,
      ServerStatus,
    }
  }
</script>

<style>

</style>
