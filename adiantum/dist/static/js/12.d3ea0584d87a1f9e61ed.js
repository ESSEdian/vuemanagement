webpackJsonp([12],{"9fPc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Q3je"),n={data:function(){return{fileList:[],input:"",i:0,rules:{name:[{required:!0,message:"请输入文件名称",trigger:"blur"}]}}},methods:{fileChange:function(e){this.fileList.push(e.raw)},submitUpload:function(){var e=this;console.log(e.input);var t=e.input,i=e.fileList;console.log(i),""!=e.input?0!=i.length?e.fileList.forEach(function(s){s.dir=t,console.log(s);var n=s.name,a=n.lastIndexOf("."),o=n.length;"jar"==n.substring(a+1,o)?s.size<104857600?(e.fileList=i,e.upload(),console.log("上传成功")):e.open6():e.open5()}):e.open7():e.open4()},upload:function(){var e=this,t=this.fileList;console.log(t[this.i]);var i={lastModified:t[this.i].lastModified,name:t[this.i].name,size:t[this.i].size,type:t[this.i].type,uid:t[this.i].uid};this.$http.post(s.a,this.$qs.stringify(i),{headers:{"Content-Type":"multipart/form-data"}}).then(function(i){200==i.data.code&&e.i<t.length&&(e.i++,e.upload())})},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},handleRemove:function(e,t){for(var i=this.fileList,s=e,n=0,a=n<i.length;n<a;n++)s.name==i[n].name&&i.splice(n,1);this.fileList=i},handlePreview:function(e){console.log(e)},open4:function(){this.$message.error("文件名不能为空哦！！！")},open5:function(){this.$message.error("必须上传后缀名为jar的包哦！！！")},open6:function(){this.$message.error("文件超出大小！！！")},open7:function(){this.$message.error("请上传文件！！！")}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[e._v("文件上传")])],1)],1),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"plugins-tips"},[e._v("\n      资源管理\n    ")]),e._v(" "),i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":e.fileChange,action:"http://192.168.15.204:8089/jar/upload","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,limit:3,"on-exceed":e.handleExceed}},[i("el-button",{staticStyle:{background:"#fff",color:"#20a0ff",border:"none"},attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[i("i",{staticClass:"el-icon-upload"}),e._v(" "),i("div",[e._v("选取文件")])]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传后缀为.jar的文件，且总大小不能超过10M")]),e._v(" "),i("div",{staticClass:"uploadInput"},[e._v("\n        文件名称\n        "),i("span",{staticStyle:{color:"#999","font-size":"12px"}},[e._v("(必填) ")]),e._v(":\n        "),i("el-input",{staticStyle:{width:"300px"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),e._v(" "),i("div",[i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("提交")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{plain:!0,duration:10},on:{click:e.open4}},[e._v("错误")])],1)],1)],1)])},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(e){i("Epoq")},"data-v-13be49e8",null);t.default=o.exports},Epoq:function(e,t){}});