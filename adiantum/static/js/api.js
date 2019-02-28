// 导出域名
// export const domain = 'http://172.16.2.23:9095/';
export const domain = 'http://192.168.15.224:8089/';

// 默认导出整个接口配置
export default {
// 账号管理
                  

// 任务/文件管理
    updateTask: `/task/update`,           //任务更新
    createTask: `/task/create`,           //任务创建
    stopTask:   `/task/stop`,             //任务停止
    deleteTask: `/task/delete`,           //任务删除   
    findTask:   `task/find`,              //查看任务详情
    taskList:   `/task/list`,             //任务列表
    planList:   `/plan/list`,             //计划列表
    createPlan: `/plan/create`,           //计划创建
    fileList:   `/jar/list`,              //文件列表
    uploadJar:  `/jar/upload`,            //文件上传
    deleteJar:  `/jar/delete`,            //删除文件  
    jobList:    `/job/list`               //工作列表
};