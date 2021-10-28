<template>
    <div class="text-dialog">
        <div class="text_dialog_container">
            <div class="dialog_area">
                <div class="data_id">
                    <span>数据 ID:</span>
                    <div class="data_id_space">
                        <!-- <p>Pfizer_2021_10_a</p> -->
                        <input type="text" value="Pfizer_2021_10_a">
                    </div> 
                </div>
                <div class="upload_ds">
                    <input type="radio" class="radio">
                    <span class="up">上传到数据集:</span>
                    <!-- <input type="text" class="text"> -->
                    <div class="input">
                        <p>{{newData}}</p>
                    </div>
                    <div class="icon" @click="toggle">
                        <img :src="dropDownIcon">
                    </div>
                    <div class="dialog" v-if="showDialog">
                        <p class="dialog_select"><span @click="select">dataset_0001</span></p>
                        <p class="dialog_select"><span @click="select">dataset_0002</span></p>
                        <p class="dialog_select"><span @click="select">dataset_0003</span></p>
                        <p class="dialog_select"><span @click="select">dataset_0004</span></p>
                    </div>
                </div>
                <div class="new_dataset">
                    <input type="radio" class="radio">
                    <span>新建数据集:</span>
                    <!-- <input type="text" class="text"> -->
                    <div class="new_dataset_space">
                        <!-- <p>New dataset name</p> -->
                        <input type="text" value="New dataset name">
                    </div>
                </div>
                <div class="btn">
                    <button @click="close">取消</button>
                    <button class="confirm" @click="confirm">确定</button>
                </div>
            </div>
            <div class="dialog" v-if="showDialog">
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropDownIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/drop-down-icon.png",
            showDialog: false,
            newData: ''

        }
    },
    methods: {
        toggle() {
            this.showDialog = !this.showDialog
        },
        close() {
            this.$emit('closeDialog')
        },
        select(e) {
            this.newData = e.target.innerHTML
            this.showDialog = false
        },
        confirm() {
            if(this.newData === '') {
                alert('选项不能为空')
                // throw new Error('选项不能为空')
                return false
            }else {
                this.$router.push('/excel-column-clean')
            }
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        allData: {
            type: Object,
            default: () => ({
                // data: "shujv"
            })
        }
    }	
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.text_dialog_container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    .dialog_area {
        position: absolute;
        width: 500px;
        height: 287px;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid #9b9b9b;
        background: #ffffff;
        .data_id {
            display: flex;
            margin-left: 72px;
            margin-top: 41px;
            span {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
            }
            .data_id_space {
                width: 200px;
                height: 24px;
                border: 1px solid #979797;
                margin-left: 66px;
                input {
                    outline: none;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    border: 0;
                    color: #000000;
                    font-weight: 600;
                    margin-left: 10px;
                    // line-height: 24px;
                }
            }
        }
        .upload_ds {
            display: flex;
            position: relative;
            margin-left: 40px;
            margin-top: 40px;
            .warning {
                color: red;
            }
            .up {
                margin-left: 10px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
                margin-left: 10px;
            }
            .radio{ 
                margin-top: 5px;
            }
            .input {
                width: 200px;
                height: 24px;
                border: 1px solid #979797;
                margin-left: 37px;
                p {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 600;
                    margin-left: 10px;
                    line-height: 24px;
                }
            }
            .icon {
                position: absolute;
                top: 2px;
                right: 115px;
                width: 26px;
                height: 18px;
                img {
                    width: 100%;
                }
            }
            .dialog {
                position: absolute;
                top: 25px;
                right: 109px;
                .dialog_select {
                    width: 200px;
                    height: 24px;
                    margin: -1px;
                    border: 1px solid #979797;
                    background: #ffffff;
                    span {
                        display: block;
                        width: 100%;
                        height: 100%;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                        font-weight: 600;
                        margin-left: 10px;
                    }
                }
            }
            
        }
        .new_dataset {
            display: flex;
            margin-top: 40px;
            margin-left: 40px;
            span {
                margin-left: 15px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #000000;
                font-weight: 600;
            }
            .new_dataset_space {
                width: 200px;
                height: 24px;
                border: 1px solid #979797;
                margin-left: 45px;
                 input {
                    outline: none;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 600;
                    margin-left: 10px;
                    // line-height: 24px;
                    border: 0px;
                }
            }
             .radio{ 
                margin-top: 5px;
            }



        }
        .btn {
            margin-left: 260px;
            margin-top: 27px;
            button {
                display: inline-block;
                width: 80px;
                height: 32px;
                background: #ffffff;
                border: 1px solid #eeedf7;
                color: #000000;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #7163C5;
                font-weight: 600;
                border-radius: 4px;
            }
            .confirm {
                margin-left: 20px;
                background: #7163c5;
                color: #fff;
            }
        }
    }
}

</style>