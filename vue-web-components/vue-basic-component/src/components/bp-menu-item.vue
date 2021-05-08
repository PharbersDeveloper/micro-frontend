<template>
    <li class="bp-push-button bp-menu-item" :disabled="disabled" :class="{ 'menu-active': isActive}">
        <img svg-inline class="svg-icon" src="../assets/icons/case.svg" alt="example" />
        <span>{{text}}</span>
    </li>
</template>

<script>
export default {
    props: {
        text: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isActive: function() {
            // for( let i = 0; i < this.$parent.$children.length; i++ ) {
            //     if ( this.$parent.$children[i].$el === this.$el ) {
            //         return true
            //     }
            // } 
            // return false
            return true
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

    .bp-menu-item {
        height: 40px;
        width: 100%;
        margin-left: 8;
        margin-right: 8;
        margin-top: 8;
        margin-bottom: 8;
        padding-left: 8;
        padding-right: 8;
        padding-top: 8;
        padding-bottom: 8;
        background: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 12px;
        color: #505F79;
        box-sizing: border-box;
    }

    .bp-menu-item:hover {
        color: #3172E0;
    }
</style>