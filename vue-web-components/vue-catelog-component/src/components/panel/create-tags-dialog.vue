<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                   <img :src="label_icon" class="label" alt="">
                   为2个数据集添加标签
               </div>
               <div class="prompt">
                   <img :src="search_icon" class="search" alt="">
                   <input type="text">
               </div>
               <button class="cancel">取消</button>
               <button class="save" @click="close">保存</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/label.png",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png"
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
    width: 900px;
    height: 550px;
    border: 1px solid #000;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
.header {
    height: 60px;
    border-bottom: 1px solid #000;
    line-height: 60px;
    padding-left: 50px;
}
.prompt {
    height: 400px;
    padding-left: 50px;
    padding-top: 50px;
    border-bottom: 1px solid #000;
}
input {
    height: 24px;
    width: 785px;
    padding-left: 30px;
    outline: none;
}
button {
    width: 60px;
    height: 28px;
    position: relative;
    left: 600px;
    top: 20px;
    border: 0;
}
.cancel {
    margin-right: 30px;
    // background-color:#DB4D71;
    color: #7163C5;
}
.save {
    background-color: #7163C5;
    color: #fff;
}
.search {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 55px;
    top: 112px;
}
.label {
    width: 30px;
    height: 30px;
    position: relative;
    top: 10px;
    left: -10px;
}
</style>