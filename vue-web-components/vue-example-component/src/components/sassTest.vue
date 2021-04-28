<template>
    <div class="hello">
        <h1>here is a title!</h1>
        <div class="box">{{name}}</div>
    </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
        props: {
            msg: {
                type: String,
                default() { return "alfred" }
            }
        }
	}
</script>

<style lang="scss" scoped>
    .hello {
        width: 1000px;
        height: 1000px;
        background: yellow;
        h1 {
            color:red
        }
    }
</style>
