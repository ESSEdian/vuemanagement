<template>
    <div class="dialog" v-show="details">
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
</template>
<script>
import bus from './bus'
export default {
    data () {
        return {
            details:false,
            title:'test_xingoo的配置',
            test1:[
                {name:'id',value:'202'},
                {name:'app_id',value:'application_1212212_32323'}
                ]
        }
    },
    created () {
        
    },
    // 公用方法
     methods: {
        //   this.bus.$on('collapse',(r)=>{
        //     console.log(r);
        //     this.collapse!=this.collapse
        // })
        closeMask(){
            console.log(this.details);
            this.details = false
        },
        open(){
              this.bus.$on('details',(r)=>{
            console.log(r);
        })
        }
     },
     watch: {
        
     } 
};
</script>

<style lang='less' scoped>
.headline_key,.headline_value{
    display: inline-block;
}

.headline{
    font-weight: 600;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d7d7d7;
    color: #000;
    font-size: 16px;
}
.headline_key{
    width: 100px;
    text-align: left;
}
.d_content{
    font-weight: 500;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
}
.dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 800px;
            // height: 100%;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            position: relative;
            .dialog-title{
                width: 100%;
                height: 60px;
                font-size: 18px;
                color: #000;
                font-weight: 600;
                padding: 16px 50px 0 20px;
                box-sizing: border-box;
                border-bottom: 1px solid #e0e0e0;
            }
            .content{
                color: #797979;
                line-height: 26px;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .inp{
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
                &:focus{
                    border: 1px solid #509EE3;
                }
            }
            .btns{
                width: 100%;
                height: 60px;
                // line-height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                padding: 0 16px;
                box-sizing: border-box;
                & > div{
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
                .default-btn{
                    color: #787878;
                    &:hover{
                        color: #509EE3; 
                    }
                }
                .danger-btn{
                    background: #EF8C8C;
                    &:hover{
                        background: rgb(224, 135, 135);
                    }
                    &:active{
                        background: #EF8C8C;
                    }
                }
                .confirm-btn{
                    color: #ffffff;
                    background: #509EE3;
                    &:hover{
                        background: #6FB0EB;
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 16px;
                right: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>
