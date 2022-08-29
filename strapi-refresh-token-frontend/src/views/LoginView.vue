<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>

<style scoped>
.container {
  margin: 50px auto;
  width: 400px;
}
</style>
