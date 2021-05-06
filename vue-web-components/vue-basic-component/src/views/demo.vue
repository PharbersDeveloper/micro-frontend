<template>
    <div class="button-area">
        <h1>我是vue button</h1>
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
    </div>
</template>

<script>
import bpButton from '../components/bp-button.vue'

export default {
    name: 'bp-button',
    components: {
        bpButton
    },
    methods: {
        click1(data) {
            console.log("11111")
            console.log(data)
        },
        click2(data) {
            console.log(2222)
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
