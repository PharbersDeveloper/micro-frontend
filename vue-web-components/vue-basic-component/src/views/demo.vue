<template>
    <div class="button-area">
        <h1>vue button</h1>
        <bpButton type="primary" text="primary" :src="require('../assets/icons/check-circle.svg')"
            @click="click1"
            @dbclick="click2"
         />
        <bpButton type="warning" text="warning"
            @click="click1"
            @dbclick="click2"/>
        <bpButton type="standard" text="standard"
            @click="click1"
            @dbclick="click2"/>

        <h1>vue img</h1>
        <bpImg src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />

        <h1>vue input</h1>
        <!-- 
            states: error, warning, success, info
            size: compact, comfy, default
         -->
        <bpInput states="info" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />
        <bpInput states="error" size="compact" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />
        <bpInput states="warning" size="default" placeholder="测试"
            @focus="focus"
            @blur="blur"
            @change="change"
            @input="input"
        />

        <h1>vue label</h1>
        <bpLabel text="我是label1" />
        <bpLabel text="我是label2" />

        <h1>vue link</h1>
        <bpLink text="这是链接" />

        <h1>vue text</h1>
        <bpText title="这里是bp-text">这里是bp-text</bpText>

        <h1>vue menu</h1>
        <bpMenu :menu_data="menu_data"></bpMenu>

        <h1>webcomponents select</h1>
        <bpSelect :choosed_value="choosed_value" :options_data="options_data"></bpSelect>

        <h1>vue select</h1>
        <bpSelectVue :choosedValue="curLanguage" :src="require('../assets/icons/down.svg')">
            <bpOptionVue text="中文" @onClick="changeLanguage" :choosedValue="curLanguage"></bpOptionVue>
            <bpOptionVue text="English" @onClick="changeLanguage" :choosedValue="curLanguage"></bpOptionVue>
            <bpOptionVue text="韩文" @onClick="changeLanguage" :choosedValue="curLanguage"></bpOptionVue>
        </bpSelectVue>

        <h1>vue tag</h1>
        <bpTag text="这是tag" subtle type="teals"/>

        <h1>vue status</h1>
        <bpStatus text="这是status" subtle type="in-progress"/>

        <h1>vue badge</h1>
        <bpBadge result=100 primary/>
        <bpBadge result=98 primary reverse/>
        <bpBadge/>

        <h1>vue button group</h1>
        <bpButtonGroup :buttonArr="barr">
        </bpButtonGroup>

        <h1>vue carousel</h1>
        <div style="width:100%">
            <bpCarouselUnit :itemArr="bpCarouselItemArr" height="500px">
            </bpCarouselUnit>
        </div>

        <div class="yanjie-test-area">
            <bp-page-bottom :translation_data="page_bottom_translation_data"></bp-page-bottom>
        </div>
    </div>
</template>

<script>
import bpButton from '../components/bp-button.vue'
import bpImg from '../components/bp-img.vue'
import bpInput from '../components/bp-input.vue'
import bpLabel from '../components/bp-label.vue'
import bpLink from '../components/bp-link.vue'
import bpText from '../components/bp-text.vue'
import bpMenu from '../components/bp-menu.vue'
import bpMenuItem from '../components/bp-menu-item.vue'
import bpSubMenu from '../components/bp-sub-menu.vue'
import bpSelect from '../components/bp-select.vue'
import bpSelectVue from '../components/bp-select-vue.vue'
import bpOptionVue from '../components/bp-option-vue.vue'
import bpTag from '../components/bp-tag.vue'
import bpStatus from '../components/bp-status.vue'
import bpBadge from '../components/bp-badge.vue'
import bpButtonItem from '../components/bp-button-item.vue'
import bpButtonGroup from '../components/bp-button-group.vue'
import bpCarousel from '../components/bp-carousel.vue'
import bpCarouselItem from '../components/bp-carousel-item.vue'
import bpCarouselUnit from '../components/bp-carousel-unit.vue'
import bpPageBottom from '../components/panel/bp-page-bottom.vue'

export default {
    name: 'bp-button',
    components: {
        bpButton,
        bpImg,
        bpInput,
        bpLabel,
        bpLink,
        bpText,
        bpMenu,
        bpMenuItem,
        bpSubMenu,
        bpSelect,
        bpSelectVue,
        bpOptionVue,
        bpTag,
        bpStatus,
        bpBadge,
        bpButtonItem,
        bpButtonGroup,
        bpCarousel,
        bpCarouselItem,
        bpCarouselUnit,
        bpPageBottom
    },
    methods: {
        // button
        click1(data) {
            console.log(data)
        },
        click2(data) {
            console.log(data)
        },
        // input
        focus(data) {
            console.log("focus input")
            console.log(data)
        },
        blur(data) {
            console.log("input blur")
            console.log(data)
        },
        change(data) {
            console.log("input change")
            console.log(data)
        },
        input(data) {
            console.log("input input")
            console.log(data)
        },
        changeLanguage(value) {
            this.curLanguage = value
        }
    },
    data: function() {
        return {
            curLanguage: "中文",
            bpCarouselItemArr: [
                "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png",
                'https://dss2.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/res/r/image/2021-3-4/hao123%20logo.png'
            ],
            barr: [
                {
                    text: "ceshi"
                },
                {
                    text: "测试",
                    active: true
                }
            ],
            choosed_value: "中文",
            options_data: [
                {
                    text: "中文",
                    second_text: "",
                    src: require('../assets/icons/check.svg'),
                    click_event: function() {
                        console.log("http://www.baidu.com")
                    }
                },
                {
                    text: "英文",
                    second_text: "",
                    src: "",
                    click_event: function() {
                        console.log("http://www.google.com")
                    }
                },
                {
                    text: "韩文",
                    second_text: "",
                    src: "",
                    click_event: function() {
                        console.log("http://www.jd.com")
                    }
                }
            ],
            menu_data: [
                {
                    type: "sub",
                    text: "sub1",
                    src: require('../assets/icons/check.svg'),
                    click_event: function() {
                    
                    },
                    item_data: [
                        {
                            text: "sub_item1",
                            src: require('../assets/icons/check.svg'),
                            click_event: function() {
                                console.log("sub_item1")
                            }
                        },
                        {
                            text: "sub_item2",
                            click_event: function() {
                                console.log("sub_item2")
                            }
                        }
                    ]
                },
                {
                    type: "item",
                    text: "item1",
                    click_event: function() {
                        console.log("item1")
                    }
                },
                {
                    type: "item",
                    text: "item2",
                    src: require('../assets/icons/check.svg'),
                    click_event: function() {
                        console.log("item2")
                    }
                },
                {
                    type: "sub",
                    text: "sub2",
                    click_event: function() {
                    
                    },
                    item_data: [
                        {
                            text: "sub_item3",
                            click_event: function() {
                                console.log("sub_item3")
                            }
                        }
                    ]
                }
            ],
            page_bottom_translation_data: {
                contactUs: {
                    contactUs: "联系我们",
                    leadingForHealthcareIndustry: "医药健康行业领先的数据融合与洞见",
                    provideSolution: "为您提供一体化解决方案"
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .button-area{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        ul, li{
            list-style: none;
            padding: 0;
            margin: 0;
            line-height: 2;
        }
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #666;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #ddd;
    }
    h3 {
        color: red;
    }
    .yanjie-test-area {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
