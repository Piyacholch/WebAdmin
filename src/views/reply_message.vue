<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>ชุดข้อความตอบกลับ</h1>
      <hr/>
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    <!-- <div class="row row-1">
      <div class="col-12 px-4">
        <div class="search">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search.."
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-warning"
              type="button"
              id="button-addon2"
            >
              ค้นหา
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="block">
      <div class="row block-item">
        <div class="col-9">ชุดข้อความตอบกลับประโยคทักทาย</div>
        <div class="col-3">
          <a href="/chatopen">
            <button type="button" class="btn btn-warning edit">แก้ไข</button></a
          >
        </div>
      </div>
      <div class="row block-item">
        <div class="col-9">ชุดข้อความตอบกลับประโยคด้านบวก</div>
        <div class="col-3">
          <a href="/chatpositive">
            <button type="button" class="btn btn-warning edit">แก้ไข</button></a
          >
        </div>
      </div>
      <div class="row block-item">
        <div class="col-9">ชุดข้อความตอบกลับประโยคด้านลบ</div>
        <div class="col-3">
          <a href="/chatnegative">
            <button type="button" class="btn btn-warning edit">แก้ไข</button></a
          >
        </div>
      </div>
      <div class="row block-item">
        <div class="col-9">ชุดข้อความตอบกลับประโยคกระตุ้น</div>
        <div class="col-3">
          <a href="/chatstimulate">
            <button type="button" class="btn btn-warning edit">แก้ไข</button></a
          >
        </div>
      </div>
      <div class="row block-item">
        <div class="col-9">ชุดข้อความตอบกลับประโยคสุดท้าย</div>
        <div class="col-3">
          <a href="/chatclose">
            <button type="button" class="btn btn-warning edit">แก้ไข</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-chat.vue";
export default {
  components: { Navbar, Breadcrumb  },
};
</script>

<style scoped>
.Box {
  background-color: #ffff;
  height: auto;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}
.search {
  padding-left: 60px;
  padding-bottom: 30px;
}
.input-group {
  width: 40%;
}
.block-item {
  margin-bottom: 20px !important;
}
.row:not(.row-1) {
  border-radius: 5px;
  background-color: #ffff;
  margin-bottom: 10px;
  width: 90%;
  margin: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}
.row:hover {
  border-left: 5px solid orange;
  transform: scale(1.03, 1.03);
}
.col-9 {
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 1.2rem;
}
.col-3 {
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.2rem;
}
.edit {
  width: 100% !important;
  margin: auto;
}
a {
  text-decoration: none;
  width: 50%;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
  background-color: #fff8e1;
  height: 80rem;
}
.col-9{
  font-size: 1.5rem;
}
.edit{
  font-size: 1.5rem;
}
}
@media screen and (max-width: 767px)  {
  .Box {
  background-color: #fff8e1;
  height: 80rem;
}
  .search {
    padding-left: 0px;
    padding-bottom: 30px;
  }
  .input-group {
    width: 100%;
  }
  .col-3{
    padding: 0px;
  }
  a {
  text-decoration: none;
  width: 50%;
}
.col-9 {
  width: 50%;
}
.col-3 {
  width: 50%;
}
}
</style>