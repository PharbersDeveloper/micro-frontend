<template>
    <li :class="[{'bp-sub-menu': sub_menu_data.type === 'sub'}, {'bp-push-button bp-menu-item': sub_menu_data.type === 'item'}]" :disabled="disabled" @click="sub_menu_data.click_event">
        <div class="bp-submenu-title" @click="toggleShow" v-if="sub_menu_data.type === 'sub'">
            <img svg-inline class="svg-icon" :src="sub_menu_data.src" alt="example" v-if="sub_menu_data.src" />
            <span>{{sub_menu_data.text}}</span>
        </div>
        <ul :class="show ? 'menu-sub' : 'd-none'" v-if="sub_menu_data.type === 'sub'">
            <bpMenuItem v-for="sub_menu_item in sub_menu_data.item_data" :key="sub_menu_item.text" :menu_item_data="sub_menu_item"></bpMenuItem>
        </ul>

        <img svg-inline class="svg-icon" :src="sub_menu_data.src" alt="example" v-if="sub_menu_data.src && sub_menu_data.type === 'item'"/>
        <span v-if="sub_menu_data.type === 'item'">{{sub_menu_data.text}}</span>
        <!-- <bpMenuItem v-if="sub_menu_data.type === 'item'" :menu_item_data="sub_menu_data"></bpMenuItem> -->
    </li>
</template>

<script>
import bpMenuItem from './bp-menu-item.vue';
export default {
    components: { bpMenuItem },
    data: function() {
        return {
            show: false
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        sub_menu_data: Object
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
};
</script>

<style lang="scss" scoped>
    $size-5x: 5*8px;
    $spacing-5x: 5*8px;
    * {
        box-sizing: border-box;
    }
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
    svg:focus {
        outline: none;
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