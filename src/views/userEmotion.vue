<template>
  <Navbar />
  <div class="px-5">
    <h1>ข้อมูลระดับอารมณ์รายวัน สัปดาห์ และเดือน</h1>
    <Breadcrumb />
    <hr />
  </div>
 
  <div class="grid px-5 mt-5">
    <div class="item">
      <div class="content ">
        <div class="calender">
          <img src="../assets/emotion/emotion.png" alt="icon" class="icon">
        </div>
        <div class="text">
          <p class="topic">ประเมินอารมณ์ทั้งหมด</p>
          <p> <span>ประเมินอารมณ์ทั้งหมด :</span> {{ data.length }} ครั้ง</p>
          <p><span>สบายใจมาก : </span>{{ comfortable }} ครั้ง</p>
          <p><span>สบายใจ : </span> {{ relaxed }} ครั้ง</p>
          <p><span>เฉยๆ : </span> {{ normal }} ครั้ง</p>
          <p><span>ไม่สบายใจ : </span> {{ worried }} ครั้ง</p>
          <p><span>ไม่สบายใจมาก : </span> {{ uncomfortable }} ครั้ง</p>
          <p><span>ระดับอารมณ์ : </span> {{ data.percentage }} / 100 </p>
          <p><span>อยู่ในเกณฑ์ : </span> {{ data.resultemotionDay }} </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="calender">
          <div class="calender">
            <img src="../assets/emotion/today.png" alt="icon" class="icon">
          </div>
        </div>

        <div class="text">
          <p class="topic">ประเมินอารมณ์รายวัน</p>
          <p> <span>วันที่</span> {{ preday.startDay }}</p>
          <p><span>ผู้ใช้งานประเมินทั้งหมด : </span> {{ preday.length }} ครั้ง </p>
          <p><span>ระดับอารมณ์ : </span> {{ preday.percentage }} / 100 </p>
          <p><span>อยู่ในเกณฑ์ : </span> {{ preday.resultemotionDay }} </p>
        </div>

      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="calender">
          <div class="calender">
            <img src="../assets/emotion/week.png" alt="icon" class="icon">
          </div>

        </div>
        <div class="text">
          <p class="topic">ประเมินอารมณ์รายสัปดาห์</p>
          <p> <span>ตั้งแต่วันที่ </span> {{ preWeek.startDay }} <span>ถึง</span> {{ preWeek.endDay }}</p>
          <p><span>ผู้ใช้งานประเมินทั้งหมด : </span> {{ preWeek.length }} ครั้ง </p>
          <p><span>ระดับอารมณ์ : </span> {{ preWeek.percentage }} / 100 </p>
          <p><span>อยู่ในเกณฑ์ : </span> {{ preWeek.resultemotionWeek }} </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="content">

        <div class="calender">
          <div class="calender">
            <img src="../assets/emotion/month.png" alt="icon" class="icon">
          </div>

        </div>
        <div class="text">
          <p class="topic">ประเมินอารมณ์รายเดือน</p>
          <p><span>ตั้งแต่วันที่ </span> {{ preMonth.startDay }} <span>ถึง</span> {{ preMonth.endDay }}</p>
          <p><span>ผู้ใช้งานประเมินทั้งหมด : </span> {{ preMonth.length }} ครั้ง </p>
          <p><span>ระดับอารมณ์ : </span>{{ preMonth.percentage }} / 100 </p>
          <p><span>อยู่ในเกณฑ์ : </span> {{ preMonth.resultemotionMonth }} </p>
        </div>
      </div>
    </div>
  </div>
  <div class="description">
    <p class="description px-5 mt-3" style="color: red;"> *หากผู้ใช้งานยังไม่ประเมินอารมณ์ภายในวันปัจจุบัน สัปดาห์ หรือเดือน จะไม่แสดงข้อมูลการประเมินอารมณ์</p>
  </div>


  <!-- <p v-if="getusersPreday">ประเมินอารมณ์รายวัน: ครั้ง
    <br />
    อยู่ในเกณฑ์ <br />
    ระดับอารมณ์ <br />
   
  </p>


  <p v-if="getusersPreweek">ประเมินอารมณ์รายสัปดาห์:  ครั้ง <br />
    ระดับอารมณ์ {{ preWeek.percentage }} / 100
    <br />
    อยู่ในเกณฑ์ {{ preWeek.resultemotionWeek }} <br />
   
  </p>


  <p v-if="getusersPremonth">ประเมินอารมณ์รายเดือน: <br />
    ระดับอารมณ์ {{ preMonth.percentage }} / 100 <br />
    อยู่ในเกณฑ์ {{ preMonth.resultemotionMonth }}
    <br /> 
  </p> -->
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-userEmotion.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      data: [],
      level:[],
      id: "",
      preWeek: [],
      preday: [],
      preMonth: [],
      date: "",
      length: ""
    };
  }, mounted() {
    this.getusersByID();
    this.getusersPreweek();
    this.getusersPreday();
    this.getusersPremonth();
    this.getlevelByID();
  },
  methods: {
    getusersByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/UserByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;   
          this.length = response.data.length

     
        });
    },
    getlevelByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/levelByID/${this.$route.params.id}`)
        .then((response) => {
          this.level = response.data;
          console.log(response)
          this.length = response.data.length
          this.uncomfortable = response.data.filter((item) => item.level == '1').length;
          this.worried = response.data.filter((item) => item.level == '2').length;
          this.normal = response.data.filter((item) => item.level == '3').length;
          this.relaxed = response.data.filter((item) => item.level == '4').length;
          this.comfortable = response.data.filter((item) => item.level == '5').length;

        });
    },
    getusersPreday() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/getEmotionPerDay/${this.$route.params.id}`)
        .then((response) => {
          this.preday = response.data;
          console.log(response)
        });
    },
    getusersPreweek() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/getEmotionPerWeek/${this.$route.params.id}`)
        .then((response) => {
          this.preWeek = response.data;
          console.log(response)
        });
    },
    getusersPremonth() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/getEmotionPerMonth/${this.$route.params.id}`)
        .then((response) => {
          this.preMonth = response.data;
          console.log(response)
        });
    },
  },

}
</script>

<style scoped>
.calender {
  text-align: right;
  margin: auto;
  background-color: #ffffff !important;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 40px;
}

p {
  text-align: left;
  margin: 0px;
  line-height: 1.8;
}

.text {
  padding: 10px;

}

.topic {
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
  margin-bottom: 10px;
}

span {
  font-weight: bold;
  font-size: 14px;
}


.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 20px;
  row-gap: 20px;
}

.content {
  color: #242424;
  background-color: #F9F5EF;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 30px;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
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
    background-color: #F9F5EF;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    width: 90%;
    margin: auto;
  }
}

@media screen and (min-width: 700px) and (max-width: 902px)  {
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
    background-color: #F9F5EF;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    width: 90%;
    margin: auto;
  }

  .topic {
    font-size: 24px;
   
  }

  span {
    font-size: 20px;
  }
}</style>