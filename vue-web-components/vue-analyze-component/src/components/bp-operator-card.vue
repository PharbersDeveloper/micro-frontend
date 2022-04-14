<template>
    <div class="bp_operator_card">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="card" v-if="type === 1">
            <div class="card_header">
                <el-checkbox></el-checkbox>
                <div class="card_header_content">
                    <div class="card_header_desc">保留 列名01，值等于10的行</div>
                    <div class="card_header_del">
                        <div class="num">- 378</div>
                        <img :src="icons.del_icon" alt="">
                    </div>
                </div>
            </div>
            <div class="card_content">

            </div>
        </div>
    </div>
</template>
<script>
import ElCheckboxGroup from 'element-ui/packages/checkbox-group/index'
import ElCheckbox from 'element-ui/packages/checkbox/index'
import { staticFilePath, hostName } from '../config/envConfig'

export default {
    data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: ['上海', '北京', '广州', '深圳'],
            isIndeterminate: true
        }
    },
    props: {
        type: Number,
        icons: {
            type: Object,
            default: () => {
                return {
                    del_icon: `${staticFilePath}/delete_r.svg`
                }
            }
        }
    },
    components: {
        ElCheckboxGroup,
        ElCheckbox
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .bp_operator_card {
        margin-top: 4px;
        display: flex;
        width: 100%;
        padding: 4px;
        .card {
            width: 100%;
            border: 1px solid #ccc;
            padding: 4px 10px;
            .card_header {
                display: flex;
                align-items: center;
                height: 60px;
                border-bottom: 1px solid #ccc;
                .el-checkbox {
                    margin-right: 10px;
                }
                .card_header_content {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                    .card_header_del {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        img {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            .card_content {
                border-top: 1px solid rgba(151,151,151,0.5);
                box-shadow: inset 0px 1px 3px 0px rgba(0,0,0,0.5);
            }
        }
    }
</style>