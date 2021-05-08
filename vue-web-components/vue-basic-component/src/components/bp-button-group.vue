<template>
    <div>
        <div class="bp-button-group button-group">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bp-button-group'
}
</script>
<style lang=scss scoped>
    .bp-button-group {
        height: auto;
        width: max-content;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        background: #FFFFFF;
    }
</style>
