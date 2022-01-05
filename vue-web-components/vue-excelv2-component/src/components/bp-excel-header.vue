<template>
    <div class="schema-item box" :style="{width: itemWidth +'px'}" >
        <span class="schema-title">{{title}}</span>
        <!-- <bp-select-vue v-if="isNeedPopmenu" 
            class="schema-type" 
            :src="selectIcon" 
            :choosedValue="itemValueType" 
            @showSelectOption="showSelectOption" 
            :closeTosts="closeTosts">
            <bp-option-vue class="schema-select-item" text="Text" @click="selectScript(1)"></bp-option-vue>
            <bp-option-vue class="schema-select-item" text="Number" @click="selectScript(2)"></bp-option-vue>
        </bp-select-vue> -->
        <select name="" id="" v-model="itemValueType" class="schema-type" ref="schemaType" @change="selectScript" v-if="isNeedPopmenu">
            <option class="schema-select-item" value="Text"  @click="selectScript(1)">Text</option>
            <option class="schema-select-item" value="Number" @click="selectScript(2)">Number</option>
        </select>
        <span v-else class="schema-type">&nbsp&nbsp&nbsp</span>
        <span class="split">&nbsp;&nbsp;</span>
    </div>
</template>
<script>
import bpSelectVue from '../../node_modules/vue-components/src/components/bp-select-vue.vue'
import bpOptionVue from '../../node_modules/vue-components/src/components/bp-option-vue.vue'
export default {
    data() {
        return {
            selectIcon: "https://general.pharbers.com/drop_down_icon.svg",
            selectValue: "Text",
            showSelectOptionParam: false,
            closeTosts: false,
            itemValueType: "Text"
        }
    },
    components: {
        bpSelectVue,
        bpOptionVue
    },
    props: {
        valueType: {
            type: String,
            default: "Text"
        },
        isNeedPopmenu: {
            type: Boolean,
            default: true
        },
        itemWidth: {
            type: Number,
            default: 118
        },
        title: {
            type: String,
            default: "title"
        },
        titleType: {
            type: String,
            default: "string"
        },
        dataGuess: {
            type: String,
            default: "Text"
        }
    },
    mounted() {
        if(this.valueType === "Double") {
            this.itemValueType = "Number"
        } else if(this.valueType === "String"){
            this.itemValueType = "Text"
        }
    },
    methods: {
        selectScript() {
            this.itemValueType = this.$refs.schemaType.value
            const event = new Event("event")
            event.args = {
                callback: "changeSchemaType",
                element: this,
                param: {
                    title: this.title,
                    itemValueType: this.itemValueType
                }
            }
            this.$emit('changeSchemaTypeEvent', event)
        },
        showSelectOption() {
            this.showSelectOptionParam = true
        }
    }
};
</script>
<style lang="scss">
    .schema-item {
        display: flex;
        justify-content: center;
        background: #F0F0F0;
        border: 1px solid #CFCFCF;
        overflow: hidden;
        box-sizing: border-box;
        .schema-title {
            font-weight: 500;
            font-size: 13px;
            color: #333333;
            margin-left: 8px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
        }
        .schema-type {
            color: #666666;
            font-family: 'Monaco';
            font-size: 10px;
            height: 20px !important;
            border: none;
            background: rgba(9,30,66,.04);
        }
    }
    .box {
        flex-direction: column;
    }
    .split {
        height: 10px;
        width: 100%;
        background: #81c784;
        border-color: #81c784;
        border-width: 5px;
        margin: 0 2px;
    }
    .bp-option-group {
        margin: 0px;
        padding: 0px 0px;
        background: #ffffff;
        box-shadow: 0 4px 8px -2px rgb(9, 30, 66);
        border-radius: 3px;
        z-index: 99;
        position: fixed;
    }
</style>
