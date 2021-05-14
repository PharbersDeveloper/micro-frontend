<template>
<div>
	<span class="bp-text" :title="title">
		<slot></slot>
	</span>
</div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
	$color-neutrals-n800: rgba(#091e42,0.95);
	.bp-text {
		height: auto;
		width: auto;
		margin-left: 8;
		margin-right: 8;
		margin-top: 8;
		margin-bottom: 8;
		padding-left: 8;
		padding-right: 8;
		padding-top: 8;
		padding-bottom: 8;
		background: transparent;
		padding: 0;
		color: $color-neutrals-n800;
	}
</style>