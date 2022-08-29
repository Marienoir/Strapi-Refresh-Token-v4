<template>
  <div class="home">
    <Dashboard />
    <Modal v-if="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import Modal from "@/components/Modal.vue";
import jwt_decode from "jwt-decode";
export default {
  name: "dashboard",
  components: {
    Dashboard,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    const jwtPayload = jwt_decode(localStorage.getItem("token"));
    let currentDate = new Date();

    if (jwtPayload.exp * 1000 < currentDate.getTime()) {
      this.showModal = true;
    }
  },
};
</script>
<style scoped>
.home {
  padding: 20px;
}
</style>
