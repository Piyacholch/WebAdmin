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

    <div class="box">
      <div class="box-item">
        <div class="img">
          <img :src="photoURL" alt="img-profile" class="photoURL mb-3" />
        </div>
        <div class="content">
          <p class="dispalyname">{{ displayName }}</p>
          <p class="email mb-5">{{ email }}</p>
          <div class="form">
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
                id="floatingdisplayname"
                placeholder="dispassword"
                v-model="displayName"
              />
              <span class="material-symbols-outlined"> edit </span>
              <label for="floatingdisplayname">ชื่อผู้ใช้</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingphotoURL"
                placeholder="photoUR"
                v-model="photoURL"
              />
              <span class="material-symbols-outlined"> edit </span>
              <label for="floatingphotoURL">URL รูปภาพ</label>
            </div>
          </div>

          <div class="pt-3">
            <button type="button" class="btn btn-warning " @click="UpdateUser()">
              ตกลง
            </button>
            <!-- <button type="button" class="btn btn-danger" @click="cancel()">
              ยกเลิก
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <h1>Hello</h1>

  <img :src="photoURL" alt="ไม่มี" class="photoURL" />
  <br />
  <span class="displayName">{{ displayName }}</span> <br />
  <span class="email">{{ email }}</span> <br /> -->

  <!--  Form ปลี่ยนชื่อ+รูป -->
  <!-- <form>
    <input type="text" v-model="displayName" id="inputChangeName" />

    <input type="text" v-model="ChangephotoURL" id="inputChangeName" />
    <button @click="UpdateUser()">submit</button>
  </form> -->

  <!-- Form ปลี่ยนชื่อ+รูป -->

  <!-- <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>ทดสอบเพิ่มข้อมูลลง Firestore</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >อีเมลแอดมิน</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="ชื่อจริง - นามสกุล"
          v-model="email"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อจริง</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="ชื่อจริง - นามสกุล"
          v-model="data.Name"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">ที่อยู่</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="ที่อยู่"
          v-model="data.Address"
        />
      </div>
    </div>
  </div>
  <div class="footer d-flex justify-content-end mt-4">
    <button
      type="button"
      class="btn btn-warning mx-2"
      @click="submit(email, data.Name, data.Address)"
    >
      ตกลง
    </button>
    <button type="button" class="btn btn-danger" @click="reset()">
      ยกเลิก
    </button>
  </div> -->
</template>
<script>
import Navbar from "../components/Navbar.vue";
import { getAuth, updateProfile } from "firebase/auth";
import axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      email: "",
      Name: "",
      Address: "",
      data: [],

      displayName: null,
      photoURL: null,
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
    cancel() {
      this.displayName = "";
      this.photoURL = "";
    },
    submit(email, Name, Address) {
      axios
        .post(
          "http://localhost:5050/insertadmin/" +
            email +
            "/" +
            Name +
            "/" +
            Address
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/");
        });
    },
    reset() {
      this.data.Name = "";
      this.data.Address = "";
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
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #f5f5f5;
  height: 50rem;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}
.box {
  background: #ffffff;
  border-radius: 15px;
  width: 60%;
  margin: auto;
}
.box-item {
  width: 90%;
  padding: 20px;
  margin: auto;
}

.photoURL {
  width: 100px;
  height: 100px;
  border: 3px solid rgb(0, 195, 0);
  border-radius: 50%;
}
.dispalyname {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}
.email {
  font-size: 16px;
  text-align: center;
  color: gray;
}
.content{
  width: 100%;
}
.form-control {
  width: 90%;
  border: 2px solid #99ccff;
  border-radius: 15px;
  /* margin: auto; */
}
.form-floating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
}
.btn{
  width: 90%;
  border-radius: 15px;
}
</style>