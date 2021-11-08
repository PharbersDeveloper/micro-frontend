<template>
    <div>
        <div class="clear_dialog_container">
            <div class="dialog_area">
               <div class="header">
                   <img :src="model_err" alt="">
                   <p class="clear_data">清除数据</p>
               </div>
               <!-- <div class="prompt" v-for="item in allData.dataName" :key="item.id">
                   确定清除 {{item.name}} 数据集中的数据吗?
               </div> -->
			    <div class="prompt">
                   <p class="tip">确定清除以下数据集中的数据吗?</p>
				   <p class="name">lalalal</p>
				   <p class="name">lalalal</p>
				   <p class="name">lalalal</p>
				   <p class="name">lalalal</p>
				   
               </div>
               <div class="btn">
				   <button class="clear">清除</button>
               	   <button @click="close" class="cancel">取消</button>
			   </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model_err: "https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/modal+header+error.svg"
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dss: [
                    {projectId:1,name:'Data_0001',label: ['lalalla','lll']},
                    {projectId:1,name:'Data_0002',label: ['我好菜啊,菜死算了']},
                    {projectId:1,name:'Data_0001',label: ['lalalla','aaaaaaaa']}
                ],
                projectInfo: '2020.1 - 2021.12 Pfizer raw data'
            })
        }
    },
    methods: {
        close() {
            this.$emit('closeClearDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
* {
	padding: 0;
	margin: 0;
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
	position: relative;
    width: 500px;
    // height: 400px;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
.header {
    display: flex;
    position: relative;
    height: 45px;
    border-bottom: 1px solid #ddd;
    // line-height: 45px;
    // padding-left: 30px;
    img {
        position: absolute;
        top: 14px;
        left: 20px;
        width: 20px;
        height: 20px;
    }
    .clear_data {
		line-height: 45px;
        margin-left: 50px;
    }
   
}
.prompt {
    // height: 278px;
	margin-top: 20px;
    // line-height: 180px;
    text-align: center;
	.tip {
		// text-align: center;
		font-weight: 500;
	}
	.name {
		margin-top: 10px;
		color: #db4d71;
		font-size: 14px;

	}
    
}
.btn {
	// position: absolute;
	// right: 0;
	// bottom: 0;
	margin-left: 280px;
	margin-bottom: 20px;
	margin-top: 20px;
	button {
		border: 0;
		width: 80px;
    	height: 32px;
	}
	.clear {
   		margin-right: 30px;
   		background-color:#DB4D71;
   		color: #fff;
	}
	.cancel {
		border: 1px solid #eeedf7;
		color: #8377cc;
	}
}
// button {
    
//     position: absolute;
//     right: 0;
// 	bottom: 0;
//     border: 0;
// }
// .clear {
//     margin-right: 30px;
//     background-color:#DB4D71;
//     color: #fff;
// }
</style>