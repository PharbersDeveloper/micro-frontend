<template>
    <div class="retrieved">
        <link rel="stylesheet" href="https://components.pharbers.com/element-ui/element-ui.css">
        <div class="retrieved-title">
            <div class="retrieved-title-p">
                <h2>Select Columns</h2>
            </div>
        </div>
        <div class="retrieved-lst" v-if="datasource">
            <selected-card v-for="(item, index) in datasource.commands" :key="index"
                           :index="index" :command="item" :schema="schema[item.ds]" />
        </div>
    </div>
</template>
<script>
import SelectedCard from './detail-view/select-card'
import { PhSelectedColsDefs } from "./defs"
import PhSelectedColsStep from "./step"
import PhSelectedColsCmd from "./cmd"

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
                return PhSelectedColsDefs
            }
        }
    },
    components: {
        SelectedCard
    },
    mounted() {
        this.datasource = new PhSelectedColsStep(this.step)
    },
    methods: {
        validate() {
            this.$emit('statusChange', true)
        },
        updateData(name, oname, unreset) {
            console.log(name, oname)
            if (!unreset) {
                this.datasource.commands.push(new PhSelectedColsCmd({
                    "ds": oname,
                    "prefix": "",
                    "type": "select",
                    "columns": []
                }))
            }
            this.datasource.commands.push(new PhSelectedColsCmd({
                "ds": name,
                "prefix": "",
                "type": "select",
                "columns": []
            }))
        },
        deleteData(idxArr) {
            idxArr.forEach(it => {
                delete this.datasource.commands[it]
            })
            this.datasource.commands = this.datasource.commands.filter(it => it)
        }
    },
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .retrieved {
        margin-top: 4px;
        width: 100%;
        /*min-width: 800px;*/
        padding: 4px;
        display: flex;
        flex-direction: column;
        background: #fff;
        height: fit-content;
        padding: 20px;

        .retrieved-title {
            display: flex;
            flex-direction: column;

            .retrieved-title-p {
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

    .retrieved-lst {
        display: flex;
        flex-direction: row;
    }

    .disabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
