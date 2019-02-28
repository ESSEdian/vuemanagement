// import Vue from 'vue';
import axios from 'axios';

// 导出域名

export const domain = 'http://192.168.13.142:8089/';
export const domain1 = 'http://192.168.13.142:8081/';
export const domain2 = 'http://192.168.13.142:8086/';



// 默认导出整个接口配置
// export default {
//     // 账号管理
                  

// // 任务/文件管理
//     create: `/job/create`,         // 任务添加
//     stop: `/job/stop`,             //任务停止
//     delete: `/job/delete`,          //任务删除
//     list: `/plan/list`,              //任务列表
//     find: `jar/find`,                //任务详情   
//     filelist:`/jar/list`,            //文件列表
//     upload:`/jar/upload`            //文件上传

// };

axios.defaults.baseURL = domain1;

export const apiList = '/plan/list'