const c1 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/li/Desktop/git/fed/src/fed-e-task-03-04/code/my-gridsome-site/src/pages/Social.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/li/Desktop/git/fed/src/fed-e-task-03-04/code/my-gridsome-site/src/pages/Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/li/Desktop/git/fed/src/fed-e-task-03-04/code/my-gridsome-site/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--new-vue" */ "/Users/li/Desktop/git/fed/src/fed-e-task-03-04/code/my-gridsome-site/src/pages/New.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/li/Desktop/git/fed/src/fed-e-task-03-04/code/my-gridsome-site/node_modules/gridsome/app/pages/404.vue")

export default [
  {
    path: "/social/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/project/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/new/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
