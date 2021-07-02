<template>
    <div>
        <div class="case-icon-line">
            <bpImg class="case-icon" v-for="item in imgArr1" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line">
            <bpImg class="case-icon" v-for="item in imgArr2" :key="item" :src="item"></bpImg>
        </div>
        <div class="case-icon-line">
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
                "https://www.pharbers.com/public/logo_pfizer_00.png",
                "https://www.pharbers.com/public/logo_sanofi_01.png",
                "https://www.pharbers.com/public/logo_novartis_02.png",
                "https://www.pharbers.com/public/logo_astrazeneca_03.png"
            ],
            imgArr2: [
                "https://www.pharbers.com/public/logo_bayer_04.png",
                "https://www.pharbers.com/public/logo_gilead_05.png",
                "https://www.pharbers.com/public/logo_Jessen_08.png",
                "https://www.pharbers.com/public/servier_07.png"
            ],
            imgArr3: [
                "https://www.pharbers.com/public/logo_novo-nordisk_10.png",
                "https://www.pharbers.com/public/logo_mylan_11.png",
                "https://www.pharbers.com/public/astellas_10.png",
                "https://www.pharbers.com/public/logo_merck_13.png"
            ],
            imgArr4: [
                "https://www.pharbers.com/public/logo_msd_14.png",
                "https://www.pharbers.com/public/logo_lilly_15.png",
                "https://www.pharbers.com/public/Daiichi-Sankyo_14.png"
            ],
            imgArr5: [
                "https://www.pharbers.com/public/Takeda_15.png",
                "https://www.pharbers.com/public/Salubris_16.png",
                "https://www.pharbers.com/public/Lmdbeck_17.png"
            ]
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
    @media screen and (max-width: 992px) and (min-width: 769px) { // ?
        .case-icon-line-three {
            padding: 0 8px!important;
        }
        .case-icon {
            width: 26% !important;
        }
    }
</style>
