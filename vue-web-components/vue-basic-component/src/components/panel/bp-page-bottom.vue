<template>
    <div class="page-bottom-part">
        <div class="contact-container">
            <div class="contact-content">
                <div class="contact-slogan-part">
                    <bp-text class="ph-body-medium response-text-center">
                        {{translation_data.contactUs.leadingForHealthcareIndustry}}
                    </bp-text>
                    <bp-text class="ph-H-Large_2 response-text-center">
                        {{translation_data.contactUs.provideSolution}}
                    </bp-text>
                </div>
                <bp-button type="standard" :text="translation_data.contactUs.contactUs" @click="contactUs" class="contact-us-button"></bp-button>
            </div>
        </div>

        <bp-modal-form v-if="contactForm" :translation_data="translation_data" @closeModal="closeModal"/>
    </div>
</template>

<script>
import bpText from '../bp-text.vue'
import bpButton from '../bp-button.vue'
import bpModalForm from './bp-modal-form.vue'

export default {
    components: {
        bpText,
        bpButton,
        bpModalForm
    },
    data: function() {
        return {
            contactForm: false
        }
    },
    props: {
        translation_data: Object
    },
    methods: {
        contactUs() {
            this.contactForm = true
        },
        closeModal() {
            this.contactForm = false
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .ph-body-medium {
        font-size: 16px;
        color: #747789;
    }
    .ph-H-Large_2 {
        font-size: 24px;
        color: #2D334D;
    }

    .page-bottom-part {
        height: auto;
        width: 100%;
        /* min-width: 1200px !important; */
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .contact-container {
            height: 313px;
            max-width: 1200px;
            width: 100%;
            background: transparent;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .contact-content {
                height: 153px;
                width: 914px;
                border-radius: 4px;
                padding: 0 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: transparent;
                background-image: conic-gradient(from 90deg,#f9fafe,#e5e7f0);
                background-image: -webkit-linear-gradient(from 90deg,#f9fafe,#e5e7f0);
                background-image: -moz-linear-gradient(from 90deg,#f9fafe,#e5e7f0);
                background:-moz-linear-gradient(top, #f9fafe, #e5e7f0);

                .contact-slogan-part  {
                    height: auto;
                    width: auto;
                    background: transparent;
                    display: flex;
                    flex-direction: column;
                }

                .contact-us-button {
                    height: 40px;
                    width: 137px;
                    padding: 1px 6px;
                    line-height: 32px;
                    border: none;
                    background: #161C39;
                    color: #FFFFFF;
                    font-size: 14px;
                    border-radius: 2px;
                    outline: 0;
                    cursor: pointer;
                    justify-content: center;
                }
            }
        }

        .page-bottom {
            height: auto;
            width: 100%;
            min-width: 375px;
            background: rgba(22,28,57,0.02);
            padding: 100px 100px 0;
        }
    }

@media screen and (max-width: 992px) {
    .page-bottom-part {
        .contact-container {
            .contact-content {
                width: 88%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 40px 80px;
                flex-wrap: wrap;
            }
        }
    }        
}

@media screen and (max-width: 768px) {
    .page-bottom-part {
        .contact-container {
            .contact-content {
                width: 90%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 40px 80px;
                flex-direction: column;

                .response-text-center {
                    text-align: center;
                }

                .contact-us-button {
                    margin-top: 24px; 
                }
            }
        }
    }
}

@media screen and (max-width: 480px) {
    .page-bottom-part {
        .contact-container {
            height: 307px;
            .contact-content {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                padding: 40px 0;
                flex-wrap: wrap;
                margin-right: 24px;
                margin-left: 24px;

                .response-text-center {
                    text-align: center;
                }

                .contact-us-button {
                    margin-top: 24px; 
                }
            }
        }
    }
}
</style>