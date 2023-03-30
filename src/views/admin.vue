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
        <div class="col-lg-9 search-res p-0 mt-3">
          <div class="input-group ">
            <input type="text" class="form-control" placeholder="Search.." aria-describedby="button-addon2"
              v-model="search" />
          </div>
        </div>
      </div>
    </div>

    <div class="search mt-0">
      <div class="row row-menu sort">
        <div class="col-2 sortby p-0 mt-3" id="sort-desktop">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Sort By:</p>
          </div>
          <div class="input-group mb-3 d-flex justify-content-start input-sort">
            <select class="form-select" aria-label="Default select example" v-model="sortBy" @click="getadmin()">
              <option value="displayName">ชื่อ</option>
              <option value="email">อีเมล</option>
            </select>
          </div>
        </div>
        <div class="col-2 sort px-0 mt-3" id="sort-desktop">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Type:</p>
          </div>
          <div class="input-group mb-3 sort-frist">
            <select class="form-select" aria-label="Default select example" v-model="first" @click="getadmin()">
              <option value="desc">ล่าสุด-ลำดับแรก</option>
              <option value="asc">ลำดับแรก-ล่าสุด</option>
            </select>
          </div>
        </div>

        <!-- resposive -->
        <div class="row">
          <div class="col  sortby p-0 mt-3" id="sort-mobile">
            <div class="sortby-input mt-2">
              <p class="p-sortby fw-bold mb-2">Sort By:</p>
            </div>
            <div class="input-group mb-3 d-flex justify-content-start input-sort">
            <select class="form-select" aria-label="Default select example" v-model="sortBy" @click="getadmin()">
              <option value="displayName">ชื่อ</option>
              <option value="email">อีเมล</option>
            </select>
          </div>
          </div>
          <div class="col sort px-0 mt-3" id="sort-mobile">
            <div class="sortby-input mt-2">
              <p class="p-sortby fw-bold mb-2">Type:</p>
            </div>
            <div class="input-group mb-3 sort-frist">
              <select class="form-select" aria-label="Default select example" v-model="first" @click="getadmin()">
                <option value="desc">ล่าสุด-ลำดับแรก</option>
                <option value="asc">ลำดับแรก-ล่าสุด</option>
              </select>
            </div>
          </div>
        </div>
      </div>
     
      <div class="col col-flex d-flex justify-content-end mt-5">
        <button class="btn btn-success add " id="btn_del"  data-bs-toggle="modal"
            data-bs-target="#exampleModal">เพิ่มแอดมิน</button>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="row block-item block-bm" v-for="item in filtersearch" :key="item">

      <div class="col-2 displaynamecol2">{{ item.displayName }}</div>
      <div class="col-7">{{ item.email }}</div>



      <div class="col-3 button-1">

        <button type="button" class="btn btn-danger delete" data-bs-toggle="modal" data-bs-target="#exampleModal"
          @click="confirmdeletezone(item.id)">
          ลบ
        </button>
        <a href="/dashboard" class="fa fa-home"></a>
      </div>

      <!-- resposive -->

      <div class="col-3 button-res">


        <button type="button" class="btn btn-danger delete delete-res" id="control_btn_mobile" data-bs-toggle="modal"
          data-bs-target="#exampleModal" @click="confirmdeletezone(item.id)">
          <span class="material-icons"> ลบ </span>
        </button>

      </div>
    </div>
  </div>

  <!-- Button trigger modal -->

  <!-- Modal -->





  <!-- Modal deleteuser-->
  <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content border  border-5">
        <div class="modal-header border-0">
          <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center fs-4 fw-bold">
          คุณต้องการลบแอดมินนี้หรือไม่ ?
        </div>
        <div class="modal-footer border-0 mt-3">
          <div class="col">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal" @click="deleteuser(id)">
              ยืนยัน
            </button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal email-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content border border-warning border-5">
        <div class="modal-header border-0 px-2 pt-0 pb-0 mt-2">
          <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center fs-4 fw-bold px-0">เพิ่มอีเมล</div>

        <input type="email" class="form-control input-email" placeholder="Email address" v-model="email" />
        <div class="modal-footer border-0">
          <div class="row">
            <div class="col-6 confirm-1">
              <button type="button" class="btn btn-warning confirm" data-bs-dismiss="modal" @click="sendEmail()">
                ยืนยัน
              </button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-secondary cancel" data-bs-dismiss="modal">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  // watch: {
  //   search() {
  //     this.getchatopen();
  //   }
  // },
  data() {
    return {
      id: "",
      email: "",
      displayName: "",
      phonenum: "",

      loaddata: [],
      search: "",

      sortBy: "displayName",
      first: "desc",
    };
  },
  mounted() {
    this.getadmin();
  },
  methods: {
    getadmin() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/Admin", { params: { sortBy: this.sortBy, first: this.first } }).then((response) => {
        this.loaddata = response.data;
        console.log(response);
      });
    },

    sendEmail() {
      const email = this.email;
      const auth = getAuth();

      if (email == null) {
        alert("กรุณากรอกอีเมล!!");
      } else if (email != null) {

        sendSignInLinkToEmail(auth, email, actionCodeSettings)
          .then(() => {
            console.log(email);
            localStorage.setItem("emailForSignIn", email);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    confirmdelete(id) {
      this.id = id;
    },
    deleteuser(id) {
      axios.delete(process.env.VUE_APP_BACKEND_BASE_URL + "/deleteuser/" + id).then(() => {
        this.id = id;
        this.getadmin();
        // console.log(response.data)
      });
    },

  },
  computed: {
    filtersearch() {
      return this.loaddata.filter((loaddata) => {
        return loaddata.displayName.toLowerCase().includes(this.search.toLowerCase());
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
  background-color: #ffff !important;
  height: auto;
}

h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}

.form-control {
  border: 5px solid #ffbd59;
  border-radius: 15px;
}

.form-select {
  border: 5px solid #ffbd59;
  border-radius: 15px;
}


.row-menu {
  width: 90%;
  margin: auto;
}

.col-9 {
  padding: 0px;
}

.bnt-insert {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 30px;
}

.input-group {
  width: 48%;

}

.input-sort {
  width: 90% !important;
  padding-bottom: 20px;
}

.sortby {
  width: 20%;
}

.p-sortby {
  font-size: 16px;
}

.sort-frist {
  width: 100% !important;
  padding-bottom: 20px;
}

.sort {
  padding-right: 5px;
}

.col-flex {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px !important;
  padding-bottom: 20px !important;
}

.block-bm {
  margin-bottom: 20px !important;
}

.block-item {
  border-radius: 8px;
  background-color: #ffff;
  margin-bottom: 10px;
  width: 90%;
  margin: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.block-item:hover {
  border-left: 5px solid orange;
  transform: scale(1.03, 1.03);
}

.displaynamecol2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

}

.col-7 {
  display: flex;
  align-items: center;
  padding: 20px;

}

.col-3 {
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.2rem;
}

.edit {
  width: 30%;
}

.delete {
  width: 30%;
  margin-left: 10px;
}

.button-res {
  display: none;
}
#sort-mobile {
    display: none;
  }

  #sort-desktop {
    display: block;
  }
  .a-insert{
    padding-right: 50px;
  }
  #btn_del{
    width: 15% !important;
    margin-right: 65px;
  }

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #fff8e1;
    height: 80rem;
  }

  .button-1 {
    display: none;
  }

  .button-res {
    display: block;
  }

  .edit-res {
    width: 40% !important;
    padding: 5px !important;
  }

  .delete-res {
    padding: 5px !important;
    width: 40% !important;
  }
}

@media screen and (max-width: 767px) {
  #sort-mobile {
    display: block;
  }

  #sort-desktop {
    display: none;
  }
  #control_btn_mobile {
    height: 30px;
  }

  .Box {
    background-color: #fff8e1;
    height: auto;
  }

  h1 {
    padding-left: 0px !important;
  }

  .search-res {
    padding: 0px;
  }

  .input-group {
    width: 100%;
    padding-bottom: 20px;
  }

  .col-3 {
    padding: 0px;
  }

  .button-1 {
    display: none;
  }

  .button-res {
    display: block;
  }

  button {
    font-size: 14px;
  }

  .col-7 {
    font-size: 14px;
  }

  .col-3 {
    font-size: 14px;
    margin: auto;
  }

  .edit-res {
    width: 40% !important;
    padding: 5px !important;
  }

  .delete-res {
    padding: 5px !important;
    width: 40% !important;
  }

  .material-icons {
    font-size: 16px !important;
    text-align: center !important;
  }
  .a-insert{
    padding-right:20px !important ;
  }
#btn_del{
    width: 50% !important;
    margin-right: 10px;
  }
}
</style>