<template>
  <Navbar />

  <div class="Box">
    <div class="px-5">
      <h1>เพิ่มแหล่งช่วยเหลือ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>


    <div class="box p-4">
      <h2>เพิ่มแหล่งช่วยเหลือ</h2>

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

      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="submit(data.iddocs, data.Name, data.Tel, data.Description)"
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
import Breadcrumb from "../../components/Bcinsert/bc-insertassistance.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      iddocs:"",
      Name: "",
      Tel: "",
      Description: "",
      data: [],
    };
  },
  methods: {
    
    submit(iddocs, Name, Tel, Description) {
      // const formData = new FormData();
      // formData.append("Text", this.Text);
      if(iddocs == null || Name == null || Tel == null || Description == null ){
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      }else if(iddocs != null || Name != null || Tel != null || Description != null){
axios
      axios
        .post("http://localhost:5050/insertassistance/" + iddocs +"/"+ + Name +"/"+ Tel +"/"+ Description)
        .then((response) => {
          this.data = response.data;
          this.$router.push("/assistance");
          // console.log(response.data)
        });
      }
    },
    reset() {
      this.data.iddocs = "";
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
  height: 50rem;
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
  