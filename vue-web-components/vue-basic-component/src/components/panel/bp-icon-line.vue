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
import envConfig from '../../config/envConfig'

export default {
    components: {
        bpImg
    },
    methods: {},
    data() {
        return {
            imgArr1: [
                `${envConfig}` + "/logo_pfizer_00.png",
                `${envConfig}` + "/logo_sanofi_01.png",
                `${envConfig}` + "/logo_novartis_02.png",
                `${envConfig}` + "/logo_astrazeneca_03.png"
            ],
            imgArr2: [
                `${envConfig}` + "/logo_bayer_04.png",
                `${envConfig}` + "/logo_gilead_05.png",
                `${envConfig}` + "/logo_Jessen_08.png",
                `${envConfig}` + "/servier_07.png"
            ],
            imgArr3: [
                `${envConfig}` + "/logo_novo-nordisk_10.png",
                `${envConfig}` + "/logo_mylan_11.png",
                `${envConfig}` + "/astellas_10.png",
                `${envConfig}` + "/logo_merck_13.png"
            ],
            imgArr4: [
                `${envConfig}` + "/logo_msd_14.png",
                `${envConfig}` + "/logo_lilly_15.png",
                `${envConfig}` + "/Daiichi-Sankyo_14.png"
            ],
            imgArr5: [
                `${envConfig}` + "/Takeda_15.png",
                `${envConfig}` + "/Salubris_16.png",
                `${envConfig}` + "/Lmdbeck_17.png"
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
