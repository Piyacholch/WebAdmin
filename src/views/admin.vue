<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>จัดการแอดมิน</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="search">
      <div class="row row-menu">
        <div class="col-lg-9 search-res p-0">
          <!-- <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search.."
              aria-describedby="button-addon2"
              v-model="search"
            />
          </div> -->
        </div>
        <div class="col-lg-3 col-flex">
          <button
            type="button"
            class="btn btn-success"
            id="insertbtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            เพิ่มแอดมิน
          </button>
        </div>
      </div>
    </div>

    <div class="grid px-5 mt-3">
      <div class="item" v-for="(item, index) in loaddata" :key="index">
        <div class="content px-3">
          <!-- <div class="img">
            <img :src="item.photoURL" alt="img-profile" class="profile-img" />
          </div> -->
          <div class="content1">
            <p class="displayname">{{ item.displayName }}</p>
            <p class="email">{{ item.email }}</p>
            <p class="phone">{{ item.phonenum }}</p>
            <button type="button" class="btn btn-danger delete">ลบ</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content border border-warning border-5">
          <div class="modal-header border-0 px-2 pt-0 pb-0 mt-2">
            <button
              type="button"
              class="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center fs-4 fw-bold px-0">เพิ่มอีเมล</div>

          <input
            type="email"
            class="form-control input-email"
            placeholder="Email address"
            v-model="email"
          />
          <div class="modal-footer border-0">
            <div class="row">
              <div class="col-6 confirm-1">
                <button
                  type="button"
                  class="btn btn-warning confirm"
                  data-bs-dismiss="modal"
                  @click="sendEmail()"
                >
                  ยืนยัน
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-secondary cancel"
                  data-bs-dismiss="modal"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ loaddata.displayName }}
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-admin.vue";
import axios from "axios";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  url: "http://localhost:8080/login",
  handleCodeInApp: true,
};

export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      email: "",
      displayName: "",
      phonenum: "",
      photoURL: "",
      loaddata: [],
    };
  },
  mounted() {
    this.getadmin();
  },
  methods: {
    getadmin() {
      axios.get("http://localhost:5050/Admin").then((response) => {
        this.loaddata = response.data;
        // console.log(response);
      });
    },
    sendEmail() {
      const email = this.email;
      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          console.log(email);
          localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  // computed: {
  //   filtersearch() {
  //     return this.loaddata.filter((loaddata) => {
  //       return loaddata.displayName.toLowerCase().includes(this.search.toLowerCase());
  //     });
  //   },
  // },
  created() {
    this.sendEmail();
  },
};
</script>

<style scoped>
.Box {
  background-color: #fff8e1;
  height: 50rem;
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
  background-color: #ffffff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
}
.row-menu {
  width: 90%;
  margin: auto;
}
.bnt-insert {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 30px;
}
.form-control {
  border: 5px solid #ffbd59;
  border-radius: 15px;
}
.insert {
  width: 40%;
}
.profile-img {
  width: 100px;
  height: 100px;
  border: 3px solid #ffbd59;
  border-radius: 50%;
}
.displayname {
  margin-top: 10px;
  color: #ffbd59;
  font-size: 18px;
  font-weight: bold;
}
.email {
  font-size: 0.7rem;
  font-weight: bold;
  font-style: italic;
  color: #c2c2c2;
}
.phone {
  font-size: 0.7rem;
  font-weight: bold;
  font-style: italic;
  color: #c2c2c2;
  margin-top: -10px;
}
.col-flex {
  justify-content: end;
}
.delete {
  width: 80%;
}
.input-email {
  width: 80%;
  margin: auto;
}
.col-6 {
  padding: 5px;
}
.confirm-1 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.confirm {
  width: 85% !important;
}
.cancel {
  width: 85% !important;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #fff8e1;
    height: 80rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 13px;
    row-gap: 20px;
  }
  .content {
    width: 70%;
    margin: auto;
  }
  .col-flex{
    text-align: end;
  }
  #insertbtn{
    width: 50%;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 767px) {
  
  .Box {
    background-color: #fff8e1;
    height: auto;
  }
  .search-res {
    padding: 0px;
    display: contents !important;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 13px;
    row-gap: 20px;
  }

  .content {
    color: #242424;
    background-color: #ffffff;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
  }
  .col-flex{
    text-align: end;
  }
  #insertbtn{
    width: 50%;
  }
}
</style>