<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h6>Token Expired!</h6>
      <p>You are unable to view your dashboard.</p>
      <p>Do you want to refresh your token?</p>
      <button id="no-button" @click="handleNoButton">No</button>
      <button id="yes-button" @click="getRefreshToken">Yes</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    handleNoButton() {
      this.$router.push("/");
    },
    async getRefreshToken() {
      try {
        const data = {
          refreshToken: localStorage.getItem("token"),
        };
        const options = {
          "Access-Control-Allow-Credentials": true,
          withCredentials: true,
        };
        const a = await axios.post(
          "http://localhost:1337/api/token/refresh",
          data,
          options
        );
        console.log(a.data);
        this.$emit("close-modal");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 200px;
  width: 400px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
}

button {
  width: 100px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
}

#yes-button {
  background-color: #4cab7a;
}

#no-button {
  background-color: #ba0000da;
}
</style>
