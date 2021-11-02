<template>
	<div class="schema-item box" :style="{width: itemWidth +'px'}" >
		<span><strong>{{title}}</strong></span>
		<span>{{titleType}}</span>
		<span class="split">&nbsp;&nbsp;</span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			itemWidth: 118
		}
	},
	components: {

	},
	props: {
		title: {
			type: String,
			default: "title"
		},
		titleType: {
			type: String,
			default: "string"
		},
		dataGuess: {
			type: String,
			default: "Text"
		}
	}
};
</script>
<style lang="scss">
	.schema-item {
		display: flex;
		justify-content: center;
		background: #F0F0F0;
		border: 1px solid #CFCFCF;
		overflow: hidden;
		box-sizing: border-box;
	}
	.box {
		flex-direction: column;
	}
	.split {
		height: 10px;
		width: 100%;
		background: red;
		border-color: green;
		border-width: 5px;
	}
</style>
