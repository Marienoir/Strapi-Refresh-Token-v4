<template>
  <div class="login">
    <input
      type="text"
      v-model="identifier"
      placeholder="Enter username/email"
    />
    <input type="password" v-model="password" placeholder="Enter password" />
    <div>
      <button @click="login">LOGIN</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      identifier: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const data = {
          identifier: this.identifier,
          password: this.password,
        };
        const options = {
          credentials: "include",
          withCredentials: true,
        };
        const res = await axios.post(
          "http://localhost:1337/api/auth/local",
          data,
          options
        );
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        if (res.status == 200) {
          this.$router.push("/dashboard");
        }
      } catch (err) {
        alert(err.code);
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  padding: 35px;
  background: #e8e8e8;
}
input {
  padding: 15px;
  margin: 5px 0;
  border-radius: 2px;
  border: 1px solid white;
}
button {
  background: #36865d;
  color: white;
  border: none;
  padding: 15px 25px;
  width: 100%;
  margin-top: 5px;
  font-weight: bolder;
}
button:hover {
  background: #4cab7a;
}
</style>
