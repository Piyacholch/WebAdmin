<template>
  <Navbar />

  <div class="Box pb-5">
    <div class="px-5">
      <h1>แก้ไขแหล่งช่วยเหลือ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    <div class="box p-4">
      <h2>แก้ไขแหล่งช่วยเหลือ</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อแหล่งช่วยเหลือ</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
          v-model="data.Name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >เบอร์โทรศัพท์แหล่งช่วยเหลือ</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="เพิ่มเบอร์โทรศัพท์แหล่งช่วยเหลือ"
          v-model="data.Tel"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >ข้อมูลเพิ่มเติม</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="ข้อมูลเพิ่มเติม"
          v-model="data.Description"
        ></textarea>
      </div>

      <!-- <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label" 
              >เพิ่มข้อความตอบกลับ</label
            >
            <textarea
              class="form-control"
              id="validationDefault"
              for="validationDefault"
              placeholder="เพิ่มข้อความ"
              rows="7"
              v-model="data.Text"
              required
            ></textarea>
          </div> -->
      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="updateAssistance(data.Name, data.Tel, data.Description)"
        >
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="reset()">
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";
import Breadcrumb from "../../../components/bcupdate/bc-updateassistance.vue";

export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      Text: null,
      data: {},
      id: null, 
    };
  },
  mounted() {
    this.getAssistanceByID();
  },
  methods: {
    getAssistanceByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL+`/AssistanceByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
        });
    },
    updateAssistance() {
      axios
        .patch(
          process.env.VUE_APP_BACKEND_BASE_URL+`/updateAssistance/${this.$route.params.id}/${this.data?.Name}/${this.data?.Tel}/${this.data?.Description}`
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/assistance");
        });
    },
    reset() {
      this.data.Name = "";
      this.data.Tel = "";
      this.data.Description = "";
    },
  },
};
</script>
    
    <style  scoped>
.Box {
  background-color: #fff8e1;
  height: auto;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}
h2 {
  text-align: center;
  padding-bottom: 20px;
}
.box {
  background-color: #f5e5c1;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #fff8e1;
    height: 80rem;
  }
  .box {
    width: 90%;
  }
}
@media screen and (max-width: 767px) {
  .Box {
    background-color: #fff8e1;
    height: 80rem;
  }
  .box {
    width: 80%;
  }
  .footer {
    display: flex;
    justify-content: center !important;
    align-items: center;
  }
  .btn-1 {
    margin-left: 0px !important;
  }
}
</style>>
    