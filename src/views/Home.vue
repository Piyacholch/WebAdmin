<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>ภาพรวมระบบ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="row px-5">
      <div class="grid">
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/user-profile.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">5</p>
                <p class="name pt-2">เข้าใช้ด้วยอีเมลและรหัสผ่าน</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
           
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/google.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">5</p>
                <p class="name pt-2">เข้าใช้ด้วยบัญชี Google</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/users.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">5</p>
                <p class="name pt-2">ผู้ดูแลระบบทั้งหมด</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/smile.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">5</p>
                <p class="name pt-2">วัดระดับอารมณ์ทั้งหมด</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5 mt-3">
      <div class="col-sm-8">
        <div class="chart">
          <canvas id="myChart" width="400" height="350px"></canvas>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="imformation">
          <h3>ข้อมูลผู้ใช้</h3>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script>
import Chart from "chart.js/auto";
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-dashboard.vue";

export default {
  components: { Navbar, Breadcrumb },

  mounted() {
    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 50, 60],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // const mcl = document.getElementById("myChartline");

    // const myChartline = new Chart(mcl, {
    //   type: "line",
    //   data: {
    //     labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    //     datasets: [
    //       {
    //         label: "My First Dataset",
    //         data: [300, 50, 100, 50, 60],
    //         backgroundColor: [
    //           "rgb(255, 99, 132)",
    //           "rgb(54, 162, 235)",
    //           "rgb(255, 205, 86)",
    //           "rgb(255, 205, 86)",
    //           "rgb(255, 205, 86)",
    //         ],
    //         hoverOffset: 4,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });

    // response
    // const ct = document.getElementById("myChart1");

    // const myChart1 = new Chart(ct, {
    //   type: "bar",
    //   data: {
    //     labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    //     datasets: [
    //       {
    //         label: "My First Dataset",
    //         data: [300, 50, 100, 50, 60],
    //         backgroundColor: [
    //           "rgb(255, 99, 132)",
    //           "rgb(54, 162, 235)",
    //           "rgb(255, 205, 86)",
    //           "rgb(255, 205, 86)",
    //           "rgb(255, 205, 86)",
    //         ],
    //         hoverOffset: 4,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });

    // myChart1;
    myChart;
    // myChartline;
  },
};
</script>

<style scoped>
.Box {
  background-color: #fff8e1;
  height: 50rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 5px;
  row-gap: 20px;
}

.content {
  color: #242424;
  background-color: #ffbd59;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.bg-icon {
  margin: auto;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  padding: 20px;
}
.num {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
}
.name {
  font-size: 14px;
  font-weight: bold;
  color: #f5f5f5;
}
.pie {
  padding-left: 0px;
}
.chart-pie {
  background-color: #ffff;
  border-radius: 8px;
}
.chart {
  background-color: white;
  border-radius: 12px;
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}
.imformation {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}
.dash-2 {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
}
.line-chart {
  width: 80%;
  height: auto;
  margin: auto;
}

@media screen and (max-width: 767px) {
  .Box {
  background-color: #fff8e1;
  height: auto;
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
  background-color: #ffbd59;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
}
.bg-icon {
  margin: auto;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  padding: 20px;
  width: 80px;
}
.imformation{
  margin-top: 10px;
  height: 200px;
}

} 
</style>