import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '..//bootstrap-5.1.3-dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

createApp(App).use(store).use(router).mount('#app')
createApp(App).use(VueAxios, axios)