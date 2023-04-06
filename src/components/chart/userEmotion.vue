<template>
    <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </head>
    <Navbar />

    <div class="Box">
        <div class="px-5 mt-3 mb-5">
            <h3>ดูระดับอารมณ์ผู้ใช้งานรายวัน สัปดาห์ และเดือน</h3>
            <Breadcrumb />
            <hr />
        </div>


        <div class="block" id="div-desktop">
            <div class="row align-items-start block-item" v-for="(item, index) in data" :key="index">
                <div class="col-1 emoji-level">
                    <div class="bg-level">
                        <div class="bg-level">
                            <img src="../../assets/profile-user.png" alt="icon" class="icon" />
                        </div>
                    </div>
                </div>
                <div class="col text">
                    <p class="text-level">{{ item.id }}</p>
                </div>
                <div class="col button-1 text">
                    <button type="button" class="btn btn-primary edit" @click="$router.push(`/useremotion/${item.id}`)">
                        ระดับอารมณ์
                    </button>
                </div>

            </div>
        </div>

        <!-- responsive -->
        <div class="block" id="div-mobile">

            <div class="row align-items-start block-item"
            v-for="(item, index) in data" :key="index">
                <div class="col-2 emoji-level">
                    <div class="bg-level">
                        <div class="bg-level">
                            <img src="../../assets/profile-user.png" alt="icon" class="icon" />
                        </div>
                    </div>
                </div>
                <div class="col text">
                    <p class="text-level">{{ item.id }}</p>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary edit-res" @click="$router.push(`/useremotion/${item.id}`)">
                        <span class="material-icons"> visibility </span>
                    </button>
                </div>
            </div>




           
        </div>
    </div>
</template>
  
<script>
import Breadcrumb from "../BC-getuser.vue";
import axios from "axios";
export default {
    components: { Breadcrumb },
    data() {
        return {
            data: [],
            id: "",
        };
    },
    mounted() {
        this.getusers();

    },
    methods: {
        getusers() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/getusers").then((response) => {
                this.data = response.data;
                console.log(response);
            });
        },
    },

    confirmdeletezone(id) {
        this.id = id;
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

.block-bm {
    margin-bottom: 20px !important;
}

.block-item {
    border-radius: 8px;
    background-color: #ffff;
    margin-bottom: 15px !important;
    width: 90%;
    margin: auto;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.block-item:hover {
    border-left: 5px solid orange;
    transform: scale(1.03, 1.03);
}

.emoji-level {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}


.edit {
    width: 25%;
    margin: auto !important;
}



.a-insert {
    padding-right: 50px;
}

.text-level {
    text-align: left;
    padding-right: 5px;
    font-family: 'Kanit', sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
    font-size: 18px;
    margin-top: 10px;
}

.text {
    padding: 20px;
}

.icon {
    width: 30px;
}

#div-mobile {
    display: none;
}

#div-desktop {
    display: block;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
    #div-mobile {
        display: block;
    }

    #div-desktop {
        display: none;
    }
    
.block-item {
   
    width: 90%;
    margin: auto;
   
}
.block-item:hover {
    border-left: 5px solid orange;
    transform: scale(1.03, 1.03);
}

.icon {
    width: 25px;
}
.text {
    padding: 0px;
}
.text-level {
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
    font-size: 14px;
    margin-top:20px
}
.material-icons{
    width: 30px;
}
.edit-res {
    width: 40% !important;
    padding: 5px !important;
    margin-top: 10px;
  float: right;
  }
}

/* @media screen and (min-width: 768px) and (max-width: 1023px) {
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

    #control_btn_mobile {
        height: 30px;
    }

    .Box {
        background-color: #ffff;
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

    .a-insert {
        padding-right: 15px !important;
    }
} */</style>
  