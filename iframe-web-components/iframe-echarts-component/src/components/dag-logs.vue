<template>
    <div>
        <div class="show_logs">
			<div class="header_area">
				<div class="script_name">Script name</div>
				<button>Retry This Job</button>
			</div>
			<div class="jobs_area">

			</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    props: {
    },
    computed: {},
    mounted() {
    },
    watch: {
        searchValue: function() {
            let that = this
            if(this.searchValue.trim() == '') {
                if(this.tagsArrayShow.length < this.tagsArray.length) {
                    this.tagsArrayShow = this.tagsArray
                }
            } else {
                this.tagsArrayShow = []
                let allArray = this.tagsArray.concat(this.newTagsArray)
                allArray.forEach(item => {
                    let idx = item.indexOf(that.searchValue)
                    if(idx == 0) {
                        this.tagsArrayShow.push(item)
                    }
                })
            }
        }
    },
    methods: {
        save() {
            const event = new Event("event")
            event.args = {
                callback: "addTags",
                element: this,
                param: {
                    name: "addTags",
                    selectedTags: this.selectedTags
                }
            }
            this.$emit('confirmeRunDag', event)
        },
        close() {
            this.$emit('closeRunDagDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.show_logs {
	.header_area {
		padding: 10px 20px;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		button {
			width: 123px;
			height: 32px;
			background: #7163C5;
			border-radius: 2px;
			font-size: 14px;
			color: #FFFFFF;
			text-align: center;
			line-height: 20px;
			font-weight: 500;
			border: none;
		}
	}
}
</style>