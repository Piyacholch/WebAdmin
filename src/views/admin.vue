<template>
  <Navbar />
    <div class="Box">
        <div class="px-5">
            <h1>จัดการแอดมิน</h1>
            <hr />
        </div>

        <div class="row px-5">
            <div class="col-sm-8">
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search.."
                        aria-describedby="button-addon2"
                        v-model="search"
                    />
                    <button class="btn btn-primary" type="button" id="button-addon2">
                        ค้นหา
                    </button>
                </div>
            </div>
            <div class="col-sm-4 d-flex flex-row-reverse">
                <a href="">
                <button type="button" class="btn btn-success">เพิ่มแอดมิน</button>
                </a>
            </div>
        </div>

        <div class="row px-5">
            <div class="grid">
                <div class="item">
                    <div class="content">
                        <p>11111</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <p>22222</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <p>33333</p>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <p>44444</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style scoped>
.Box {
  background-color: #f5f5f5;
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
  background-color: #f25fff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
}
</style>