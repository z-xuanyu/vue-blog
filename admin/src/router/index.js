import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* 布局 */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/category",
    component: Layout,
    redirect: "/category/create",
    name: "category",
    meta: { title: "分类管理", icon: "category" },
    children: [
      {
        path: "create",
        name: "create-category",
        component: () => import("@/views/category/create.vue"),
        meta: { title: "新建分类", icon: "add" }
      },
      {
        path: "list",
        name: "category-list",
        component: () => import("@/views/category/list.vue"),
        meta: { title: "分类列表", icon: "list" }
      }
    ]
  },
  {
    path: "/tag",
    component: Layout,
    redirect: "/tag/list",
    children: [
      {
        path: "list",
        name: "tag-list",
        component: () => import("@/views/tag/index.vue"),
        meta: { title: "标签管理", icon: "tag" }
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/create",
    name: "article",
    meta: { title: "文章管理", icon: "article" },
    children: [
      {
        path: "create",
        name: "create-article",
        component: () => import("@/views/article/create.vue"),
        meta: { title: "新建文章", icon: "guide" }
      },
      {
        path: "list",
        name: "article-list",
        component: () => import("@/views/article/list.vue"),
        meta: { title: "文章列表", icon: "article-list" }
      },
      {
        path: "edit/:id",
        name: "article-edit",
        hidden: true,
        props: true,
        component: () => import("@/views/article/create.vue")
      }
    ]
  },
  {
    path: "/comment",
    component: Layout,
    redirect: "/comment/not-approved",
    name: "comment",
    meta: { title: "评论管理", icon: "comment" },
    children: [
      {
        path: "not-approved",
        name: "not-approved",
        component: () => import("@/views/comment/not-approved.vue"),
        meta: { title: "未审核", icon: "close" }
      },
      {
        path: "reviewed",
        name: "reviewed",
        component: () => import("@/views/comment/reviewed.vue"),
        meta: { title: "已审核", icon: "check" }
      }
    ]
  },
  {
    path: "/ad",
    component: Layout,
    redirect: "/ad/create",
    name: "ad",
    meta: { title: "广告管理", icon: "ad" },
    children: [
      {
        path: "create",
        name: "create-ad",
        component: () => import("@/views/ad/create.vue"),
        meta: { title: "添加广告", icon: "add" }
      },
      {
        path: "list",
        name: "ad-list",
        component: () => import("@/views/ad/list.vue"),
        meta: { title: "广告列表", icon: "list" }
      }
    ]
  },
  {
    path: "/link",
    component: Layout,
    redirect: "/link/create",
    name: "link",
    meta: { title: "友情链接", icon: "f-link" },
    children: [
      {
        path: "create",
        name: "create-link",
        component: () => import("@/views/link/create.vue"),
        meta: { title: "添加链接", icon: "add" }
      },
      {
        path: "list",
        name: "link-list",
        component: () => import("@/views/link/list.vue"),
        meta: { title: "链接列表", icon: "list" }
      }
    ]
  },
  {
    path: "link",
    component: Layout,
    children: [
      {
        path: "https://www.zhouxuanyu.com",
        meta: { title: "轩钰博客", icon: "link" }
      }
    ]
  },

  // 404 页面  必须放在路由最后
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
