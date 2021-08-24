<template>
    <div class="custom-mapping">
        <div class="mapping-header">
            <span class="heading-medium">自定排序</span>
            <div class="icon_cross cursor-pointer"></div>
        </div>

        <div class="mapping-main">
            <div class="mapping-main-oneside">
                <span class="heading-small">源条目</span>
                <div class="oneside-border">
                    <div class="oneside-main">
                        <div v-for="(list,index) in list1" :key="index" class="single-list">{{list}}</div>
                    </div>
                </div>
            </div>

            <div class="mapping-main-oneside">
                <span class="heading-small">Master文件检索结果</span>
                <div class="oneside-border">
                    <div class="oneside-main">
                        <div v-for="(list,index) in list2" :key="index" class="single-list">{{list}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mapping-bottom">
            <button class="cancel-button btn_secondary_initial">取消</button>
            <button class="confirm-button btn_primary-initial">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list1: ['Name_1','Name_2','Name_3','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4'],
            list2: ['Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4','Name_4']
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    button {
        border: none;
        cursor: pointer;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .heading-small {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    .heading-medium {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 24px;
        font-weight: 400;
    }

    .btn_secondary_initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #57565F;
        letter-spacing: 0;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .btn_primary-initial {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    .icon_cross {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.784 5.089l.07.057L10.5 9.793l4.646-4.647a.5.5 0 0 1 .765.638l-.057.07-4.647 4.646 4.647 4.646a.5.5 0 0 1-.638.765l-.07-.057-4.646-4.647-4.646 4.647a.5.5 0 0 1-.765-.638l.057-.07L9.793 10.5 5.146 5.854a.5.5 0 0 1 .638-.765z' fill='%2357565F' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center/100% !important; 
    }

    .custom-mapping {
        display: flex;
        flex-direction: column;
        width: 800px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid #ddd;

        .mapping-header {
            display: flex;
            justify-content: space-between;
            height: 56px;
            padding: 20px 20px 0 20px;
            border-bottom: 1px solid rgba(37,35,45,0.08);
            background-color: #FAFBFC;
        }

        .mapping-main {
            display: flex;
            justify-content: space-between;
            padding: 0 97px 0 103px;
            margin: 19px 0 24px 0;

            .mapping-main-oneside {
                width: 280px;
                display: flex;
                flex-direction: column;

                .oneside-border {
                    border: 1px solid rgba(37,35,45,0.12);
                    border-radius: 2px;
                    height: 534px;
                    margin-top: 12px;
                    padding: 4px;

                    .oneside-main {
                        height: 100%;
                        width: 100%;
                        overflow-y: scroll;
                        padding-right: 4px;
                        &::-webkit-scrollbar { 
                            width: 3px;
                        }

                        &::-webkit-scrollbar-thumb {
                            background-color: #BCBAC4;
                            border-radius: 3px;
                        }

                        .single-list {
                            height: 28px;
                            padding: 4px 0 0 8px;
                            background-color: #BCBAC4;
                            border-bottom: 1px solid #CFCFCF;
                        }
                    }
                }
            }
        }

        .mapping-bottom {
            display: flex;
            justify-content: flex-end;
            padding-right: 20px;
            margin-bottom: 20px;

            button {
                width: 80px;
                height: 32px;
                border-radius: 2px;
            }
            
            .cancel-button {
                background-color: inherit;
            }

            .confirm-button {
                background-color: #7163C5;
            }
        }
    }
</style>