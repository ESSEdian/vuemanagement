webpackJsonp([11],{"7xRF":function(t,e){},M0gQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("bOdI"),a=n.n(o),s=n("mvHQ"),i=n.n(s),l=n("fZjL"),r=n.n(l),c=(n("8+FI"),n("vMJZ")),u=(n("mtWM"),n("mw3O"),{name:"dashboard",data:function(){return{restaurants:[],state3:"",value5:[],forms:[],downloadLoading:!1,value:"",creat:!1,from:[],form:{id:"",department:"",projectId:"",projectName:"",platform:[],projectDesc:"",userIdList:[],delivery:!1,type:[],nucleus:"",tags:[],restaurants:[],categorys:"",timeout:null},search:"",psearch:"",tsearch:"",total:0,paging:{page:1,limit:10},details:!1,task:!1,name:localStorage.getItem("ms_username"),title:"项目详情",test1:[{name:"id",value:"202"},{name:"app_id",value:"application_1212212_32323"}],list:[],edit:{id:"",department:"",projectId:"",projectName:"",userName:"",platform:[],projectDesc:"",userIdList:[],delivery:!1,type:[],nucleus:"",tags:"",restaurants:[],categorys:"",timeout:null},users:[],project:[],table:[],selectRow:[],pselectRow:[],tselectRow:[],selectData:[],multipleSelection:[],tables:[],user:[]}},mounted:function(){this.getTask(),this.userLists(),this.projectList(),this.tableList(),this.restaurants=this.loadAll()},computed:{handleuser:function(){var t=this.search;return t?this.users.filter(function(e){return r()(e).some(function(n){return String(e[n]).indexOf(t)>-1})}):this.users},handleproject:function(){var t=this.psearch;return t?this.project.filter(function(e){return r()(e).some(function(n){return String(e[n]).indexOf(t)>-1})}):this.project},handletable:function(){var t=this.tsearch;return t?this.table.filter(function(e){return r()(e).some(function(n){return String(e[n]).indexOf(t)>-1})}):this.table}},methods:a()({changeProject:function(t){this.multipleSelection=t;var e=this.multipleSelection.map(function(t){return t.id}),n=e.toString();console.log(e,n)},changeTable:function(t){this.tables=t;var e=this.tables.map(function(t){return t.id}),n=e.toString();console.log(e,n)},handleSelectionChange:function(t){this.selectData=t;var e=this.selectData.map(function(t){return t.id}),n=e.toString();console.log(e,n)},rowClass:function(t){t.row;var e=t.rowIndex;if(this.selectRow.includes(e))return{"background-color":"rgba(185, 221, 249, 0.75)"}},prowClass:function(t){t.row;var e=t.rowIndex;if(this.pselectRow.includes(e))return{"background-color":"rgba(185, 221, 249, 0.75)"}},trowClass:function(t){t.row;var e=t.rowIndex;if(this.tselectRow.includes(e))return{"background-color":"rgba(185, 221, 249, 0.75)"}},jump:function(t){console.log("aa"+t.id),this.$router.push({path:"/projectDetail",query:{id:t.id}})},tableHeaderColor:function(t){t.row,t.column;var e=t.rowIndex;t.columnIndex;if(0===e)return"background-color: #F7F6Fd;color: #999;font-weight: 700;"},loadAll:function(){return[{value:"电商运营事业部"},{value:"品牌运营事业部"},{value:"上海分公司"}]},querySearch:function(t,e){var n=this.restaurants;e(t?n.filter(this.createFilter(t)):n)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){console.log(t)},handleIconClick:function(t){console.log(t)},handleSizeChange:function(t){this.paging.page=t,this.getTask()},handleCurrentChange:function(t){this.paging.page=t,this.getTask()},selected:function(t){this.form.jar=t},establish:function(){this.creat=!0},getTask:function(){var t=this,e=this.paging;this.$http.get(c.m+"?page="+e.page+"&limit="+e.limit).then(function(e){console.log(e),t.total=e.data.pagination.total,t.list=e.data.data})},projectList:function(){var t=this;this.$http.get(c.l).then(function(e){console.log(e),t.project=e.data.data.projectList})},toggleSelection:function(){var t=this,e=this.selectData.map(function(t){return t.id}),n=e.toString();console.log(e,n);var o=this.multipleSelection.map(function(t){return t.id}),a=o.toString();console.log(o,a);var s=this.tables.map(function(t){return t.id}),i=s.toString();console.log(s,i);var l=new URLSearchParams;l.append("users[]",e),l.append("projects[]",o),l.append("tables[]",s),console.log(l+"22"),this.downloadLoading=!0,e.length>0&&o.length>0&&s.length>0?this.$http.post(c.p,l).then(function(e){console.log(e),t.userLists(),t.tableList(),t.projectList(),t.$message("关联成功"),t.downloadLoading=!1},function(e){t.$message("关联失败"),console.log(error)}):this.$message("关联失败! 用户,项目和报表必须同时选中")},tableList:function(){var t=this;this.$http.get(c.n).then(function(e){console.log(e),t.table=e.data.data.tableList})},userLists:function(){var t=this;this.$http.get(c.a).then(function(e){console.log(e),t.users=e.data.data.userList})},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e)},handleChange:function(t){console.log(t)},closeTask:function(){this.task=!1,this.creat=!1},open7:function(){var t=this;this.$confirm("此操作将解除用户关联, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){t.$message({type:"success",message:"解除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消解除"})})},closeMask:function(){this.details=!1},open4:function(){console.log(),this.details=!0},opentask:function(t){this.task=!0,this.edit.id=t.id,this.edit.projectName=t.projectName,this.edit.userName=t.userName,this.edit.department=t.department,this.edit.platform=t.platform,this.edit.projectId=t.projectId,this.edit.tags=t.tags.split(",");var e=t.userIdList.split(",").filter(function(t){return""!==t&&!0}).map(function(t){return 1*t});console.log(e),this.edit.projectDesc=t.projectDesc,this.edit.userIdList=e},onSubmit:function(){var t=this;console.log(this.form),this.$http.post(c.k,i()(this.form),{headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e),t.$message("创建成功"),t.creat=!1,t.form=!1,t.getTask()},function(e){t.$message("创建失败"),console.log(error)})},handleChangeEdit:function(){var t=this;console.log(this.edit),this.$http.post(c.j,i()(this.edit),{headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e),t.$message("修改成功"),t.task=!1,t.edit=!1,t.getTask()},function(e){t.$message("修改失败"),console.log(error)})},querySearchAsync:function(t,e){var n=this.restaurants,o=t?n.filter(this.createStateFilter(t)):n;clearTimeout(this.timeout),this.timeout=setTimeout(function(){e(o)},3e3*Math.random())},createStateFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}}},"handleSelect",function(t){console.log(t)}),watch:{selectData:function(t){var e=this;this.selectRow=[],t.length>0&&t.forEach(function(t,n){e.selectRow.push(e.users.indexOf(t))})},tables:function(t){var e=this;this.tselectRow=[],t.length>0&&t.forEach(function(t,n){e.tselectRow.push(e.table.indexOf(t))})},multipleSelection:function(t){var e=this;this.pselectRow=[],t.length>0&&t.forEach(function(t,n){e.pselectRow.push(e.project.indexOf(t))})}}}),h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"justify-content":"space-between",display:"flex"}},[n("div",{staticClass:"users"},[n("div",[n("el-input",{staticStyle:{width:"80%","margin-bottom":"20px"},attrs:{type:"search",placeholder:"请输入用户关键字"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.handleuser,"header-cell-style":t.tableHeaderColor,height:"450","row-style":t.rowClass},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),n("el-table-column",{attrs:{label:"用户",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.row.userName))])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"project"},[n("div",[n("el-input",{staticStyle:{width:"80%","margin-bottom":"20px"},attrs:{type:"search",placeholder:"请输入项目关键字"},model:{value:t.psearch,callback:function(e){t.psearch=e},expression:"psearch"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.handleproject,"header-cell-style":t.tableHeaderColor,height:"450","row-style":t.prowClass},on:{"selection-change":t.changeProject}},[n("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),n("el-table-column",{attrs:{label:"项目",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.row.projectName))])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"table"},[n("div",[n("el-input",{staticStyle:{width:"80%","margin-bottom":"20px"},attrs:{type:"search",placeholder:"请输入报表关键字"},model:{value:t.tsearch,callback:function(e){t.tsearch=e},expression:"tsearch"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.handletable,"header-cell-style":t.tableHeaderColor,height:"450","row-style":t.trowClass},on:{"selection-change":t.changeTable}},[n("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),n("el-table-column",{attrs:{label:"报表",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.row.tableName))])]}}])})],1)],1)]),t._v(" "),n("el-button",{staticStyle:{width:"30%","margin-top":"50px"},attrs:{type:"primary",loading:t.downloadLoading},on:{click:function(e){t.toggleSelection()}}},[t._v("确认")])],1)},staticRenderFns:[]};var d=n("VU/8")(u,h,!1,function(t){n("7xRF")},"data-v-52684437",null);e.default=d.exports}});