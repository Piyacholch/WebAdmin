<template>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossorigin="anonymous"
    />
  </head>
  <div class="all">
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form action="#" @submit.prevent="login">
          <h1 class="mb-3">เข้าสู่ระบบ</h1>

          <div class="row">
            <div class="mb-3 mt-3">
              <input
                type="email"
                placeholder="Email"
                class="mb-3"
                v-model="login_form.email"
              />
              <input
                type="password"
                placeholder="Password"
                v-model="login_form.password"
              />
            </div>

            <div v-show="error" class="error">{{ this.errorMsg }}</div>
            <a href="/forgotpassword" class="a_fg_text">ลืมรหัสผ่าน?</a>

            <div>
              <button type="submit" class="btn btn-warning mb-3"  @click="$router.push(`/profile/${item.id}`)">
                เข้าสู่ระบบ
              </button>
            </div>
            <p class="mb-2 or">หรือ</p>
            <div id="GooglerSingIn" v-if="!isSignedIn" class="google mb-2">
              <button
                @click="handleSignInGoogle"
                type="button"
                class="btn btn-primary btn-sm btn-google"
              >
                <i class="fab fa-google-plus-g" @click="handleSignInGoogle"></i>
                LogIn with Google
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>สวัสดี, ยินดีต้อนรับ!</h1>
            <p>กรอกข้อมูลของคุณแล้วมาเริ่มต้นไปดวยกันเถอะ!</p>
            <a href="/register"><button class="ghost">สมัครสมาชิก</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { useStore } from "vuex";
import firebase from "../firebase";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  // getRedirectResult
} from "firebase/auth";

firebase;

const provider = new GoogleAuthProvider();
const auth = getAuth();

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
  data() {
    return {
      user: "",
    };
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // const user = result.user;

          console.log(result.user.displayName);

          this.user = result.user.displayName;
          this.isSignedIn = true;
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
  
  <style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
* {
  font-family: "Kanit", sans-serif;
}

.all {
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ffbd59;
  background-color: #ffbd59;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
}
.btn {
  width: 100%;
}

#container {
  margin-top: 3%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ffbd59;
  background: -webkit-linear-gradient(to right, #ffbd59, #ffb545);
  background: linear-gradient(to right, #ffbd59, #ffb545);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
@media (max-width: 720px) {
  body {
    padding: 0px;
  }
}
</style>





<!-- <template>
	<main class="login">
		<section class="forms">

			<form class="register" @submit.prevent="register">
				<h2>Register</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="register_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Register" />
			</form>

			<form class="login" @submit.prevent="login">
				<h2>Login</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="login_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Login" />
			</form>

		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value);
		}

		return {
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style>
.forms {
	display: flex;
	min-height: 100vh;
}

form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}

form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
}

h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}

form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style> -->