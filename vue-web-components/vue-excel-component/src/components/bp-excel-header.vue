<template>
	<div class="schema-item box" >
		<span><strong>{{title}}</strong></span>
		<span>{{titleType}}</span>
	</div>
</template>
<script>
export default {
	data() {
		return {

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
		height: 90px;
		// min-width: 80px;
		min-width: 118px;
		display: flex;
		justify-content: center;
		background: #F0F0F0;
		border: 1px solid #CFCFCF;
		// padding: 0 5px;
		overflow: hidden;
	}
	.box {
		flex-direction: column;
	}
</style>
