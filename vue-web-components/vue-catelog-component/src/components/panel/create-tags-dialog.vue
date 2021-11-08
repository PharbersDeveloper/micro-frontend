<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                   <img :src="label_icon" class="label" alt="">
                   为 2 个数据集添加标签
               </div>
               <div class="prompt">
                   <img :src="search_icon" class="search" alt="">
                   <input type="text" placeholder="筛选标签或创建新标签" class="text_input" v-model="searchValue" @keyup.enter="submit">
                   <p class="tags_name">标签名</p>
                   <!-- <span class="useing">正在使用</span> -->
                   <div class="tags" v-for="(item,index) in searchData" :key="index">
                       <input type="checkbox" class="checkout">
                       <span class="round"></span>
                       <div class="create_tags" v-for="(tag,ind) in item.label" :key="ind">
						   {{tag}}
					   </div>
                       <!-- <span class='num_tags'>1</span> -->
                   </div>
                   <div class="create" v-if="searchData.length == 0 " @click="addTags" >
                        <img :src="add_icon" alt="" class="add">
                        <p>Create《{{searchValue}}》</p>
                        <img :src="enter_icon" alt="" class="enter">
                    </div>
               </div>
              <div class="btn">
                    <button class="cancel" @click="close">取消</button>
                    <button class="save" @click="save">保存</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            search_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/search.png",
            add_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/add.svg",
            enter_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/enter.svg",
            // tagList: [],
            searchValue: '', 
            color: ['#ff5252','#a2ff08','#fff99d','#b478f0','#38a691','#fca91c','#c7c7c7','#75ffe8','#ef69bf','#5354ec','#acacff','#ffa7a7']
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dss: [
                    // {projectId:1,name:'Data_0001',label: ['lalalla','lll']},
                    // {projectId:2,name:'Data_0002',label: ['bbbbbbb','aaaaaaaa']}
                ]
            })
        }
    },
    computed: {
        searchData: function() {
            let searchValue = this.searchValue
            if(searchValue) {
                return this.allData.dss.filter(function(pro) {
                   	return Object.keys(pro).some(function(key) {
                        return String(pro[key]).toLowerCase().indexOf(searchValue) > -1
                	})
                })
            }
            return this.allData.dss
        }
    },
    methods: {
        save() {
            this.tags.push(this.searchValue)
        },
        close() {
            this.$emit('closeCreateDialog');
        },
        addTags() {
            this.tags.push(this.searchValue)
            this.searchValue = ''
        },
        submit() {
            this.tags.push(this.searchValue)
            this.searchValue = ''
            // console.log(this.tagList);
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.clear_dialog_container {
   height: 100vh;
    width: 100vw;
    background: rgba(37,35,45,0.55);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    justify-content: center;
    align-items: center;
}
.dialog_area {
    width: 600px;
    height: 560px;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
	box-sizing: border-box;
}
.header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    padding-left: 50px;
    font-weight: 500;
}
.prompt {
    height: 440px;
    padding-left: 40px;
    padding-top: 20px;
    border-bottom: 1px solid #ddd;
    .tags_name {
        color: #111;
        font-size: 12px;
        font-weight: 600;
        margin-left: 27px;
        margin-top: 10px;
    }
    .tags {
        display: flex;
        margin-top: 10px;
        .checkout {
            margin-top: 5px;
        }
        .round {
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 7px;
            background: #7163C5;
            margin-top: 5px;
            margin-left: 15px;
        }
        .create_tags {
            font-size: 14px;
            margin-left: 15px;
            margin-top: 2px;
        }
        .green {
            background: green;
        }
        .blue {
            background: #28aadd;
        }
    }
}
.text_input {
    height: 24px;
    width: 520px;
    padding-left: 30px;
    outline: none;
    border: 1px solid #dddddd;
}
.btn {
    position: absolute;
    right: 23px;
    bottom: 15px;
    button {
        width: 60px;
        height: 28px;
        border: 0;
    }
}
.useing {
    color: #111;
    font-size: 12px;
    font-weight: 600;
    margin-left: 27px;
    margin-top: 10px;
    position: absolute;
    right: 80px;
    top: 105px;
}
.num_tags {
    position: absolute;
    right: 100px;
}
.cancel {
    margin-right: 20px;
    // background-color:#DB4D71;
    color: #7163C5;
}
.save {
    background-color: #7163C5;
    color: #fff;
}
.search {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 45px;
    top: 82px;
}
.label {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 22px;
    left: 20px;
}
.create {
    display: flex;
    position: relative;
    width: 520px;
    height: 30px;
    line-height: 30px;
    padding-left: 30px;
    font-size: 12px;
    margin-top: 10px;
    .add {
        position: absolute;
        top: 7px;
        left: 5px;
        // margin-top: 5px;
        width: 15px;
        height: 15px;

    }
    .enter {
        position: absolute;
        top: 7px;
        right: 10px;
        // margin-top: 5px;
        width: 15px;
        height: 15px;
    }
    // background-color: pink;
}
.create:hover {
    background-color: #e8e8e8;
    cursor: pointer;
}
</style>