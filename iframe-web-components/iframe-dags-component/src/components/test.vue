<template>
    <div class="area">
        <iframe 
            id="mainIframe" 
            ref="mainIframe" 
            name="mainIframe" 
            class="mainIframe"
            :src="iframeURL"
            frameborder="0" scrolling="auto">
        </iframe>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            iframeURL: "/graph?projectId=JfSmQBYUpyb4jsei&projectName=ETL_Iterator&flowVersion=developer"
        }
    },
    mounted() {

    },
    methods: {
        aaa() {
            debugger
        }
    }
}
</script>
<style scoped lang="scss">
    .area {
        height: 100vh;
    }
    #mainIframe {
        width: 100%;
        height: 100%;
    }
</style>