<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
                <div class="header">
                        <span>数据版本</span>
                </div>
                <div class="prompt">
                    
                </div>
                <div class="btn">
                    <button class="cancel" @click="close">取消</button>
                    <button class="save btn-margin" @click="save" >确定</button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
        }
    },
    props: {},
    computed: {},
    mounted() {},
    watch: {},
    methods: {
        save() {
            const event = new Event("event")
            event.args = {
                callback: "runDag",
                element: this,
                param: {
                    name: "runDag",
                    timeout: parseFloat(this.selectTimeout),
                    jsonValue: this.jsonValue == "" ? {} : this.jsonValue
                }
            }
            this.$emit('confirmeRunDag', event)
        },
        close() {
            this.$emit('closeRunDagDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.clear_dialog_container {
    height: 100vh;
    width: 100vw;
    // background: rgba(37,35,45,0.55);
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
    background: rgba(0,0,0,0.31);
}
.dialog_area {
    width: 400px;
    height: 360px;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}
.header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    padding: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close_icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
.prompt {
    
}
.btn {
    position: absolute;
    right: 23px;
    bottom: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 530px;
    box-sizing: border-box;
    button {
        width: 60px;
        height: 28px;
        border: 0;
        cursor: pointer;
    }
    .cancel {
        margin-right: 5px;
        // background-color:#DB4D71;
        color: #7163C5;
    }
    .save {
        background-color: #7163C5;
        color: #fff;
    }
    .btn-margin {
        margin: 5px;
    }
}
</style>