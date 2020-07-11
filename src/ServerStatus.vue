<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
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
    }
  }
</script>

<style>

</style>
