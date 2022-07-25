<template>
    <div class="pivot-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="pivot-title">
            <div class="pivot-title-p">
                <h2>Pivot</h2>
            </div>
        </div>
        <div class="pivot-content-container" v-if="datasource">
			<div class="pivot-flex-1">
				<div class="pivot-example-c">
					<pivot-example></pivot-example>
				</div>
				<div class="pivot-pivot-c">
					<pivot-column :command="datasource.command"
						:kc="datasource.command.keyColumns"
						:selection="datasource.command.selection"
						:pivoted-column-type="datasource.command.pivotedColumnType"
						@selectionChanged="selectionChanged" />
				</div>
			</div>
			<div class="pivot-flex-2">
				<div class="pivot-column-c">
					<pivot-row :command="datasource.command"
						:idf="datasource.command.identifiers"
						:selection="datasource.command.selection"
						@selectionChanged="selectionChanged" />
				</div>
				<div class="pivot-aggregation-c">
					<pivot-aggregation 
						:command="datasource.command"
						:schemasArray="schemasArray"
						:value-columns="datasource.command.valueColumns"
						:selection="datasource.command.selection"
						@selectionChanged="selectionChanged" />
				</div>
			</div>
        </div>
    </div>
</template>
<script>
import { PhPivotDefs } from "./defs"
import PhPivotStep from "./step"
import PivotExample from './detail-views/pivot-example'
import PivotColumn from './detail-views/pivot-column'
import PivotRow from './detail-views/pivot-row'
import PivotAggregation from './detail-views/pivot-aggregation'

export default {
    data() {
        return {
            datasource: null,
			schemasArray: []
        }
    },
    props: {
        step: Object,
        schema: Array,
        concretDefs: {
            type: Object,
            default: () => {
                return PhPivotDefs
            }
        }
    },
    components: {
        // JoinDatasetCard,
        // JoinRelationCard
        PivotExample,
        PivotColumn,
        PivotRow,
        PivotAggregation
    },
    mounted() {
        this.datasource = new PhPivotStep(this.step, this.schema)
		this.schemasArray = this.datasource.command.selection
		this.validate()
    },
    methods: {
        validate() {
            const ErrorVales = this.datasource.command.keyColumns.length === 0 || (this.datasource.command.valueColumns.length === 0 && !this.datasource.command.globalCount)
			const event = new Event("event")
			event.args = {
				element: this,
				param: {
					errors: ErrorVales
				}
			}
            this.$emit('statusChange', event)
        },
        selectionChanged() {
            this.datasource.command.resetCandiSelection()
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .pivot-container {
        margin-top: 4px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding: 20px;
		width: 100%;

        .pivot-title {
            display: flex;
            flex-direction: column;

            .pivot-title-p {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .ver-center {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            }
        }
    }

    .pivot-content-container {
        display: flex;
		flex-direction: column;
        // flex-flow: wrap;

		.pivot-flex-1, .pivot-flex-2 {
			display: flex;
		}

        .pivot-example-c {
            flex: 0 0 50%;
			flex-grow: 1;
            height: calc( 50vh - 100px);
            // background-color: red;
            margin: 10px;
			padding: 10px;
			height: 400px;
			max-width: 500px;
			border: 1px solid #ccc;
        }

        .pivot-pivot-c {
            flex: 0 0 50%;
			flex-grow: 1;
            height: calc( 50vh - 100px);
            background-color: #fff;
            margin: 10px;
			padding: 10px;
			border: 1px solid #ccc;
			height: 400px;
        }

        .pivot-column-c {
			flex: 0 0 50%;
			height: calc(50vh - 100px);
			background-color: #fff;
			margin: 10px;
			padding: 10px;
			max-width: 500px;
			border: 1px solid #ccc;
        }

        .pivot-aggregation-c {
			flex: 0 0 50%;
			height: calc(50vh - 100px);
			background-color: #fff;
			margin: 10px;
			padding: 10px;
			flex-grow: 1;
			border: 1px solid #ccc;
        }
    }
</style>
