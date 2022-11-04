<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>จัดการแอดมิน</h1>
      <hr />
    </div>

    <div class="row px-5">
      <div class="col-sm-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search.."
            aria-describedby="button-addon2"
            v-model="search"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            ค้นหา
          </button>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-danger delete"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        เพิ่ม
      </button>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content border border-warning border-5">
          <div class="modal-header border-0">
            <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
            <button
              type="button"
              class="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center fs-4 fw-bold">เพิ่มอีเมล</div>

          <input
            type="email"
            class="form-control mb-3"
            placeholder="Email address"
            v-model="email"
          />
          <div class="mx-auto">
            <button type="submit" value="sentemail" @click="sendEmail()">
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row px-5">
    <div class="grid">
      <div class="item">
        <div class="content">
          <p>11111</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <p>22222</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <p>33333</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <p>44444</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://gler-yglt.firebaseapp.com",
  // This must be true.
  handleCodeInApp: true,
//   iOS: {
//     bundleId: "com.example.ios",
//   },
//   android: {
//     packageName: "com.example.android",
//     installApp: true,
//     minimumVersion: "12",
//   },
  dynamicLinkDomain: "https://gler-yglt.firebaseapp.com",
};

export default {
  components: { Navbar },
  data() {
    return {
      email: "",
    };
  },

  methods: {
    sendEmail() {
      const email = this.email;
      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.

          console.log(email);
          window.localStorage.setItem("emailForSignIn", email);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ...
        });
    },
  },
  created() {
    this.sendEmail();
  },
};
</script>

<style scoped>
.Box {
  background-color: #f5f5f5;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}
.input-group {
  width: 50%;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 14px;
  row-gap: 20px;
}

.content {
  color: #242424;
  background-color: #f25fff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
}
</style>