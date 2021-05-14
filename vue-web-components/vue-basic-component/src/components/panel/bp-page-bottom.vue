<template>
    <div class="page-bottom-part">
        <div class="contact-container">
            <div class="contact-content">
                <div class="contact-slogan-part">
                    <bp-text class="ph-body-medium response-text-center">

                    </bp-text>
                    <bp-text class="ph-H-Large_2 response-text-center">

                    </bp-text>
                </div>
                <bp-button type="standard" text="contactUs.contactUs" @click="contactUs"></bp-button>
            </div>
        </div>
    </div>
</template>

<script>
import bpText from '../bp-text.vue'
import bpButton from '../bp-button.vue'

export default {
    components: {
        bpText,
        bpButton
    },
    methods: {
        contactUs() {

        }
    }
}
</script>

<style lang="scss" scoped>
    .page-bottom-part {
        height: auto;
        width: 100%;
        /* min-width: 1200px !important; */
        background: transparent;
        display: flex;
        flex-direction: column;
        
        .contact-container {
            height: 313px;
            max-width: 1200px;
            width: 100%;
            
            background: transparent;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .page-bottom {
            height: auto;
            width: 100%;
            min-width: 375px;
            background: rgba(22,28,57,0.02);
            padding: 100px 100px 0;
        }
    }
</style>