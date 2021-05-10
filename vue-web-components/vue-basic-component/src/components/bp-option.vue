<template>
    <li class="bp-option" :disabled="disabled">
        <img svg-inline class="svg-icon" src="../assets/icons/download.svg" alt="example" />
        <span>{{text}}</span>
    </li>
</template>
<script>
export default {
    data: function() {
        return {
            disabled: false
        }
    },
    props: {
        text: String,
        choosedValue: String
    },
    computed: {
        isChoosed() {
            return this.text === this.choosedValue
        }
    }
}
</script>
<style lang=scss scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 4px;
    }
</style>