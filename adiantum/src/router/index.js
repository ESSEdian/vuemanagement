import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/jarlist'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                    // 文件列表
                {
                    path: '/jarlist',
                    component: resolve => require(['../components/page/JarList.vue'], resolve),
                    meta: { title: '文件列表' }
                },
                {
                    // 文件上传
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // 任务列表
                    path: '/tasklist',
                    component: resolve => require(['../components/page/Tasklist.vue'], resolve),
                    meta: { title: '任务列表' }   
                },
                {
                    // 工作列表
                    path: '/joblist',
                    component: resolve => require(['../components/page/Joblist.vue'], resolve),
                    meta: { title: '工作列表' }   
                },
                {
                    // 计划列表
                    path: '/planlist',
                    component: resolve => require(['../components/page/Planlist.vue'], resolve),
                    meta: { title: '计划列表' }   
                },
               
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
      
    ]
})
