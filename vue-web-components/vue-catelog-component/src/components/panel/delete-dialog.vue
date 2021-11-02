<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                   删除数据集
               </div>
               <div class="prompt">
                   确定删除xxx数据吗?
               </div>
               <button class="clear">清除</button>
               <button @click="close">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('closeDeleteDialog');
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
    height: 45px;
    border-bottom: 1px solid #000;
    line-height: 45px;
    padding-left: 30px;
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