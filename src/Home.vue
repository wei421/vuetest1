<template>
  <div>
    <!--    <p>Server Status: {{ status }}</p>-->
    <!--    <hr>-->
    <!--    <button @click="changeStatus">Change Status</button>-->
    <my-cmp2 v-for="(i,index) in 5" :key="index"></my-cmp2>
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
    components: {
      "my-cmp2": ServerStatus,
    }
  }
</script>

<style>

</style>
