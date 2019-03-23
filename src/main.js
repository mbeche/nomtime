import Vue from "vue";
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.use(Vuetify);

firebase.initializeApp({
  projectId: "nomtime-eabe3",
  databaseURL: "https://firestore.googleapis.com/v1/"
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
