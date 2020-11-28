import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Students from "../views/Students.vue";
import studentsEdit from "../views/_edit/studentsEdit.vue";
import Schools from "../views/Schools.vue";
import schoolsEdit from "../views/_edit/schoolsEdit.vue";
import Classes from "../views/Classes.vue";
import classesEdit from "../views/_edit/classesEdit.vue";
import View from "../views/_view/view.vue";
import erro404 from "../views/_errors/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/students",
    name: "Students",
    component: Students
  },
  {
    path: "/edit/students/:name",
    name: "Edit",
    component: studentsEdit
  },
  {
    path: "/schools",
    name: "Schools",
    component: Schools
  },
  {
    path: "/edit/schools/:name",
    name: "Edit",
    component: schoolsEdit
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes
  },
  {
    path: "/edit/classes/:name",
    name: "Edit",
    component: classesEdit
  },
  {
    path: "/view/:id",
    name: "View",
    component: View
  },
  {
    path: "*",
    name: "Error",
    component: erro404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
