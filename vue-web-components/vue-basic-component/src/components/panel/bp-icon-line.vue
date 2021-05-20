<template>
    <div>
        <div class="case-icon-line">
            <bpImg class="case-icon" v-for="item in imgArr1" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line">
            <bpImg class="case-icon" v-for="item in imgArr2" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line case-icon-line-three">
            <bpImg class="case-icon" v-for="item in imgArr3" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line case-icon-line-three">
            <bpImg class="case-icon" v-for="item in imgArr4" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line case-icon-line-three">
            <bpImg class="case-icon" v-for="item in imgArr5" :key="item" :src="item"></bpImg>
        </div>
    </div>
</template>

<script>
import bpImg from '../bp-img'
export default {
    components: {
        bpImg
    },
    methods: {},
    data() {
        return {
            imgArr1: [
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_pfizer_00.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_sanofi_01.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novartis_02.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astrazeneca_03.png"
            ],
            imgArr2: [
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bayer_04.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_gilead_05.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bristolmyerssquibb_06.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_amgen_07.png"
            ],
            imgArr3: [
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_Jessen_08.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_servier_09.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novo-nordisk_10.png"
            ],
            imgArr4: [
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_mylan_11.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astellas_12.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_merck_13.png"

            ],
            imgArr5: [
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_msd_14.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_lilly_15.png",
                "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_ucb_16.png"
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .case-icon-line {
        flex-wrap: wrap;
        height: auto;
        width: 100%;
        background: 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 40px;
        .case-icon {
            height: 49px;
            width: 200px;
            margin-bottom: 32px;
            background: 0 0;
        }
    }
    .case-icon-line-three {
        padding: 0 100px;
    }
    @media (max-width: 992px) and (min-width: 769px) {
        .case-icon-line-three {
            padding: 0 8px!important;
        }
        .case-icon {
            width: 26% !important;
        }
    }
</style>
