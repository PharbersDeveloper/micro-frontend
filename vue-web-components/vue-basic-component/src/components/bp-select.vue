<template>
    <div class="bp-select" :class="{'select-disabled': disabled}" @focusout="focusOut">
        <div class="bp-select-title" @click="toggleShow">
            <span>{{choosedValue}}</span>
            <img svg-inline class="svg-icon" src="../assets/icons/download.svg" alt="example" />
        </div>
        <ul :class="show ? 'bp-option-group' : 'd-none'">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            disabled: false,
            choosedValue: '请选择',
            show: false
        }
    },
    methods: {
        toggleShow() {
            if(!this.disabled) {
                this.show = !this.show
            }
        },
        focusOut(e) {
            console.log("11", e)
            this.show = false
        }
    }
}
</script>
<style lang=scss scoped>
    $spacing-none: 0px;
    $spacing-compact-2x: 2*2px;
    $color-neutrals-n000: #ffffff;
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 4px;
    }

    .bp-option-group {
        margin: $spacing-none;
        padding: $spacing-compact-2x $spacing-none;
        background: $color-neutrals-n000;
        box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.25);
        border-radius: 3px;
    }
</style>