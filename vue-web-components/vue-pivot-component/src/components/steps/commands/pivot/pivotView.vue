<template>
    <div class="pivot-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="pivot-title">
            <div class="pivot-title-p">
                <h2>Pivot</h2>
            </div>
        </div>

        <div class="pivot-content-container" v-if="datasource">
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
            <div class="pivot-column-c">
                <pivot-row :command="datasource.command"
                           :idf="datasource.command.identifiers"
                           :selection="datasource.command.selection"
                           @selectionChanged="selectionChanged" />
            </div>
            <div class="pivot-aggregation-c">
                <pivot-aggregation :command="datasource.command"
                                   :value-columns="datasource.command.valueColumns"
                                   :selection="datasource.command.selection"
                                   @selectionChanged="selectionChanged" />
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
    },
    methods: {
        validate() {
            this.$emit('statusChange', true)
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
        width: 100%;
        /*min-width: 800px;*/
        padding: 4px;
        display: flex;
        flex-direction: column;
        // background: #fff;
        height: fit-content;
        padding: 20px;
        /*height: calc( 100vh - 150px);*/

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
        flex-direction: row;
        flex-flow: wrap;

        .pivot-example-c {
            flex: 0 0 50%;
			flex-grow: 1;
            height: calc( 50vh - 100px);
            // background-color: red;
            margin: 10px;
			height: 400px;
			border: 1px solid #ccc;
        }

        .pivot-pivot-c {
            flex: 0 0 50%;
			flex-grow: 1;
            height: calc( 50vh - 100px);
            background-color: #fff;
            margin: 10px;
			border: 1px solid #ccc;
			height: 400px;
        }

        .pivot-column-c {
            flex: 0 0 50%;
            height: calc( 50vh - 100px);
            background-color: grey;
            padding: 10px;
        }

        .pivot-aggregation-c {
            flex: 0 0 50%;
            height: calc( 50vh - 100px);
            background-color: yellow;
            padding: 10px;
        }
    }
</style>
