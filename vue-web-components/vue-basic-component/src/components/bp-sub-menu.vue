<template>
    <li class="bp-sub-menu" :disabled="disabled">
        <div class="bp-submenu-title" @click="toggleShow">
            <img svg-inline class="svg-icon" src="../assets/icons/case.svg" alt="example" />
            <span>{{text}}</span>
        </div>
        <ul :class="show ? 'menu-sub' : 'd-none'">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
    data: function() {
        return {
            show: false
        }
    },
    props: {
        text: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
};
</script>

<style lang=scss scoped>
    $size-5x: 5*8px;
    $spacing-5x: 5*8px;
    ul {
        margin: 0;
        padding: 0;
    }
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 4px;
    }
    .bp-sub-menu {
        height: auto;
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
        min-height: 40px;
        color: #505F79;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .bp-sub-menu:hover {
        color: #3172E0;
    }

    .bp-submenu-title {
        display: flex;
        height: $size-5x;
        align-items: center;
        cursor: pointer;
    }

    .menu-sub {
        padding-left: $spacing-5x;
    }

    .d-none {
        display: none;
    }
</style>