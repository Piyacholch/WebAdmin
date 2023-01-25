<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
  </head>
  <Navbar />

  <div class="container-fluid">
    <div class="px-5">
      <h1>โปรไฟล์ผู้ใช้</h1>
      <hr />
    </div>

    <div class="content">
      <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="uid"
                v-model="uid"
                disabled
              />
              <label for="floatingInput">UID</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="uid"
                v-model="providerId"
                disabled
              />
              <label for="floatingInput">Provider</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
                disabled
              />
              <label for="floatingInput">อีเมล</label>
            </div>
      
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control icon"
          placeholder="dispassword"
          v-model="displayName"
        />
        <div class="invalid-feedback">Please choose a username.</div>
        <span class="material-symbols-outlined"> edit </span>
        <label for="floatingdisplayname">ชื่อผู้ใช้</label>
      </div>
      <!--ชื่อจริง - นามสกุล-->
      <!-- <div class="form-floating mb-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="ชื่อจริง - นามสกุล"
            id="validationCustomUsername"
            v-model="data.Name"
          />
          <span class="material-symbols-outlined"> edit </span>
          <label for="floatingphotoURL">ชื่อจริง - นามสกุล</label>
        </div>
      </div> -->
      <div class="form-floating mb-3">
        <div class="form-floating">
          <input
            type="tel"
            class="form-control"
            id="floatingphonenum"
            placeholder="0xxxxxxxxx"
            v-model="data.phonenum"
          />
          <span class="material-symbols-outlined"> edit </span>
          <label for="floatingphotoURL">เบอร์โทร</label>
        </div>
      </div>
      <div class="pt-3">
        <button type="button" class="btn btn-warning"
        @click="
                Addata(uid,providerId, email, displayName, data.phonenum),
                  UpdateUser()
              ">ตกลง</button>
        <button type="button" class="btn btn-danger" @click="cancel()">
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../../components/Navbar.vue";
import { getAuth, updateProfile } from "firebase/auth";
import axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      uid: "",
      providerId: "",
      email: "",
      // displayName: "",
      // photoURL: "",
      phonenum: "",
      data: [],
      
      displayName: null,
      photoURL: null,
    };
  },
  mounted() {
    this.getAdminByID();
  },
  methods: {
    getAdminByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL+`/AdminByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
          console.log(response.data);
        });
    },
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
          displayName: this.displayName,
          photoURL: this.photoURL,
        })
          .then(() => {
            console.log("อัปเดตสมบูรณ์");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    Addata(uid, providerId, email, displayName, phonenum) {
      //     if(displayName == displayName|| name == null ||phonenum==null ){
      //   alert("กรุณากรอกข้อมูลทุกช่อง!!");
      // }else if(displayName != displayName|| name != null || phonenum != null ){
      axios
        .post(
          process.env.VUE_APP_BACKEND_BASE_URL +
            "/insertadmindata/" +
            uid +
            "/" +
            providerId +
            "/" +
            email +
            "/" +
            displayName +
            "/" +
            phonenum
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/");
          // console.log(response.data)
        });
    },
  },
  created() {
    this.GetUser();
    this.UpdateUser();

    const auth = getAuth();
    const user = auth.currentUser;
    this.uid = user.uid;
    this.email = user.email;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.photoURL = user.photoURL;
    this.providerId = user.providerData[0].providerId;
  },
};
</script>

<style>
</style>