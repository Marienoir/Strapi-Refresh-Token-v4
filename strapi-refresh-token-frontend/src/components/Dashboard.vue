<template>
  <div>
    <h1>User Dashboard</h1>
    <ul>
      <li><b>Username:</b> {{ getUser.username }}</li>
      <li><b>Email:</b> {{ getUser.email }}</li>
      <li><b>Is User Confirmed:</b> {{ getUser.confirmed }}</li>
      <li><b>Is User Blocked: </b>{{ getUser.blocked }}</li>
      <li><b>Provider:</b> {{ getUser.provider }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    getUser() {
      let jwtPayload = JSON.parse(localStorage.getItem("user"));
      return jwtPayload;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none !important;
  padding: 0;
}
</style>
