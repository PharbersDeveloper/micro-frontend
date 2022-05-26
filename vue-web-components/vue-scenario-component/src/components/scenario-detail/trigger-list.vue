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
				class="add-trigger-select"
				ref="addNewTriggerSelect"
				@change="addNewTrigger"
				@click="addNewTriggerClick"
				placeholder="ADD Trigger" 
				value="ADD Trigger" name="" id="">
				<option 
					value="ADD Trigger" 
					label="ADD Trigger"
					style="display: none"></option>
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
                            <!-- <el-select v-model="item.period" placeholder="时间间隔" @change="item.edited = true">
                                <el-option
                                        v-for="iter in period"
                                        :key="iter.desc"
                                        :label="iter.desc"
                                        :value="iter.cat">
                                </el-option>
                            </el-select> -->
							<select 
								v-model="item.period" 
								placeholder="时间间隔" 
								@change="item.edited = true">
								<option 
									v-for="iter in period"
									:key="iter.desc"
									:label="iter.desc"
									:value="iter.cat">></option>
							</select>
                        </el-col>
                    </el-form-item>
                    <el-form-item class="time" label="开始时间">
                        <!-- <el-date-picker
                                v-model="item.start"
                                type="datetime"
                                placeholder="Select date and time"
                                default-time="12:00:00"
                                @change="item.edited = true">
                        </el-date-picker> -->
						<datepicker></datepicker>
						<vue-timepicker format="HH:mm:ss"></vue-timepicker>
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
// import ElSelect from "element-ui/packages/select/index"
// import ElOption from "element-ui/packages/option/index"
import ElSwitch from "element-ui/packages/switch/index"
import ElForm from "element-ui/packages/form/index"
import ElFormItem from "element-ui/packages/form-item/index"
import ElInput from "element-ui/packages/input/index"
import ElCol from "element-ui/packages/col/index"
// import ElDatePicker from "element-ui/packages/date-picker/index"
import ElButton from "element-ui/packages/button/index"
import moment from 'moment'
// Main JS (in UMD format)
import VueTimepicker from 'vue2-timepicker'

// CSS
import 'vue2-timepicker/dist/VueTimepicker.css'

import Datepicker from 'vuejs-datepicker';

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
        // ElSelect,
        // ElOption,
        ElSwitch,
        ElForm,
        ElFormItem,
        ElInput,
        ElCol,
        // ElDatePicker,
        ElButton,
		VueTimepicker,
		Datepicker
    },
    computed: {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
		addNewTriggerClick() {
			this.$refs.addNewTriggerSelect.value = "ADD Trigger"
		},
        addNewTrigger() {
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
			this.$refs.addNewTriggerSelect.value = "ADD Trigger"
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

<style lang="scss">
	.vue__time-picker {
	display: inline-block;
	position: relative;
	font-size: 1em;
	width: 10em;
	font-family: sans-serif;
	vertical-align: middle;
	}

	.vue__time-picker * {
	box-sizing: border-box;
	}

	.vue__time-picker input.display-time {
		// border: 1px solid #d2d2d2;
		border: 1px solid #767676;
		width: 10em;
		height: 2.2em;
		padding: 0.3em 0.5em;
		font-size: 1em;
		height: 23px;
		margin-left: 5px;
	}

	.vue__time-picker input.has-custom-icon {
	padding-left: 1.8em;
	}

	.vue__time-picker input.display-time.invalid:not(.skip-error-style) {
	border-color: #cc0033;
	outline-color: #cc0033;
	}

	.vue__time-picker input.display-time:disabled,
	.vue__time-picker input.display-time.disabled {
	color: #d2d2d2;
	}

	.vue__time-picker .controls {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 3;

	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	align-items: stretch;

	/* Prevent browser focusing on the controls layer */
	pointer-events: none;
	}

	.vue__time-picker .controls > * {
	cursor: pointer;
	
	width: auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	padding: 0 0.35em;

	color: #d2d2d2;
	line-height: 100%;
	font-style: normal;

	/* Resume pointer-events on children components */
	pointer-events: initial;

	transition: color .2s, opacity .2s;
	}

	.vue__time-picker .controls > *:hover {
	color: #797979;
	}

	.vue__time-picker .controls > *:focus,
	.vue__time-picker .controls > *:active {
	outline: 0;
	}

	.vue__time-picker .controls .char {
	font-size: 1.1em;
	line-height: 100%;

	/* Vertical align fixes for webkit browsers only */
	-webkit-margin-before: -0.15em;
	}

	.vue__time-picker .custom-icon {
	z-index: 2;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 1.8em;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	/* pass down mouse events to the <input> underneath */
	pointer-events: none;
	}

	.vue__time-picker .custom-icon img,
	.vue__time-picker .custom-icon svg,
	.vue__time-picker .controls img,
	.vue__time-picker .controls svg {
	display: inline-block;
	vertical-align: middle;
	margin: 0;
	border: 0;
	outline: 0;
	max-width: 1em;
	height: auto;
	}

	.vue__time-picker .time-picker-overlay {
	z-index: 4;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	}

	.vue__time-picker .dropdown,
	.vue__time-picker-dropdown {
	position: absolute;
	z-index: 5;
	top: calc(2.2em + 2px);
	left: 0;
	background: #fff;
	box-shadow: 0 1px 6px rgba(0,0,0,0.15);
	width: 10em;
	height: 10em;
	font-weight: normal;
	}

	/* Dropdown class when "append-to-body" is on */
	.vue__time-picker-dropdown {
	position: fixed;
	z-index: 100;
	}

	.vue__time-picker .dropdown.drop-up,
	.vue__time-picker-dropdown.drop-up {
	top: auto;
	bottom: calc(2.2em + 1px);
	}

	.vue__time-picker .dropdown .select-list,
	.vue__time-picker-dropdown .select-list {
	width: 10em;
	height: 10em;
	overflow: hidden;
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;
	justify-content: space-between;
	}

	.vue__time-picker .dropdown .select-list:focus,
	.vue__time-picker .dropdown .select-list:active,
	.vue__time-picker-dropdown .select-list:focus,
	.vue__time-picker-dropdown .select-list:active {
	outline: 0;
	}

	.vue__time-picker .dropdown ul,
	.vue__time-picker-dropdown ul {
	padding: 0;
	margin: 0;
	list-style: none;
	outline: 0;

	flex: 1 1 0.00001px;
	overflow-x: hidden;
	overflow-y: auto;
	}

	.vue__time-picker .dropdown ul.minutes,
	.vue__time-picker .dropdown ul.seconds,
	.vue__time-picker .dropdown ul.apms,
	.vue__time-picker-dropdown ul.minutes,
	.vue__time-picker-dropdown ul.seconds,
	.vue__time-picker-dropdown ul.apms {
	border-left: 1px solid #fff;
	}

	.vue__time-picker .dropdown ul li,
	.vue__time-picker-dropdown ul li {
	list-style: none;
	text-align: center;
	padding: 0.3em 0;
	color: #161616;
	}

	.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):hover,
	.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):focus,
	.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):hover,
	.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):focus  {
	background: rgba(0,0,0,.08);
	color: #161616;
	cursor: pointer;
	}

	.vue__time-picker .dropdown ul li:not([disabled]).active,
	.vue__time-picker .dropdown ul li:not([disabled]).active:hover,
	.vue__time-picker .dropdown ul li:not([disabled]).active:focus,
	.vue__time-picker-dropdown ul li:not([disabled]).active,
	.vue__time-picker-dropdown ul li:not([disabled]).active:hover,
	.vue__time-picker-dropdown ul li:not([disabled]).active:focus {
	background: #41B883;
	color: #fff;
	}

	.vue__time-picker .dropdown ul li[disabled],
	.vue__time-picker .dropdown ul li[disabled]:hover,
	.vue__time-picker-dropdown ul li[disabled],
	.vue__time-picker-dropdown ul li[disabled]:hover {
	background: transparent;
	opacity: 0.3;
	cursor: not-allowed;
	}

	.vue__time-picker .dropdown .hint,
	.vue__time-picker-dropdown .hint {
	color: #a5a5a5;
	cursor: default;
	font-size: 0.8em;
	}
	.rtl {
		direction: rtl;
	}
	.vdp-datepicker {
		position: relative;
		text-align: left;
	}
	.vdp-datepicker * {
		box-sizing: border-box;
	}
	.vdp-datepicker__calendar {
		// position: absolute;
		z-index: 100;
		background: #fff;
		width: 300px;
		border: 1px solid #ccc;
	}
	.vdp-datepicker__calendar header {
		display: block;
		line-height: 40px;
	}
	.vdp-datepicker__calendar header span {
		display: inline-block;
		text-align: center;
		width: 71.42857142857143%;
		float: left;
	}
	.vdp-datepicker__calendar header .prev, .vdp-datepicker__calendar header .next {
		width: 14.285714285714286%;
		float: left;
		text-indent: -10000px;
		position: relative;
	}
	.vdp-datepicker__calendar header .prev:after, .vdp-datepicker__calendar header .next:after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		border: 6px solid transparent;
	}
	.vdp-datepicker__calendar header .prev:after {
		border-right: 10px solid #000;
		margin-left: -5px;
	}
	.vdp-datepicker__calendar header .prev.disabled:after {
		border-right: 10px solid #ddd;
	}
	.vdp-datepicker__calendar header .next:after {
		border-left: 10px solid #000;
		margin-left: 5px;
	}
	.vdp-datepicker__calendar header .next.disabled:after {
		border-left: 10px solid #ddd;
	}
	.vdp-datepicker__calendar header .prev:not(.disabled), .vdp-datepicker__calendar header .next:not(.disabled), .vdp-datepicker__calendar header .up:not(.disabled) {
		cursor: pointer;
	}
	.vdp-datepicker__calendar header .prev:not(.disabled):hover, .vdp-datepicker__calendar header .next:not(.disabled):hover, .vdp-datepicker__calendar header .up:not(.disabled):hover {
		background: #eee;
	}
	.vdp-datepicker__calendar .disabled {
		color: #ddd;
		cursor: default;
	}
	.vdp-datepicker__calendar .flex-rtl {
		display: flex;
		width: inherit;
		flex-wrap: wrap;
	}
	.vdp-datepicker__calendar .cell {
		display: inline-block;
		padding: 0 5px;
		width: 14.285714285714286%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		vertical-align: middle;
		border: 1px solid transparent;
	}
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
		cursor: pointer;
	}
	.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
		border: 1px solid #4bd;
	}
	.vdp-datepicker__calendar .cell.selected {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.selected:hover {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.selected.highlighted {
		background: #4bd;
	}
	.vdp-datepicker__calendar .cell.highlighted {
		background: #cae5ed;
	}
	.vdp-datepicker__calendar .cell.highlighted.disabled {
		color: #a3a3a3;
	}
	.vdp-datepicker__calendar .cell.grey {
		color: #888;
	}
	.vdp-datepicker__calendar .cell.grey:hover {
		background: inherit;
	}
	.vdp-datepicker__calendar .cell.day-header {
		font-size: 75%;
		white-space: nowrap;
		cursor: inherit;
	}
	.vdp-datepicker__calendar .cell.day-header:hover {
		background: inherit;
	}
	.vdp-datepicker__calendar .month, .vdp-datepicker__calendar .year {
		width: 33.333%;
	}
	.vdp-datepicker__clear-button, .vdp-datepicker__calendar-button {
		cursor: pointer;
		font-style: normal;
	}
	.vdp-datepicker__clear-button.disabled, .vdp-datepicker__calendar-button.disabled {
		color: #999;
		cursor: default;
	}
	

    .scenario-triggers {
		border: 1px solid #666;
		margin: 1px auto !important;
		padding: 14px 36px !important;
		width: 800px;
		margin-bottom: 40px !important;
        display: flex;
        flex-direction: column;

		.line {
			display: flex;
			align-items: center;
			justify-content: center;
		}

        .scenario-trigger-create {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
			margin-bottom: 10px;
			align-items: center;
			.add-trigger-select {
				height: 24px;
			}
        }
		
		.time {
			.el-form-item__content {
				display: flex;
			}
		}

        .scenario-trigger-item-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 1;
			height: 30px;

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
