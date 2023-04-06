<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
  </head>

  <div class="container-fluid">
    <form action="">
        <p>Alich.ch@kkumail.com</p>
      <input type="text" v-model="email" />
      <button  @click="Verify(email)">ยืนยัน</button>
    </form>
  </div>
</template>
  <script>
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export default {
  components: {},
  data() {
    return {
      email: "",
    };
  },

  methods: {
    Verify(email) {

      const actionCodeSettings = {
       
        url: "https://gler2-wqhk.firebaseapp.com/__/auth/action?mode=action&oobCode=code",
    
        handleCodeInApp: true,
        iOS: {
          bundleId: "com.example.ios",
        },
        android: {
          packageName: "com.example.android",
          installApp: true,
          minimumVersion: "12",
        },
        dynamicLinkDomain: "noreply@gler2-wqhk.firebaseapp.com",
      };

      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          console.log(email, actionCodeSettings);
          window.localStorage.setItem(email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    },
  },
  created() {
    this.Verify();
  },

};
</script>
  
  <style scoped>
.container-fluid {
  background-color: #ffff;
  height: auto;
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
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
}
.box-item {
  width: 90%;
  padding: 20px;
  margin: auto;
}

.photoURL {
  width: 150px;
  height: 150px;
  border: 3px solid #ffbd59;
  border-radius: 50%;
}
.dispalyname {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}
.email {
  font-size: 18px;
  text-align: center;
  color: gray;
}
.content {
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
.btn {
  width: 90%;
  border-radius: 15px;
}
.img {
  width: 80%;
  margin: auto;
  text-align: center;
}
/* .photoURL mb-3{
    width: 80%;
    margin: auto;
  } */
.form-floating {
  width: 100%;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .container-fluid {
    background-color: #fff8e1;
    height: 75rem;
  }
}
@media screen and (max-width: 767px) {
  .box {
    width: 100%;
  }
}
</style>