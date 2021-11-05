<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                   <img :src="model_err" alt="">
                   <p class="clear_data">清除数据</p>
               </div>
               <div class="prompt" v-for="item in allData.dataName" :key="item.id">
                   确定清除 {{item.name}} 数据集中的数据吗?
               </div>
               <button class="clear">清除</button>
               <button @click="close">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model_err: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/modal+header+error.svg"
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dataName: [
                    {id:1,name:'Data_0001',checked:false}
                    // {id:2,name:'Data_0002',checked:false},
                    // {id:3,name:'lalall_003',checked:false},
                    // {id:4,name:'数据_004',checked:false},
                    // {id:5,name:'set',checked:false}
                ],
                projectInfo: '2020.1 - 2021.12 Pfizer raw data'
            })
        }
    },
    methods: {
        close() {
            this.$emit('closeClearDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
.clear_dialog_container {
   height: 100vh;
    width: 100vw;
    background: rgba(37,35,45,0.55);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
}
.dialog_area {
    width: 500px;
    height: 287px;
    border: 1px solid #000;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
.header {
    display: flex;
    position: relative;
    height: 45px;
    border-bottom: 1px solid #000;
    // line-height: 45px;
    // padding-left: 30px;
    img {
        position: absolute;
        top: 17px;
        left: 17px;
        width: 20px;
        height: 20px;
    }
    .clear_data {
        margin-left: 50px;
    }
   
}
.prompt {
    height: 180px;
    line-height: 180px;
    text-align: center;
    
}
button {
    width: 80px;
    height: 32px;
    position: relative;
    left: 250px;
    border: 0;
}
.clear {
    margin-right: 30px;
    background-color:#DB4D71;
    color: #fff;
}
</style>