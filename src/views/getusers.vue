<template>
  <Navbar/>
 <div>
  <userEmotion/>
 </div>
</template>

<script>
import axios from "axios";
import userEmotion from "../components/chart/userEmotion.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar, userEmotion},
 data() {
    return {
      data: [],
      id: "",
    };
 }, mounted() {
    this.getusers();
  },
  methods: {
    getusers() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/getusers").then((response) => {
        this.data = response.data;
        console.log(response);
      });
    },
}
}
</script>

<style>

</style>