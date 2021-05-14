<template>
    <div class="vue_container fixed-nav" style="background: white; transition: all 0.5s ease 0s;">
        <div class="bp-row-layout cross-center main-space-between nav-border main-flex-start cross-stretch wrap-flex-start" style="border-bottom: 1px solid rgba(22, 28, 57, 0.12);">
            <img :src="imgSrc" alt="" class="bp-img fixed-nav-icon cursor-pointer" />
            <!-- <div class="bp-icon response-icon icon_menu_dark"></div> -->
            <img svg-inline class="svg-icon" src="../../assets/icons/data.svg" alt="example" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg"
        }
    }
}
</script>
<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-right: 4px;
    }
    .fixed-nav {
        height: 80px;
        width: 100%;
        background: 0 0;
        display: flex;
        flex-direction: row;
        top: 0;
        padding: 0 100px;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        padding: 0 16px!important;

    }
    .nav-border {
        height: 80px;
        width: 100%;
        border-bottom: 1px solid rgba(22,28,57,.12);
    }
    .wrap-flex-start {
        align-content: flex-start;
    }
    .cross-center {
        align-items: center!important;
    }
    .main-space-between {
        justify-content: space-between;
    }
    .bp-row-layout {
        display: flex;
        flex-direction: row;
    }
    .bp-img {
        object-fit: cover;
    }
    .cursor-pointer {
        cursor: pointer!important;
    }
    .fixed-nav-icon {
        pointer-events: all;
    }
    .icon_meun_dark{
        width: 24px;
        height: 24px;
        background-color: #666;
    }
</style>