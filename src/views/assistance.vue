<template>
  <head>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </head>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>แหล่งช่วยเหลือ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="search">
      <div class="row row-menu">
        <div class="col-lg-9 search-res p-0">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search.."
              aria-describedby="button-addon2"
              v-model="search"
            />
          </div>
        </div>
      </div>
      
    </div>

    <div class="search mt-0">
      <div class="row row-menu sort">
        <div class="col-2 sortby p-0 mt-3" id="div-desktop">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Sort By:</p>
          </div>
          <div class="input-group mb-3 d-flex justify-content-start input-sort">
            <select class="form-select" aria-label="Default select example" v-model="sortBy" @click="getassitance()">
              <option value="iddocs">หมายเลขเอกสาร</option>
              <option value="title">ชื่อแหล่งช่วยเหลือ</option>
            </select>
          </div>
        </div>
        <div class="col-2 sort px-0 mt-3" id="div-desktop">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Type:</p>
          </div>
          <div class="input-group mb-3 sort-frist">
            <select class="form-select" aria-label="Default select example" v-model="first" @click="getassitance()">
              <option value="desc">ล่าสุด-ลำดับแรก</option>
              <option value="asc">ลำดับแรก-ล่าสุด</option>
            </select>
          </div>
        </div>

        <!-- resposive -->
        <div class="row">
          <div class="col  sortby p-0 mt-3" id="div-mobile">
            <div class="sortby-input mt-2">
              <p class="p-sortby fw-bold mb-2">Sort By:</p>
            </div>
            <div class="input-group mb-3 d-flex justify-content-start input-sort">
              <select class="form-select" aria-label="Default select example" v-model="sortBy" @click="getchatopen()">
                <option value="iddocs">หมายเลขเอกสาร</option>
                <option value="Text">ข้อความ</option>
              </select>
            </div>
          </div>
          <div class="col sort px-0 mt-3" id="div-mobile" >
            <div class="sortby-input mt-2">
              <p class="p-sortby fw-bold mb-2">Type:</p>
            </div>
            <div class="input-group mb-3 sort-frist">
              <select class="form-select" aria-label="Default select example" v-model="first" @click="getchatopen()">
                <option value="desc">ล่าสุด-ลำดับแรก</option>
                <option value="asc">ลำดับแรก-ล่าสุด</option>
              </select>
            </div>
          </div>
        </div>
        </div>

        <div class="col col-flex d-flex justify-content-end mt-5">
          <a href="/insertassistance" class="a-insert">
            <button type="button" class="btn btn-success">
              เพิ่มแหล่งช่วยเหลือ
            </button>
          </a>
        </div>
      </div>
   
    

    <div class="block">
      <div
        class="row block-item block-bm"
        v-for="item in filtersearch"
        :key="item"
      >
        <!-- <div class="col-1">{{ item.id }}</div> -->
        <div class="col-1">{{ item.id }}</div>
        <div class="col-7">{{ item.title }}</div>
        <div class="col-3 button-1">
          <button
            type="button"
            class="btn btn-primary edit"
            @click="
              $router.push(
                `/updateAssistance/${item.id}`
              )
            "
          >
            แก้ไข
          </button>

          <button
            type="button"
            class="btn btn-danger delete"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="confirmdelete(item.id)"
          >
            ลบ
          </button>
        </div>

        <!-- resposive -->

        <div class="col-3 button-res">
          <button
            type="button"
            class="btn btn-primary edit edit-res"
            @click="
              $router.push(
                `/updateAssistance/${item.id}`
              )
            "
          >
            <span class="material-icons"> mode_edit </span>
          </button>

          <button
            type="button"
            class="btn btn-danger delete delete-res"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="confirmdeletezone(item.id)"
          >
            <span class="material-icons"> delete_outline </span>
          </button>
        </div>
      </div>

      <!-- Button trigger modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content border border border-5">
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close float-end"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center fs-4 fw-bold">
              คุณต้องการลบแหล่งช่วยเหลือนี้หรือไม่ ?
            </div>
            <div class="modal-footer border-0 mt-3">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-dismiss="modal"
                  @click="deletechat(id)"
                >
                  ยืนยัน
                </button>
              </div>
              <div class="col">
              <button
                type="button"
                class="btn btn-secondary"
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

</template>
    
<script>
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-assistance.vue";
import axios from "axios";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      loaddata: [],
      id: "",
      search: "",
      title: "",
      sortBy: "iddocs",
      first: "desc",
    };
  },
  mounted() {
    this.getassitance();
  },
  methods: {
    getassitance() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/assistance", { params: { sortBy: this.sortBy, first: this.first } }).then((response) => {
        this.loaddata = response.data;
        // console.log(response);
      });
    },
    confirmdelete(id) {
      this.id = id;
    },
    deletechat(id) {
      axios.delete(process.env.VUE_APP_BACKEND_BASE_URL+"/assistance/" + id).then(() => {
        this.id = id;
        this.getassitance();
        // console.log(response.data)
      });
    },
  },
  computed: {
    filtersearch() {
      return this.loaddata.filter((loaddata) => {
        return loaddata.id.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
    
<style scoped>
.Box {
  background-color: #ffff;
  height: 50rem;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}
.form-control {
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
.form-select {
  border: 2px solid #ffbd59;
  border-radius: 15px;
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
.p-sortby{
font-size: 16px;
}

.sort-frist {
  width: 100% !important;
  padding-bottom: 20px;
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
.col-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 1.2rem;
}
.col-7 {
  align-items: center;
  display: flex;
  padding: 20px;
  font-size: 1.2rem;
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
#div-mobile {
    display: none;
  }

  #div-desktop {
    display: block;
  }
  .a-insert{
    padding-right: 65px;
  }
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #ffff;
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
  #div-mobile {
    display: block;
  }

  #div-desktop {
    display: none;
  }
  .col-7 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 1.2rem;
  }
  #control_btn_mobile {
    height: 30px;
  }
  .Box {
    background-color: #ffff;
    height: 80rem;
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
  .edit {
  width: 30px;
  height: 30px;
}
.delete {
  width: 30px;
  height: 30px;
  
}
.a-insert{
    padding-right:15px !important ;
  }
}
</style>