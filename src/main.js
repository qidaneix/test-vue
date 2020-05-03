import Vue from "vue";
import App from "./App.vue";
import selectComp from "./select-comp.vue";

Vue.component("select-comp", selectComp);

new Vue({
  render: h => h(App)
}).$mount("#app");
