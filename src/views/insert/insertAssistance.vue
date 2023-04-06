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

      <div class="row" id="div-desktop">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">หมายเลขเอกสาร</label>
          <!-- <input type="text" class="form-control title" id="exampleFormControlInput1" placeholder="id docs"
            v-model="iddocs" @change="isInt(iddocs)"
            onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" /> -->
            <input type="text" class="form-control title" id="exampleFormControlInput1" placeholder="id docs" disabled
            v-model="iddocs"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ชื่อแหล่งช่วยเหลือ</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="สายด่วนสุขภาพจิต"
            v-model="title" />
        </div>  
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์แหล่งช่วยเหลือ</label>
          <input type="tel" class="form-control" id="exampleFormControlInput2" placeholder="1323" v-model="tel" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ชื่อเฟซบุ๊กแหล่งช่วยเหลือ</label>
          <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="1323 ปรึกษาปัญหาสุขภาพจิต"
            v-model="facebook" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ลิงก์เฟซบุ๊กแหล่งช่วยเหลือ</label>
          <input type="url" class="form-control" id="exampleFormControlInput2"
            placeholder="https://www.facebook.com/helpline1323" v-model="Linkfacebook" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ชื่อไอดีไลน์แหล่งช่วยเหลือ</label>
          <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="@147nzgad"
            v-model="lineid" />
        </div>

      

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ลิงก์ไลน์แหล่งช่วยเหลือ</label>
          <input type="url" class="form-control" id="exampleFormControlInput2"
            placeholder="https://linevoom.line.me/user/_dQJ-9xu9LZg2e9vcIRGh2Ikb9VQYGgmAeOaVBmY" v-model="Linkline" />
        </div>

       

        

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">ข้อมูลเพิ่มเติม</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"
            placeholder="ให้บริการโดยนักจิตวิทยา ตลอด 24 ชั่วโมง จากกรมสุขภาพจิต" v-model="description"></textarea>
        </div>
    </div>
    <div class="footer d-flex justify-content-end mt-4">
      <button type="button" class="btn btn-warning mx-2" id="div-desktop"
        @click="submit(iddocs, title, tel, facebook, Linkfacebook, lineid, Linkline, description)">
        ตกลง
      </button>
      <button type="button" class="btn btn-danger" id="div-desktop" @click="
        $router.push(
          `/assistance`
        )
      ">
        ยกเลิก
      </button>
    </div>
  </div>
  </div>



  <!-- responsive -->

  <div class="row" id="div-mobile">
    <div class="col">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">หมายเลขเอกสาร</label>
        <input type="text" class="form-control title" id="exampleFormControlInput1" placeholder="id docs"
          v-model="iddocs" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">ชื่อแหล่งช่วยเหลือ</label>
        <input type="text" class="form-control title" id="exampleFormControlInput1" placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
          v-model="title" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์แหล่งช่วยเหลือ</label>
        <input type="url" class="form-control title" id="exampleFormControlInput2"
          placeholder="เพิ่มเบอร์โทรศัพท์แหล่งช่วยเหลือ" v-model="tel" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Facebook แหล่งช่วยเหลือ</label>
        <input type="text" class="form-control title" id="exampleFormControlInput2"
          placeholder="Facebook Page แหล่งช่วยเหลือ" v-model="facebook" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Link Facebook แหล่งช่วยเหลือ</label>
        <input type="url" class="form-control title" id="exampleFormControlInput2"
          placeholder="Link Facebook แหล่งช่วยเหลือ" v-model="Linkfacebook" />
      </div>
    </div>

    <div class="col">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">LineID แหล่งช่วยเหลือ</label>
        <input type="text" class="form-control title" id="exampleFormControlInput2" placeholder="Line ID แหล่งช่วยเหลือ"
          v-model="lineid" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Link Line แหล่งช่วยเหลือ</label>
        <input type="url" class="form-control title" id="exampleFormControlInput2" placeholder="Link Line แหล่งช่วยเหลือ"
          v-model="Linkline" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">ข้อมูลเพิ่มเติม</label>
        <textarea class="form-control title" id="exampleFormControlTextarea1" rows="8" placeholder="ข้อมูลเพิ่มเติม"
          v-model="description"></textarea>
      </div>

    </div>
  </div>
  <div class="footer d-flex justify-content-end mt-4">
    <button type="button" class="btn btn-warning mx-2" id="div-mobile"
      @click="submit(iddocs,title, tel, facebook, Linkfacebook, lineid, Linkline, description)">
      ตกลง
    </button>
    <button type="button" class="btn btn-danger" id="div-mobile" @click="
      $router.push(
        `/assistance`
      )
    ">
      ยกเลิก
    </button>
  </div>
  <!-- </div>
  </div>
</div> -->
</template>
  
<script>
// import $ from "jquery";
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Breadcrumb from "../../components/Bcinsert/bc-insertassistance.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      iddocs: "",
      title: "",
      tel: "",
      Linkfacebook: "",
      facebook: "",
      lineid: "",
      Linkline: "",
      description: "",
      data: [],
    };
  },
  methods: {
    submit(iddocs, title, tel, facebook, Linkfacebook, lineid, Linkline, description) {

      // if (this.title == null || this.title == "") {
      //   $(".title").on({
      //     keydown: function (event) {
      //       if (event.which === 32) return false;
      //     },
      //     // if a space copied and pasted in the input field, replace it (remove it):
      //     change: function () {
      //       this.value = this.value.replace(/\s/g, "");
      //     },
      //   });

      //   alert("กรุณากรอกข้อมูล!!");
      // } 

      if (title == "" || title == null || tel == "" || tel == null ||
        facebook == "" || facebook == null || Linkfacebook == "" || Linkfacebook == null ||
        lineid == "" || lineid == null || Linkline == "" || Linkline == null ||
        description == "" || description == null) {
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      } else if (title != "" || tel != "" ||
        facebook != "" || Linkfacebook != "" || lineid != "" ||
        Linkline != "" || description != "") {

        axios
          .post(process.env.VUE_APP_BACKEND_BASE_URL + "/insertassistance", {
            iddocs: iddocs,
            title: title,
            tel: tel,
            facebook: facebook,
            Linkfacebook: Linkfacebook,
            lineid: lineid,
            Linkline: Linkline,
            description: description,
          })
          .then((response) => {
            this.data = response.data;
            console.log(response)
            this.$router.push("/assistance");
            // console.log(response.data)
          });
      }
    },

    getAssistance() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/assistanceautoid").then((response) => {
        this.datalenght = response.data.length+1;
        this.iddocs =  this.datalenght.toString();
        if (this.datalenght < 10) {
          this.iddocs = "0" + this.iddocs;
      }
      });
    },
  },
  created() {
    this.getAssistance();
  },
  mounted() {
    this.getAssistance();
    
  },


  isInt(n) {
    if (n % 1 === 0) {
      return;
    } else {
      alert("กรุณากรอกตัวเลข!!");
      this.iddocs = 1;
    }
  },



};
</script>
  
<style  scoped>
.Box {
  background-color: #ffff;
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
  width: 40% !important;
  margin: auto;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}

#div-mobile {
  display: none !important;
}

#div-desktop {
  display: block !important;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  .box {
    width: 100%;
  }

  #div-mobile {
    display: block;
  }

  #div-desktop {
    display: none;
  }

}
@media screen and (min-width: 701px) and (max-width: 3000px){
  .box {
    width: 80%;
  }
}
</style>
  