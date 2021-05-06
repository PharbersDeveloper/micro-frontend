<template>
    <div class="button-area">
        <h1>vue button</h1>
        <bpButton type="primary" text="primary" icon="case"
            @click="click1"
            @dbclick="click2"
         />
        <bpButton type="warning" text="warning"
            @click="click1"
            @dbclick="click2"/>
        <bpButton type="standard" text="standard" icon="data"
            @click="click1"
            @dbclick="click2"/>

        <h1>vue img</h1>
        <bpImg src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />

        <h1>vue input</h1>
        <!-- 
            states: error, warning, success, info
            size: compact, comfy, default
         -->
        <bpInput states="info" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />
        <bpInput states="error" size="compact" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />
        <bpInput states="warning" size="default" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />

        <h1>vue label</h1>
        <bpLabel text="我是label1"/>
        <bpLabel text="我是label2"/>

        <h1>vue link</h1>
        <bpLink text="这是链接" />
    </div>
</template>

<script>
import bpButton from '../components/bp-button.vue'
import bpImg from '../components/bp-img.vue'
import bpInput from '../components/bp-input.vue'
import bpLabel from '../components/bp-label.vue'
import bpLink from '../components/bp-link.vue'

export default {
    name: 'bp-button',
    components: {
        bpButton,
        bpImg,
        bpInput,
        bpLabel,
        bpLink
    },
    methods: {
        // button
        click1(data) {
            console.log(data)
        },
        click2(data) {
            console.log(data)
        },
        // input
        focus(data) {
            console.log("focus input")
            console.log(data)
        },
        blur(data) {
            console.log("input blur")
            console.log(data)
        },
        change(data) {
            console.log("input change")
            console.log(data)
        },
        input(data) {
            console.log("input input")
            console.log(data)
        }
    }
}
</script>

<style lang="scss">
    .button-area{
        text-align: center;
        ul, li{
            list-style: none;
            padding: 0;
            margin: 0;
            line-height: 2;
        }
    }
</style>
