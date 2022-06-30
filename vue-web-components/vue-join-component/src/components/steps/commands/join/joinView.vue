<template>
    <div class="join-container">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="join-title">
            <div class="join-title-p">
                <h2>Join</h2>
            </div>
        </div>
        <div class="join-content" v-if="datasource">
            <div class="join-dataset-list" >
                <join-dataset-card v-for="(item, index) in datasource.datasets"
					:key="index"
					:index="index"
					:step="datasource"
					:dataset="item"/>
            </div>
            <div class="join-join-list" v-if="datasource" :style="joinListStyle">
                <div v-for="(item, index) in datasource.commands" :key="index">
                    <join-relation-card
						:join-detail="item"
						:step="datasource"
						:schema="schema"
						:index="index" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import JoinDatasetCard from './detail-views/dataset-card'
import JoinRelationCard from './detail-views/relation-card'
import { PhJoinDefs } from "./defs"
import PhJoinStep from "./step"

export default {
    data() {
        return {
            datasource: null,
        }
    },
    props: {
        step: Object,
        schema: Object,
        concretDefs: {
            type: Object,
            default: () => {
                return PhJoinDefs
            }
        }
    },
    components: {
        JoinDatasetCard,
        JoinRelationCard
    },
    mounted() {
        this.datasource = new PhJoinStep(this.step)
    },
    methods: {
        sortInserted() {
            this.datasource.command.insertSortCloase(this.placeholderSort)
            this.placeholderSort = "选择列"
        },
        sortDeletion(idx) {
            this.datasource.command.deleteSortCloase(idx)
        },
        keyInserted() {
            this.datasource.command.insertKeyCloase(this.placeholderKey)
            this.placeholderKey = "选择列"
        },
        keyDeletion(idx) {
            this.datasource.command.deleteKeyCloase(idx)
        },
        validate() {
            this.$emit('statusChange', true)
        }
    },
    computed: {
        joinListStyle() {
            return "width: " + this.datasource.hitWidth() + "px; height: " + this.datasource.hitHeight() + "px"
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
    .join-container {
        margin-top: 4px;
        width: 100%;
        /*min-width: 800px;*/
        padding: 4px;
        display: flex;
        flex-direction: column;
        background: #fff;
        height: fit-content;
        padding: 20px;
        height: calc( 100vh - 150px);

        .join-title {
            display: flex;
            flex-direction: column;

            .join-title-p {
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

    .join-content {
        position: relative;
        display: flex;
        flex-grow: 1;
    }

    .join-dataset-list {
        display: flex;
        flex-direction: row;
    }

    .join-join-list {
        position: absolute;
        left: 30px;
        top: 100px;
        border: 1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
    }
</style>
