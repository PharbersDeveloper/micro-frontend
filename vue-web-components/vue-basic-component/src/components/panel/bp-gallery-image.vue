<template>
<!--页面容器-->
<div>
    <div class="gallery-img-container">
        <div class="gallery-img-box" @click="showMorePhoto">
            <div class="gallery-left">
                <div class="gallery-left-top">
                    <bpImg :src="galleryShow.a" class="gallery-img-a"></bpImg>
                    <bpImg :src="galleryShow.b" class="gallery-img-b"></bpImg>
                </div>
                <bpImg :src="galleryShow.c" class="gallery-img-c"></bpImg>
            </div>
            <div class="gallery-right">
                <div class="gallery-right-top">
                    <bpImg :src="galleryShow.d" class="gallery-img-d"></bpImg>
                    <bpImg :src="galleryShow.e" class="gallery-img-e"></bpImg>
                </div>
                <bpImg :src="galleryShow.f" class="gallery-img-c"></bpImg>
            </div>
        </div>
        <div class="gallery-mask"></div>
        <div class="more-img" @click="showMorePhoto">
            <bpText class="more-photo-text">更多时刻</bpText>
            <bpImg :src="more" class="icon_go"></bpImg>
        </div>
    </div>
    <div class="bp-modal-photos" v-if="showPhoto">
        <div class="bp-modal-photos-content">
            <div @click="closeModel" class="aaa">
                <bpImg :src="more" class="closeMorePhoto_icon_and"></bpImg>
            </div>
            <div id="bp-viewport-photo" style="height:605px;width:1032px;" class="bp-viewport-photo">
                <div @click="prev">
                    <bpImg :src="bylt"  class="official-icon-style-left"></bpImg>
                </div>
                
                <div class="photos-content">
                    <div class="transform-list">
                        <bpImg v-for="(src,i) in galleryList" :key="i" :src="src" v-show="i==n" class="photo"></bpImg>
                    </div>
                </div>
                <div @click="next">
                    <bpImg :src="more" class="official-icon-style-right" ></bpImg>
                </div>
            </div>
            <bpText class="text-white">{{n}} / {{galleryList.length}}</bpText>
        </div>
    </div>
</div>

</template>

<script>
import bpText from '../bp-text'
import bpImg from '../bp-img'
export default {
    components: {
        bpText,
        bpImg
    },
    data() {
        return {
            language: '中文',
            showPhoto: false,
            n: 2,
            more: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg",
            bylt: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_bylt_v.svg"
        }
    },
    created() {
        this.language = window.localStorage.getItem('lang')
    },
    computed: {
        translation_data: function () {
            if (this.language === '中文') {
                return this.translation_basedata.cn
            } else if (this.language === 'English') {
                return this.translation_basedata.en
            }
        }
    },
    methods: {
        showMorePhoto() {
            this.showPhoto = !this.showPhoto
        },
        closeModel() {
            this.showPhoto = !this.showPhoto
        },
        prev() {
            if(this.n > 0) {
                this.n--
            } else {
                this.n = this.galleryList.length - 1
            }
        },
        next() {
            if(this.n == this.galleryList.length - 1) {
                this.n = 0
            } else {
                this.n++
            }
        }
    },
    mounted:function(){  
    },
    props: {
        galleryShow: {
            type: Object,
            default: function() {
                return {
                    a: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00000.jpg",
                    b: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00003.jpg",
                    c: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00008.jpg",
                    d: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00007.jpg",
                    e: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00004.jpg",
                    f: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00006.jpg"
                }
            }
        },
        galleryList: {
            type: Array,
            default: function() {
                return [
                    "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00000.jpg",
                    "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00003.jpg",
                    "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00008.jpg"
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    line-height: 1.6;
}
.aaa {
    height: 32px;
    width: 32px;
    background: 0 0;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
}
.close {
    background: url("data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39' fill-rule='nonzero'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E") no-repeat center/100% !important;
    border: none !important;
    padding: 5px;
}
.gallery-img-container {
    height: auto;
    width: auto;
    overflow: hidden;
    background: 0 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    .gallery-img-box {
        height: auto;
        width: auto;
        background: 0 0;
        justify-content: center;
        display: flex;
        .gallery-img-c {
            height: 378px;
            width: 504px;
            margin-right: 32px;
            background: 0 0;
            border-radius: 2px;
            object-fit: cover;
            cursor: pointer!important;
        }
        .gallery-left {
            height: auto;
            width: auto;
            background: 0 0;
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            .gallery-left-top {
                height: auto;
                width: auto;
                background: 0 0;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                .gallery-img-a {
                    height: 334px;
                    width: 263px;
                    margin-right: 32px;
                    margin-bottom: 32px;
                    background: 0 0;
                    align-items: flex-end;
                    border-radius: 2px;
                    object-fit: cover;
                    cursor: pointer!important;
                }
                .gallery-img-b {
                    height: 418px;
                    width: 335px;
                    margin-right: 32px;
                    margin-bottom: 32px;
                    background: 0 0;
                    align-items: flex-end;
                    border-radius: 2px;
                    object-fit: cover;
                    cursor: pointer!important;
                }
            }
        }
        .gallery-right {
            display: flex;
            flex-direction: column;
            .gallery-right-top {
                height: auto;
                width: auto;
                background: 0 0;
                align-items: flex-end;
                display: flex;
                .gallery-img-d {
                    height: 504px;
                    width: 378px;
                    margin-right: 32px;
                    margin-bottom: 32px;
                    background: 0 0;
                    border-radius: 2px;
                    object-fit: cover;
                    cursor: pointer!important;
                }
                .gallery-img-e {
                    height: 334px;
                    width: 260px;
                    margin-right: 32px;
                    margin-bottom: 32px;
                    background: 0 0;
                    border-radius: 2px;
                    object-fit: cover;
                    cursor: pointer!important;
                }
            }
            
        }
    }
    .gallery-mask {
        height: 15px;
        width: 100%;
        background: 0 0;
        position: relative;
        top: -15px;
        background-image: linear-gradient(180deg,rgba(255,255,255,0) 0,#FFF 100%);
    }
    .more-img {
        height: auto;
        width: auto;
        background: 0 0;
        position: relative;
        justify-content: center;
        display: flex;
        flex-direction: row;
        cursor: pointer!important;
        .more-photo-text {
            font-size: 14px;
            color: #2D334D;
            letter-spacing: 1px;
            line-height: 24px;
            margin-right: 8px;
        }
        .icon_go {
            width: 24px;
            height: 24px; 
        }
    }
}
.bp-modal-photos {
    height: 100vh;
    width: 100vw;
    background: rgba(27,29,40,.96);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    .bp-modal-photos-content {
        height: 605px;
        width: 1032px;
        background: 0 0;
        justify-content: space-between;
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;
        .text-white {
            color: #FFF;
            font-size: 14px;
        }
        .closeMorePhoto_icon_and {
            padding: 5px;
            height: 32px;
            width: 32px;
            background: 0 0;
            border-radius: 50%;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer !important;
            z-index: 2;
        }
        
    }
    .bp-viewport-photo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 24px;
        position: relative;
        background: 0 0;
        display: flex;
        .official-icon-style-left {
            transform: rotate(90deg);
            height: 48px;
            width: 48px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.6);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .official-icon-style-right {
            transform: rotate(270deg);
            height: 48px;
            width: 48px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.6);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .photos-content {
            height: 468px;
            width: 832px;
            background: 0 0;
            overflow: hidden;
            display: flex;
            .transform-list {
                height: auto;
                width: auto;
                background: 0 0;
                display: flex;
                .photo {
                    width: 832px;
                    background: 0 0;
                    object-fit: contain;
                }
            }
        }
        
    }
}
</style>
