<template>
<div>
	<ul class="bp-menu">
		<slot></slot>
	</ul>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            currentIndex: 0
        }
    }
}
</script>

<style lang=scss scoped>
	.bp-menu {
		height: auto;
		width: 208px;
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
		margin: 0;
	}
</style>