import Vue from "vue";
import { keep } from "./keep";
import store from "./keep";

Vue.prototype.$xxOpen = url => {
  if (keep.has(url)) {
    store;
  }
};

Vue.prototype.$xxClose = url => {};

Vue.prototype.$xxRefresh = url => {};
