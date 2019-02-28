<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>文件上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <!-- <div class="content-title">支持拖拽</div> -->
      <div class="plugins-tips">
        资源管理
      </div>
      <el-upload class="upload-demo" :on-change="fileChange" :data="{dir: input}" ref="upload" action="http://192.168.15.224:8089/jar/upload" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :limit="3" :on-exceed="handleExceed">

        <el-button style=" background: #fff; color:#20a0ff;border:none;" slot="trigger" size="small" type="primary">
          <i class="el-icon-upload"></i>
          <div>选取文件</div>
        </el-button>
        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->

        <div slot="tip" class="el-upload__tip">只能上传后缀为.jar的文件，且总大小不能超过10M</div>
        <div class="uploadInput">
          <!-- <el-form :rules="rules" :model="input" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文件名称" prop="name" style="width:400px;">
              
            </el-form-item>
          </el-form> -->
          文件名称
          <span style="color:#999;font-size:12px">(必填) </span>:
          <el-input v-model="input" style="width:300px;"></el-input>
        </div>
        <div>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">提交</el-button>
          <el-button :plain="true" @click="open4" :duration="10" v-show="false">错误</el-button>
          <!-- <el-button type="text" @click="openUphint"></el-button> -->
        </div>
      </el-upload>
      <!-- <div class="plugins-tips">
                vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。
                访问地址：<a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>
            </div> -->
      <!-- <div class="crop-demo">
                <img :src="cropImg" class="pre-img">
                <div class="crop-demo-btn">选择图片
                    <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
                </div>
            </div> -->

      <!-- <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
                <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      input: "",
      i: 0,
      rules: {
        name: [{ required: true, message: "请输入文件名称", trigger: "blur" }]
      }
    };
  },
  methods: {
    fileChange(file) {
      this.fileList.push(file);
      // console.log(file);
      // let upFileName = file.name;
      // let index1 = upFileName.lastIndexOf(".");
      // let index2 = upFileName.length;
      // var suffix = upFileName.substring(index1 + 1, index2); //后缀名
      // console.log(suffix);
      // if (suffix != "jar") {
      //   this.openUphint();
      //   this.handleRemove(file);
      //   return;
      // }
    },

    submitUpload() {
      let that = this;
      console.log(that.input);
      let input = that.input;
      let fileList = that.fileList;
      console.log(fileList);
      if (that.input != "") {
        if (fileList.length != 0) {
          that.fileList.forEach(e => {
            e["dir"] = input;
            console.log(e);
            let upFileName = e.name;
            let index1 = upFileName.lastIndexOf(".");
            let index2 = upFileName.length;
            var suffix = upFileName.substring(index1 + 1, index2); //文件后缀名
            if (suffix == "jar") {
              if (e.size < 10485760) {
                that.fileList = fileList;
                that.upload();
                console.log("上传成功");
              } else {
                that.open6();
                return;
              }
            } else {
              that.open5();
              return;
            }
          });
        } else {
          that.open7();
        }
      } else {
        that.open4();
        return;
      }

      // this.$refs.upload.submit();
    },
    // 发送后台请求
    upload() {
      // let f = this.fileList;
      // console.log(this.$refs.upload.submit);
      // let data = {
      //   // dir: f[this.i].dir,
      //   // file: {
      //     lastModified: f[this.i].lastModified,
      //     name: f[this.i].name,
      //     size: f[this.i].size,
      //     type: f[this.i].type,
      //     uid: f[this.i].uid
      //   // }
      // };
      // this.$http
      //   .post(this.$api.uploadJar,this.$qs.stringify(data),
      //   {
      //     headers: { "Content-Type":  "application/octet-stream" }
      //     // headers: { "Content-Type": "multipart/form-data" }
      //   })
      //   .then(res => {
      //     if (res.data.code == 200 && this.i < f.length) {
      //       this.i++;
      //       this.upload();
      //     }
      //   });
      this.$refs.upload.submit();
    },
    // 限制上传个文件数
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handleRemove(file, f) {
      // console.log(file.name);
      let removeFile = this.fileList;
      let obj = file;
      for (let i = 0, len = i < removeFile.length; i < len; i++) {
        if (obj.name == removeFile[i].name) {
          removeFile.splice(i, 1);
        }
      }
      this.fileList = removeFile;
    },
    handlePreview(file) {
      console.log(file);
      // console.log(file);
    },
    open4() {
      this.$message.error("文件名不能为空哦！！！");
    },
    open5() {
      this.$message.error("必须上传后缀名为jar的包哦！！！");
    },
    open6() {
      this.$message.error("文件超出大小！！！");
    },
    open7() {
      this.$message.error("请上传文件！！！");
    }
  }
};
</script>

<style scoped>
.uploadInput {
  margin: 30px 0;
  font-size: 14px;
}
.content-title {
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
.pre-img {
  width: 100px;
  height: 100px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 5px;
}
.crop-demo {
  display: flex;
  align-items: flex-end;
}
.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
}
.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>