<template>
    <div class="scenario-triggers">
        <div class="scenario-trigger-create">
            <h2>Triggers</h2>
            <!-- <el-select placeholder="ADD Trigger" value="ADD Trigger" @change="addNewTrigger">
                <el-option
                        v-for="item in options"
                        :key="item.index"
                        :label="item.desc"
                        :value="item.cat"
                        :disabled="item.disable">
                </el-option>
            </el-select> -->
			<select 
				@change="addNewTrigger"
				placeholder="ADD Trigger" 
				value="ADD Trigger" name="" id="">
				<option 
					v-for="item in options"
					:key="item.index"
					:label="item.desc"
					:disabled="item.disable"
					:value="item.cat">{{item.desc}}</option>
			</select>
        </div>
        <el-collapse >
            <el-collapse-item v-for="(item, index) in triggers" :key="index" v-show="item.deleted === false">
                <template slot="title">
                    <div class="scenario-trigger-item-title">
                        <!-- <el-select v-model="item.mode" @change="item.edited = true" >
                            <el-option
                                    v-for="iter in options"
                                    :key="iter.index"
                                    :label="iter.desc"
                                    :value="iter.cat"
                                    :disabled="iter.disable">
                            </el-option>
                        </el-select> -->
						<select 
							v-model="item.mode" @change="item.edited = true">
							<option 
								v-for="iter in options"
								:key="iter.index"
								:label="iter.desc"
								:value="iter.cat"
								:disabled="iter.disable">{{item.desc}}</option>
						</select>
                        <el-button class="el-icon-close scenario-trigger-item-delbtn" @click="item.deleted = true"></el-button>
                    </div>
                </template>
                <el-form :model="item" label-width="120px">
                    <el-form-item label="自动触发">
                        <el-switch v-model="item.active" @change="item.edited = true"></el-switch>
                    </el-form-item>
                    <el-form-item label="重复时间间隔">
                        <el-col :span="11">
                            <el-input v-model="item.value" @change="item.edited = true"></el-input>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-select v-model="item.period" placeholder="时间间隔" @change="item.edited = true">
                                <el-option
                                        v-for="iter in period"
                                        :key="iter.desc"
                                        :label="iter.desc"
                                        :value="iter.cat">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-date-picker
                                v-model="item.start"
                                type="datetime"
                                placeholder="Select date and time"
                                default-time="12:00:00"
                                @change="item.edited = true">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="时区">
                        <el-input disabled value="北京时间"></el-input>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
// import CreateScenarioDlg from "./create-scenario-dlg"
import ElCollapse from "element-ui/packages/collapse/index"
import ElCollapseItem from "element-ui/packages/collapse-item/index"
import ElSelect from "element-ui/packages/select/index"
import ElOption from "element-ui/packages/option/index"
import ElSwitch from "element-ui/packages/switch/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElInput from "element-ui/packages/input/index"
import ElCol from "element-ui/packages/col/index"
import ElDatePicker from "element-ui/packages/date-picker/index"
import ElButton from "element-ui/packages/button/index"
import moment from 'moment'

export default {
    data() {
        return {
            options: [
                {
                    index: 0,
                    cat: "timer",
                    desc: "基于时间自动运行",
                    disable: false
                },
                {
                    index: 1,
                    cat: "dataset",
                    desc: "基于数据集更新的自动运行",
                    disable: true
                }
            ],
            period: [
                {
                    cat: "second",
                    desc: "秒"
                },
                {
                    cat: "minute",
                    desc: "分钟"
                },
                {
                    cat: "hour",
                    desc: "小时"
                },
                {
                    cat: "day",
                    desc: "天"
                },
                {
                    cat: "week",
                    desc: "周"
                },
                {
                    cat: "month",
                    desc: "月"
                }
            ]
        }
    },
    props: {
        triggers: Array,
        scenarioId: String
    },
    components: {
        ElCollapse,
        ElCollapseItem,
        ElSelect,
        ElOption,
        ElSwitch,
        ElForm,
        ElFormItem,
        ElInput,
        ElCol,
        ElDatePicker,
        ElButton
    },
    computed: {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        addNewTrigger() {
			debugger
            const result = {}
            result["start"] = moment().format('YYYY-MM-DD HH:m:s')
            result["period"] = "minute"
            result["value"] = 1
            result["timezone"] = "中国北京"
            result["mode"] = "timer"
            result["active"] = true
            result["scenarioId"] = this.scenarioId
            result["id"] = this.genId()
            result["index"] = 1 + Math.max(...this.triggers.map(x => x.index))
            result["resourceArn"] = ""
            result["traceId"] = "123456"
            result["edited"] = true
            result["deleted"] = false
            this.triggers.push(result)
        },
        genId(len=16, radix=16) {
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            let uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
            } else {
                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random()*16;
                        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .scenario-triggers {
         border: 1px solid red;
         margin: 1px auto;
         padding: 14px 36px;
         width: 800px;

        display: flex;
        flex-direction: column;


        .scenario-trigger-create {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .scenario-trigger-item-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 1;

            .scenario-trigger-item-delbtn {
                border: none !important;
            }
        }

        .scenario-trigger-item-switch {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
     }
</style>
