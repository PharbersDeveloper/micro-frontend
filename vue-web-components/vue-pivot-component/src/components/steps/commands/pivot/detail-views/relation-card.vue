<template>
    <div class="relation-card-container">
        <div class="relation-card-item" :style="style">
            <div class="relation-card-types">
                <select v-model="joinDetail.type">
                    <option v-for="(item, index) in defs.actions" :key="index" :value="item.cal" :label="item.desc" />
                </select>
            </div>

            <div class="relation-condition-lst">
                <div class="relation-condition-item" v-for="(item, index) in joinDetail.on" :key="index">
                    <span class="relation-condition-left">{{item.conditions[0].column}}</span>
                    <div class="relation-condition-type">
                        <div class="relation-condition-type-name">{{item.type}}</div>
                    </div>
                    <span class="realtion-condition-right">{{item.conditions[1].column}}</span>
                </div>
            </div>

            <div class="relation-card-btn">
                <el-button type="primary" @click="showEditDialog = true">添加条件</el-button>
            </div>
        </div>
        <el-dialog
                title="Edit Conditions"
                :visible.sync="showEditDialog"
                width="30%" >
            <div class="relation-edit-container" >
                <div class="relation-edit-list" >
                    <div class="relation-edit-pattern">
                        <select >
                            <option v-for="(item, index) in defs.pattern" :key="index" :value="item.cal" :label="item.desc" />
                        </select>
                    </div>
                </div>

                <div class="relation-edit-expression" >
                    <div class="relation-edit-item" v-for="(item, index) in joinDetail.on" :key="index">
                        <div class="relation-edit-left" >
                            <select v-model="item.conditions[0].column" >
                                <option v-for="(op, it) in schema[item.conditions[0].ds]" :key="it" :value="op.src" :label="op.src" />
                            </select>
                        </div>
                        <div class="relation-edit-type">
                            <select v-model="item.type" >
                                <option v-for="(op, it) in defs.conditions" :key="it" :value="op.cal" :label="op.desc" />
                            </select>
                        </div>
                        <div class="relation-edit-right">
                            <select v-model="item.conditions[1].column" class="relation-edit-right">
                                <option v-for="(op, it) in schema[item.conditions[1].ds]" :key="it" :value="op.src" :label="op.src" />
                            </select>
                        </div>
                        <div class="relation-edit-op">
                            <el-button type="text" @click="joinDetail.deleteJoinCloase(index)">删除</el-button>
                        </div>
                    </div>
                </div>

                <div class="relation-edit-btn">
                    <el-button type="primary" @click="addJoinCondition">添加条件</el-button>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="text" @click="showEditDialog = false">Ok</el-button>
                </span>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import ElButton from 'element-ui/packages/button/index'
import ElDialog from 'element-ui/packages/dialog/index'
import { PhJoinDefs } from '../defs'

export default {
    data() {
        return {
            showEditDialog: false,
            pattern: "AND"
        }
    },
    props: {
        joinDetail: Object,
        index: Number,
        step: Object,
        schema: Object,
        defs: {
            type: Object,
            default: () => {
                return PhJoinDefs
            }
        },
    },
    components: {
        ElButton,
        ElDialog
    },
    mounted() {

    },
    methods: {
        // computedLeftCol(item) {
        //     const tmp = item.conditions.filter(x => x.ds === this.joinDetail.datasets[0])[0]
        //     return tmp.column
        // },
        // computedRightCol(item) {
        //     const tmp = item.conditions.filter(x => x.ds === this.joinDetail.datasets[1])[0]
        //     return tmp.column
        // },
        computedLeft() {
            if (this.joinDetail) {
                const leftIdx = Math.min(...this.joinDetail.datasets.map(x => x.index))
                return 10 + (500 + 3) * leftIdx
            } else return 0
        },
        computedTop() {
            return this.step.computeTop(this.index)
        },
        computedWidth() {
            if (this.joinDetail) {
                const rightIdx = Math.max(...this.joinDetail.datasets.map(x => x.index))
                return (500 + 3) * (rightIdx + 1) - 80
            } else return 0
        },
        computedHeight() {
            return this.step.computeHeight(this.index)
        },
        addJoinCondition() {
            this.joinDetail.insertJoinCloase(this.joinDetail.datasets[0].name, this.joinDetail.datasets[1].name)
        }
    },
    computed: {
        style() {
            const left = this.computedLeft()
            const top = this.computedTop()
            const width = this.computedWidth()
            const height = this.computedHeight()
            return "left: " + left + "px; top: " + top + "px; width: " + width + "px; height: " + height + "px; background-color: #fff"
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

    .relation-card-container {
        position: relative;

        .relation-card-item {
            position: absolute;
            display: flex;
            flex-direction: column;
			padding: 20px;

            .relation-card-types {
                display: flex;
                flex-direction: row;
				select {
					width: 100px;
					height: 30px;
					border: 1px solid #666;
					color: #666;
				}
            }

            .relation-card-btn {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .relation-condition-lst {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
				padding: 30px 60px;
				font-size: 13px;
				line-height: 20px;
				color: #333333;

                .relation-condition-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
					padding: 5px;

                    .relation-condition-left {
                        // flex-grow: 1;
						min-width: 100px;
						width: 100px;
						overflow: hidden;
                    }

                    .relation-condition-type {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        min-width: 100px;

						.relation-condition-type-name {
							width: 24px;
							height: 24px;
							border: 1px solid #ccc;
							border-radius: 50%;
							display: flex;
							justify-content: center;
						}
                    }

                    .realtion-condition-right {
						min-width: 100px;
						width: 100px;
						overflow: hidden;
                    }
                }
            }
        }
    }

    .relation-edit-container {
        display: flex;
        flex-direction: column;

        .relation-edit-pattern {

        }
        .relation-edit-expression {
            display: flex;
            flex-direction: column;

            flex-grow: 1;

            .relation-edit-item {
                display: flex;
                flex-direction: row;
                justify-content: space-around;

                .relation-edit-left {
                    /*flex-grow: 1;*/
                    /*justify-content: space-around;*/
                    min-height: 28px;

                }

                .relation-edit-type {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    min-width: 100px;
                    min-height: 28px;
                }

                .relation-edit-right {
                    min-height: 28px;

                }

                .relation-edit-op {
                    display: flex;
                    flex-direction: row;
                    min-height: 28px;

                }
            }
        }

        .relation-edit-btn {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .dialog-footer {
            display: flex;
            flex-direction: row-reverse;
        }
    }

</style>
