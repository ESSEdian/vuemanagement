webpackJsonp([5],{TuML:function(e,t){},eBgb:function(e,t){},efBC:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("bOdI"),n=l.n(a),s=l("fZjL"),o=l.n(s),r=(l("8+FI"),l("vMJZ")),u=(l("mtWM"),l("mw3O"),{name:"dashboard",data:function(){return{activeName:"workspace",restaurants:[],state3:"",value5:[],forms:[],options:[{value:"30",label:"男装",children:[{value:"50012167",label:"休闲装",children:[{value:"111703",label:"上衣"},{value:"121266001",label:"裤子"},{value:"120950002",label:"T恤"},{value:"120894001",label:"衬衫"}]},{value:"30",label:"运动装",children:[{value:"111703",label:"速干T恤"},{value:"121266001",label:"卫衣"},{value:"120950002",label:"POLO衫"},{value:"120894001",label:"夹克"}]}]},{value:"30",label:"女装",children:[{value:"111703",label:"休闲装",children:[{value:"121266001",label:"上衣"},{value:"120950002",label:"裙子"},{value:"120894001",label:"连衣裙"},{value:"120894001",label:"吊带裙"},{value:"120894001",label:"衬衫"}]},{value:"30",label:"运动装",children:[{value:"radio",label:"短裤"},{value:"checkbox",label:"热裤"},{value:"input",label:"沙滩裤"},{value:"input-number",label:"运动裤"},{value:"select",label:"防晒外套"},{value:"cascader",label:"速干T恤"},{value:"switch",label:"健身裤"},{value:"slider",label:"修身裤"},{value:"time-picker",label:"小脚裤"},{value:"date-picker",label:"阔腿裤"},{value:"datetime-picker",label:"长裙"},{value:"upload",label:"公主裙"},{value:"rate",label:"七分裤"},{value:"form",label:"九分裤"}]},{value:"30",label:"家居服",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"箱包",children:[{value:"axure",label:"皮包"},{value:"sketch",label:"双肩包"},{value:"jiaohu",label:"单肩包"}]}],options1:[{value:"选项1",label:"爆款"},{value:"选项2",label:"特卖"},{value:"选项3",label:"精选"},{value:"选项4",label:"物美价廉"},{value:"选项5",label:"人气最高"}],tags:[],categorys:[],plats:[{value:"2",label:"天猫"}],value:"",creat:!1,from:[],form:{id:"",department:"",projectId:"",projectName:"",platform:[],projectDesc:"",userIdList:[],delivery:!1,type:[],nucleus:"",tags:[],restaurants:[],categorys:"",timeout:null},search:"",total:0,paging:{page:1,limit:10},details:!1,task:!1,name:localStorage.getItem("ms_username"),title:"项目详情",test1:[{name:"id",value:"202"},{name:"app_id",value:"application_1212212_32323"}],list:[],cloudtable:[],clouddata:[],cloudmodel:[],usergroup:[],workspacelist:[],edit:{id:"",department:"",projectId:"",projectName:"",platform:[],projectDesc:"",userIdList:[],delivery:!1,type:[],nucleus:"",tags:[],restaurants:[],categorys:"",timeout:null},users:[]}},mounted:function(){this.getWorkspace(),this.userLists(),this.getCloudTable(),this.getCloudData(),this.getCloudModel(),this.restaurants=this.loadAll()},computed:{tables:function(){var e=this.search;return e?this.list.filter(function(t){return o()(t).some(function(l){return String(t[l]).toLowerCase().indexOf(e)>-1})}):this.list}},methods:n()({getParams:function(){var e=this.$route.query.id;console.log("bb"+e)},tableHeaderColor:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(0===t)return"background-color: #F7F6Fd;color: #999;font-weight: 700;"},loadAll:function(){return[{value:"电商运营事业部"},{value:"品牌运营事业部"},{value:"上海分公司"}]},querySearch:function(e,t){var l=this.restaurants;t(e?l.filter(this.createFilter(e)):l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){console.log(e)},handleIconClick:function(e){console.log(e)},selected:function(e){this.form.jar=e},establish:function(){this.creat=!0},getCloudTable:function(){var e=this,t=this.$route.query.id;this.$http.get(r.e+"?pj_id="+t).then(function(t){e.cloudtable=t.data.data})},getCloudData:function(){var e=this,t=this.$route.query.id;this.$http.get(r.c+"?pj_id="+t).then(function(t){e.clouddata=t.data.data})},getCloudModel:function(){var e=this,t=this.$route.query.id;this.$http.get(r.d+"?pj_id="+t).then(function(t){e.cloudmodel=t.data.data})},getUserGroup:function(){var e=this,t=this.$route.query.id;this.$http.get(r.x+"?pj_id="+t).then(function(t){e.usergroup=t.data.data})},getWorkspace:function(){var e=this,t=this.$route.query.id;this.$http.get(r.y+"?pj_id="+t).then(function(t){e.workspacelist=t.data.data})},userLists:function(){var e=this;this.$http.get(r.a).then(function(t){e.users=t.data.data.userList})},handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},closeTask:function(){this.task=!1,this.creat=!1},open7:function(){var e=this;this.$confirm("此操作将解除用户关联, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e.$message({type:"success",message:"解除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消解除"})})},closeMask:function(){this.details=!1},open4:function(){console.log(),this.details=!0},opentask:function(e){this.task=!0,this.edit.id=e.id,this.edit.projectName=e.projectName,this.edit.department=e.department,this.edit.platform=e.platform,this.edit.projectId=e.projectId,this.edit.tags=e.tags,this.edit.projectDesc=e.projectDesc,this.edit.userIdList=e.userIdList},querySearchAsync:function(e,t){var l=this.restaurants,a=e?l.filter(this.createStateFilter(e)):l;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t(a)},3e3*Math.random())},createStateFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}}},"handleSelect",function(e){console.log(e)}),watch:{$route:function(e){this.getParams(),this.getWorkspace()}}}),i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"workspacelist"},[l("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{name:"workspace"}},[l("span",{attrs:{slot:"label"},slot:"label"},[l("i",{staticClass:"el-icon-ali-shuzhuogongzuoqu"}),e._v("工作区")]),e._v(" "),l("el-table",{attrs:{data:e.workspacelist,"header-cell-style":e.tableHeaderColor}},[e._v('>\n     style="width: 100%">\n      '),l("el-table-column",{attrs:{label:"工作区名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.wp_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"成员数量",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.count.user))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"授权报表数量",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.count.dashboard))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"授权模型数量",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.count.model))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"授权数据数量",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.count.datasource))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"创建人",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.creator))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"创建时间",width:"340"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.create_time))])]}}])})],1)],1),e._v(" "),l("el-tab-pane",{attrs:{label:"固定报表",name:"table"}},[l("span",{attrs:{slot:"label"},on:{click:function(t){e.getCloudTable()}},slot:"label"},[l("i",{staticClass:"el-icon-ali-baobiao1"}),e._v("固定报表")]),e._v(" "),l("div",{staticClass:"cloudtable"},[l("el-table",{attrs:{data:e.cloudtable,"header-cell-style":e.tableHeaderColor}},[e._v('>\n     style="width: 100%">\n      '),l("el-table-column",{attrs:{label:"固定报表名称",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.table_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"关联模型",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.model_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"最近更新时间",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.update_time))])]}}])})],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"数据",name:"data"}},[l("span",{attrs:{slot:"label"},on:{click:function(t){e.getCloudData()}},slot:"label"},[l("i",{staticClass:"el-icon-ali-shuju"}),e._v("数据")]),e._v(" "),l("div",{staticClass:"clouddata"},[l("el-table",{attrs:{data:e.clouddata,"header-cell-style":e.tableHeaderColor}},[e._v('>\n     style="width: 100%">\n      '),l("el-table-column",{attrs:{label:"数据源名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.cloud_data_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"获取类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.update_type))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"最近更新时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.update_time))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"创建人",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.creator))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.order_time))])]}}])})],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"模型",name:"model"}},[l("span",{attrs:{slot:"label"},on:{click:function(t){e.getCloudModel()}},slot:"label"},[l("i",{staticClass:"el-icon-ali-moxing"}),e._v("模型")]),e._v(" "),l("div",{staticClass:"cloudmodel"},[l("el-table",{attrs:{data:e.cloudmodel,"header-cell-style":e.tableHeaderColor}},[e._v('>\n     style="width: 100%">\n      '),l("el-table-column",{attrs:{label:"模型名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.cloud_model_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"执行周期",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(0))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"关联数据源数量",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(0))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"最近更新时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.update_time))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"创建人",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.creator))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.order_time))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:e.open4}},[e._v("查看")])]}}])})],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"用户组",name:"userGroup"}},[l("span",{attrs:{slot:"label"},on:{click:function(t){e.getUserGroup()}},slot:"label"},[l("i",{staticClass:"el-icon-ali-iconfontcolor18"}),e._v("用户组")]),e._v(" "),l("div",{staticClass:"usergroup"},[l("el-table",{attrs:{data:e.usergroup,"header-cell-style":e.tableHeaderColor}},[e._v('>\n     style="width: 100%">\n      '),l("el-table-column",{attrs:{label:"用户名",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.user_name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"站点角色",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.roles))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"登陆次数",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.login_times))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"邮件地址",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.email))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"添加人",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.creator))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"最近登录时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.row.last_login_time))])]}}])})],1)],1)])],1)],1)},staticRenderFns:[]};var c=l("VU/8")(u,i,!1,function(e){l("TuML"),l("eBgb")},"data-v-458d4aaa",null);t.default=c.exports}});