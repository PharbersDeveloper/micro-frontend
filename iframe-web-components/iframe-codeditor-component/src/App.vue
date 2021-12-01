<template>
    <div id="app">
        <ph-codeditor />
    </div>
</template>

<script>
import phCodeditor from './components/ph-codeditor-page'

export default {
    name: 'App',
    components: {
        phCodeditor
    },
    mounted() {
        // window. addEventListener ('message', function(event) {
        //     //event.data获取传过来的数据
        //     console.log(event.data)
        // });
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
