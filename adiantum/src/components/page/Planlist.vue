<template>
  <div class="list">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="计划编号" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="计划名称" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style=" text-align: center;">{{ scope.row.name}}</span>
        </template>
      </el-table-column>                                                                                                                                                           
      <el-table-column label="邮箱" width="300">
        <template slot-scope="scope">
          <span style=" text-align: center;">{{ scope.row.email }}</span>
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
      <el-table-column label="操作" width="500">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="updatePlan($event,scope.row.id)">编辑</el-button> 
          <el-button size="mini" type="primary" @click="findPlan($event,scope.row.id)">查看</el-button> 
          <el-button size="mini" type="danger" v-if="scope.row.status!=2"  @click="stopPlan($event,scope.row.id)">禁止</el-button>
          <el-button size="mini" type="danger" @click="deletePlan($event,scope.row.id)">删除</el-button>
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
    <!-- 编辑 -->
    <div class="dialog " v-show="task">
      <div class="dialog-container task-container">
        <div style="font-weight: 600; color:#607d93; background-color: #daedf9; height:45px; line-height: 45px;">提交任务</div>
        <el-form ref="form" :model="form" label-width="130px">
          <el-form-item label="名字">
            <el-input class="fr" style="width: 614px;" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="jar包">
            <el-input class="fr" style="width: 614px;" v-model="form.jar"></el-input>
          </el-form-item>
          <el-form-item label="主函数">
            <el-input class="fr" style="width: 614px;" v-model="form.fun"></el-input>
          </el-form-item>
          <el-form-item label="配置">
            <div>
              <span class="fl" style="color:#606266; padding-left: 18px;">Driver内存: saark.drivur.memory</span>
              <el-input class="fr" style="margin-bottom: 4px; width: 300px;" v-model="form.storage"></el-input>
            </div>
            <div>
              <span class="fl" style="color:#606266; margin: auto 0; padding-left: 18px; display: inline-block; width:200px;">Driver内存: saark.drivur.memory</span>
              <el-input class="fr" style="margin-bottom: 4px;width: 300px;" v-model="form.nucleus"></el-input>
            </div>
            <div>
              <span class="fl" style="color:#606266; padding-left: 18px;">Driver内存: saark.drivur.memory</span>
              <el-input class="fr" style="margin-bottom: 4px; width: 300px;" v-model="form.num"></el-input>
            </div>
            <div>
              <span class="fl" style="color:#606266; padding-left: 18px;">Driver内存: saark.drivur.memory</span>
              <el-input class="fr" style="margin-bottom: 4px; width: 300px;" v-model="form.num"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="告警邮件地址">
            <el-input class="fr" style="width: 614px;" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="是否开启告警功能" style="width:130px;">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="是否开启自动重启" style="width:130px;">
            <el-switch v-model="form.auto"></el-switch>
          </el-form-item>
          <el-form-item>
            <div class="btn-box">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
  name: "planlist",
  data() {
    return {
      form: {
        name: "",
        jar: "",
        fun: "",
        storage: "",
        auto: false,
        delivery: false,
        type: [],
        nucleus: "",
        num: ""
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
        {
          date: "",
          name: ""
        },
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 任务禁止
    stopPlan(e,id) {
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
    getList() {
      this.$http.get(this.$api.planList).then(res => {
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
    },
    deletePlan() {
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
    findPlan() {
      console.log();
      this.details = true;
    },
    updatePlan() {
      this.task = true;
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>


<style scoped lang='less'>
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
  z-index: 9999;
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
</style>
