import Vue from "vue";
import Router from "vue-router";
import A from "../pages/a.vue";
import B from "../pages/b.vue";
import C from "../pages/c.vue";
Router.prototype.goBack = function () {
  this.isback = true;
  history.go(-1);
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B
    },
    {
      path: '/c',
      component: C
    }
  ]
})
