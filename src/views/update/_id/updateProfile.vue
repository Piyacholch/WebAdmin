<template>
    <Navbar />
  <form>
      <input type="text" v-model="ChangedisplayName" id="inputChangeName" />

      <input type="text" v-model="ChangephotoURL" id="inputChangeName" />
      <button @click="UpdateUser()">submit</button>
    </form>
</template>

<script>
import Navbar from "../../../components/Navbar.vue";
import { getAuth, updateProfile, } from "firebase/auth";
export default {
  components: { Navbar },
  data() {
    return {
      email: "",
      Name: "",
      Address: "",
      data: [],

      ChangedisplayName: null,
      ChangephotoURL: null,
    };
  },
  methods: {
    GetUser() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        console.log(user);
      }
    },
    UpdateUser() {
      const auth = getAuth();
      const user = auth.currentUser;
     
      if (user !== null) {
        updateProfile(auth.currentUser, {
          displayName: this.ChangedisplayName,
          photoURL: this.ChangephotoURL,
        })
          .then(() => {
            console.log("อัปเดตสมบูรณ์");
          })
          .catch((error) => {
            console.log(error);
          });

      }
    },
  }
}
</script>

<style>

</style>