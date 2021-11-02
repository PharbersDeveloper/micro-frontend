<template>
	<div class="schema-item box" :style="{width: itemWidth +'px'}" >
		<span class="schema_title">{{title}}</span>
		<span class="schema_type">{{titleType}}</span>
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
		.schema_title {
			font-weight: 500;
			font-size: 13px;
			color: #333333;
		}
		.schema_type {
			color: #666666;
			font-family: 'Monaco';
			font-size: 10px;
		}
	}
	.box {
		flex-direction: column;
	}
	.split {
		height: 10px;
		width: 100%;
		background: #81c784;
		border-color: #81c784;
		border-width: 5px;
		margin: 0 2px;
	}
</style>
