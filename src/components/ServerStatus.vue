<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status {{ tailfix }}-{{ tailfix1 }}</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        status: "Critical",
        statusBool: true,
      };
    },
    methods: {
      changeStatus() {
        this.statusBool = !this.statusBool;
        this.status = this.statusBool === true ? "Critical" : "Normal";
      },
    },
    props: {
      tailfix: {
        type: String,
        default: "666",
      },
      tailfix1: {
        type: String,
        default: "777",
      },
    },
  }
</script>

<style>

</style>
