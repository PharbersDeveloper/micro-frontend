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
