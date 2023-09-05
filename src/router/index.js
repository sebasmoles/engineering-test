import { createRouter, createWebHistory } from "vue-router";
// Layout
import DefaultLayout from "../layout/_default.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "Search people by name",
        },
        component: () => import("@/views/Home.view.vue"),
      },
      {
        path: "/favorites",
        name: "favorites",
        meta: {
          title: "Favorite people",
        },
        component: () => import("@/views/Favorites.view.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        meta: {
          title: "Resource not found",
        },
        component: () => import("@/views/NotFound.view.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Add title
router.beforeEach((to, from, next) => {
  const { title } = to?.meta || {};
  document.title = title ?? "Engineering test";
  next();
});

export default router;
