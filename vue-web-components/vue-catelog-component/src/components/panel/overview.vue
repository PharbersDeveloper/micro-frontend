<template>
<div class="building">
            <img :src="src" alt="" class="building-soon" style="width: 50vw; height: auto;">
        </div>
</template>
<script>
export default {
    data() {
        return {
            src: "https://components.pharbers.com/dev/general/public/44681629355585_.pic.jpg"
        }
    }
}
</script>
<style lang="scss" scoped>
    .building {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>