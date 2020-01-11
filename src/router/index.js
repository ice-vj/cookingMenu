import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/homePage.vue';
import menu from '../menus/menu.vue';
import order from '../menus/order.vue';

// 导入路由配置对象
let pages = [
    // 主页
    {
        path: '/',
        title: 'Home',
        component: home,
      
    },
    {
        path: '/menu',
        title: 'menu',
        component: menu,
    },
    {
        path: '/order',
        title: 'order',
        component: order,
    },

    
];

// 补全名称
(function completeName(routes) {
    if (!Array.isArray(routes)) {
        return;
    }
    routes.forEach(route => {
        route.name = route.name || Symbol();
        if (route.children) {
            completeName(route.children);
        }
    });
})(pages);

//  初始化router options
const options = {
    history: false,
    routes: pages,
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || {
            x: 0,
            y: 0
        };
    }
};

Vue.use(Router);

//  创建Router实例
const router = new Router(options);

// //  将'/'重定向到'/index'页面（主页效果）
// router.beforeEach((to, from, next) => {
//     if (to.fullPath === '/') router.push({path: '/index'});
//     next();
// });

export default router;
