<template>
  <Navbar />
  
  <div class="Box pb-5">
    <div class="px-5">
      <h1>เพิ่มกิจกรรมที่ชอบ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    
    <div class="box p-4">
      <h2>เพิ่มกิจกรรมที่ชอบ</h2>
     
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >หมายเลขเอกสาร</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="id docs"
          v-model="data.iddocs"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อกิจกรรม</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
          v-model="data.title"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >เว็บไซต์อ้างอิง</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="เพิ่มเว็บไซต์อ้างอิง"
          v-model="data.website"
        />
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
          @click="
            submit(data.iddocs, data.title, data.website)
          "
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
import Navbar from "../../components/Navbar.vue";
import Breadcrumb from "../../components/Bcinsert/bc-insertactivity.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      iddocs: "",
      title: "",
      website: "",
      data: [],
    };
  },
  methods: {
    submit(iddocs, title, website) {

      if(iddocs == null || title == null || website == null ){
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      }else if(iddocs != null || title != null || website != null){
      axios
        .post(process.env.VUE_APP_BACKEND_BASE_URL+"/insertactivity/" + iddocs +"/" + title + "/" + website)
        .then((response) => {
          this.data = response.data;
          this.$router.push("/activity");
          // console.log(response.data)
        });}
    },
    reset() {
      this.data.iddocs = "";
      this.data.title = "";
      this.data.website = "";
    },
  },
  created() {},
};
</script>
    
<style  scoped>
img.preview {
  width: 200px;
}
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
@media screen and (max-width: 767px){
  .box{
    width: 90%;
  }
}

</style>
    