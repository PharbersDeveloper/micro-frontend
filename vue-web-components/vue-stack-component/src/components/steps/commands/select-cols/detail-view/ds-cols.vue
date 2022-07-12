<template>
    <div class="stack-ds-cols">
        <div class="stack-ds-title">
            <h3 :title="datasetName">{{datasetName}}</h3>
        </div>
        <el-divider class="divider"></el-divider>
        <div class="stack-ds-list">
            <div class="stack-ds-item" v-for="(item, index) in columns" :key="index">
                <select v-model="item.name">
                    <option value="null" label="None" />
                    <option v-for="(op, it) in schema" :value="op.src" :label="op.src" :key="it" />
                </select>
            </div>
        </div>
    </div>
</template>
<script>
import ElDivider from 'element-ui/packages/divider/index'
// import ElInput from 'element-ui/packages/input/index'

export default {
    data() {
        return {

        }
    },
    props: {
        datasetName: String,
        schema: Array,
        columns: Array,
        command: Object
    },
    components: {
        // ElInput,
        ElDivider
    },
    methods: {
        addSelectColumn() {
            this.command.addSelectColumn()
        },
        deleteSelectColumn() {
            this.command.deleteSelectColumn()
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

    .stack-ds-cols {
        display: flex;
        flex-direction: column;
        min-width: 165px;
		width: 165px;
		border-right: 1px solid #ddd;

        .stack-ds-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
			margin: 0 10px;

			h3 {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
        }

		.divider {
			margin-top: 0;
		}

        .stack-ds-list {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
			margin: 0 10px;

            .stack-ds-item {
                display: flex;
                flex-direction: row;
                min-height: 30px;
				height: 50px;
				align-items: center;
                // margin: 6px 0 6px 0;

				select {
					margin-top: 0;

					width: 140px;
					height: 40px;
				}
            }
        }
    }
</style>
