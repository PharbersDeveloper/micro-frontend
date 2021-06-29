<template>
    <div>
        <div class="tabs">
            <span :class="curTab === 0 ? 'label_button_theme': 'btn_secondary_initial'" class="cursor-pointer mr-3">Mine</span>
            <span>Subscribed</span>
        </div>
        <div class="data-main-container">
            <div v-if="haveData" class="myData-mine">

            </div>

            <div v-else>

            </div>
        </div>
    </div>
    
</template>
<script>
import bpPagination from '../bp-pagination.vue'

export default {
    components: {
        bpPagination
    },
    data() {
        return {
            haveData: true,
            curTab: 0
        }
    }
}
</script>
<style lang="scss" scoped>
    .cursor-pointer {
        cursor: pointer;
    }
    .mr-3 {
        margin-right: 16px;
    }

    .label_button_theme {
        font-family: SFProText-Medium;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        color: #7163C5;
    }

    .btn_secondary_initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        color: #57565F;
    }
</style>