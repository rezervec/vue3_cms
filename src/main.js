import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


let app

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBataqeqMECTXP99ap90HBPnVRqpJKDOEE",
    authDomain: "crm-vue-ffirebase.firebaseapp.com",
    projectId: "crm-vue-ffirebase",
    storageBucket: "crm-vue-ffirebase.appspot.com",
    messagingSenderId: "266136787469",
    appId: "1:266136787469:web:18f6a14da98cc9097f9344"
  });

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app')
    }
})