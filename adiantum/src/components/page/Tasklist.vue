<template>

  <div class="list">
    <el-button type="primary" round size="mini" style="width:100px;height:35px; margin-bottom:15px;" @click="establish">创建任务</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="任务编号" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务名" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="运行模式" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.master }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布模式" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.deployMode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <span style=" text-align: center;">{{scope.row.status==1?'正常':scope.row.status==2?'禁止':scope.row.status==3?'删除':scope.row.status==null?'暂无状态':''}}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="300">
        <template slot-scope="scope">
          <span style=" text-align: center;">{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="360">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateTask($event,scope.row.id)">编辑</el-button>
          <el-button size="mini" @click="findTask($event,scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" v-if="scope.row.status!=2"  @click="stopTask($event,scope.row.id)">禁止</el-button>
          <el-button size="mini" type="danger" @click="deleteTask($event,scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <div class="dialog " v-show="details">
      <div class="dialog-container">
        <div class="dialog-title">{{title}}</div>
        <div class="content">
          <div class="headline claerfix">
            <div class="headline_key fl">key</div>
            <div class="headline_value fl">value</div>
          </div>
          <div class="headline d_content claerfix" v-for="item in test1" :key="item.id">
            <div class="headline_key fl">{{item.name}}</div>
            <div class="headline_value fl">{{item.value}}</div>
          </div>
        </div>
        <!-- <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
                <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
                    {{collapse}}
                </div>
            </div> -->
        <div class="close-btn" @click="closeMask">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <!-- 创建任务 -->
    <div class="dialog " v-show="creat">
      <div class="dialog-container task-container">
        <div style="font-weight: 600; color:#607d93; background-color: #daedf9; height:45px; line-height: 45px;">提交任务</div>
        <el-form ref="form" :model="form" label-width="130px">
          <el-form-item label="名字">
            <el-input class="fr" style="width: 614px;" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="jar包">
            <el-input class="fr" style="width: 614px;" v-model="form.fun"></el-input>
          </el-form-item>
          <el-form-item label="主函数">
            <el-input class="fr" style="width: 614px;" v-model="form.fun"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="btn-box">
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button @click="closeTask">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <!-- 编辑 -->
    <div class="dialog " v-show="task">
      <div class="dialog-container task-container">
        <div style="font-weight: 600; color:#607d93; background-color: #daedf9; height:45px; line-height: 45px;">提交任务</div>
        <el-form ref="form" :model="form" label-width="130px">
          <el-form-item label="名字">
            <el-input class="fr" style="width: 614px;" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="jar包">
            <!-- <el-input class="fr" style="width: 614px;" v-model="form.fun"></el-input> -->
            <el-select v-model="value" placeholder="请选择" @change="selected">
              <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主函数">
            <el-input class="fr" style="width: 614px;" v-model="form.fun"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="btn-box">
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button @click="closeTask">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
import bus from "../common/bus.js";
export default {
  name: "tasklist",
  data() {
    return {
      options: [
        {
          label: "黄金糕"
        },
        {
          label: "双皮奶"
        }
      ],
      value: "",
      creat: false,
      form: {
        name: "",
        jar: "",
        fun: "",
        storage: "",
        auto: false,
        delivery: false,
        type: [],
        nucleus: "",
        num: "",
        restaurants: [],
        state4: "",
        timeout: null
      },
      paging: {
        page: 1,
        size: 10
      },
      details: false,
      task: false,
      name: localStorage.getItem("ms_username"),
      title: "test_xingoo的配置",
      test1: [
        { name: "id", value: "202" },
        { name: "app_id", value: "application_1212212_32323" }
      ],
      tableData: [
        
      ]
    };
  },
  mounted() {
     this.getList();
  
  },
  computed: {},
  methods: {
    // 任务禁止
    stopTask(e,id) {
      console.log(id);
      let jid = id
      let data={
        jid:jid
      }
      console.log(data);
      let ment = this.tableData.filter(e=>{
        return e.id==jid
      })
      this.$http.post(this.$api.stop,this.$qs.stringify(data)).then(res => {
        console.log(res);
      });
    },
    //编辑选择值发生改变
    selected(val){
      this.form.jar = val;
    },
    // 创建任务
    establish() {
      this.creat = true;
    },
    // 获取任务列表
    getList() {
      this.$http
        .get(this.$api.taskList).then(res => {
          if (res.data.code == 200) {
          console.log(res.data.data);
          this.tableData = res.data.data;
        } else {
        }
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    closeTask() {
      this.task = false;
      this.creat = false;
    },
    deleteTask() {
     this.$confirm('此操作将永久删除[' + row.name + '], 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doDelete(row.id);
        }).catch(() => {
        });
      },
      doDelete(ids){
        this.tableLoading = true;
        var _this = this;
        this.$http.delete(this.$api.deleteTask,{params:{id: ids}}).then(resp=> {
          _this.tableLoading = false;
          if (resp && resp.code == 200) {
            var data = resp.data;
            _this.$message({type: data.code, message: data.message});
            _this.loadEmps();
          }
        })  
      },
    closeMask() {
      this.details = false;
    },
    // 打开弹窗
    findTask() {
      console.log();
      this.details = true;
    },
    updateTask(row){
        console.log(row)
        this.dialogTitle = "编辑任务";
        this.emp = row;
        this.emp.name = this.formatDate(row.name);
        this.emp.master = this.formatDate(row.master);
        this.emp.deployMode = this.formatDate(row.deployMode);
        this.emp.status = this.formatDate(row.status);
        this.emp.createTime = this.formatDate(row.createTime);
//        this.emp.nationId = row.nation.id;
//        this.emp.politicId = row.politicsStatus.id;
//        this.emp.departmentId = row.department.id;
//        this.emp.departmentName = row.department.name;
//        this.emp.jobLevelId = row.jobLevel.id;
//        this.emp.posId = row.position.id;
//        delete this.emp.department;
//        delete this.emp.jobLevel;
//        delete this.emp.position;
//        delete this.emp.nation;
//        delete this.emp.politicsStatus;
        delete this.emp.workAge;
        delete this.emp.notWorkDate;
        this.dialogVisible = true;
      },
      createTask(){
        this.dialogTitle = "添加员工";
        this.dialogVisible = true;
        var _this = this;
        this.getRequest("/employee/basic/maxWorkID").then(resp=> {
          if (resp && resp.status == 200) {
            _this.emp.workID = resp.data;
          }
        })
      },
      emptyEmpData(){
        this.emp = {
          name: '',
          master: '',
          deployMode: '',
          status: '',
          createTime: ''
        }
      },
    onSubmit() {
      console.log(this.form);
    },
    // jar下拉
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>


<style scoped lang='less'>
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  z-index: 0 !important;
}
.btn-box {
  margin-left: -120px;
}
div,
.cell {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.el-table_1_column_2 {
  text-align: center;
}
.headline_key,
.headline_value {
  display: inline-block;
}

.headline {
  font-weight: 600;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #d7d7d7;
  color: #000;
  font-size: 16px;
}
.headline_key {
  width: 100px;
  text-align: left;
}
.d_content {
  font-weight: 500;
  font-size: 14px;
  height: 34px;
  line-height: 34px;
}
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  // z-index: 9999;
  .dialog-container {
    width: 800px;
    // height: 100%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    position: relative;
    .dialog-title {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #000;
      font-weight: 600;
      padding: 16px 50px 0 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #e0e0e0;
    }
    .content {
      color: #797979;
      line-height: 26px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .inp {
      margin: 10px 0 0 20px;
      width: 200px;
      height: 40px;
      padding-left: 4px;
      border-radius: 4px;
      border: none;
      background: #efefef;
      outline: none;
      &:focus {
        border: 1px solid #509ee3;
      }
    }
    .btns {
      width: 100%;
      height: 60px;
      // line-height: 60px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: right;
      padding: 0 16px;
      box-sizing: border-box;
      & > div {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        color: #ffffff;
        background: #f1f1f1;
        border-radius: 8px;
        margin-right: 12px;
        cursor: pointer;
      }
      .default-btn {
        color: #787878;
        &:hover {
          color: #509ee3;
        }
      }
      .danger-btn {
        background: #ef8c8c;
        &:hover {
          background: rgb(224, 135, 135);
        }
        &:active {
          background: #ef8c8c;
        }
      }
      .confirm-btn {
        color: #ffffff;
        background: #509ee3;
        &:hover {
          background: #6fb0eb;
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        font-weight: 600;
      }
    }
  }
}
.task-container {
  width: 900px; 
  // height: 700px;
  box-sizing: border-box;

  padding: 20px;
}
.el-form {
  margin-top: 20px;
}
label,
.el-form-item__label {
  width: 135px;
}
div.el-select,div.el-select--small{
  width: 614px!important;
  margin-left: 16px!important;
}
</style>