<template>
    <div class="execution-container">
        <ul class="infinite-list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled"
            style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
    </div>
</template>

<script>
import PhExcelProxy from "./model/dataproxy"

export default {
    data() {
        return {
            count: 0,
            projectId: ''
        }
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    fileName: "filename",
                    projectName: "projectName"
                }
            }
        }
    },
    components: {

    },
    mounted() {

    },
    methods: {
        linkToPage(name) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    "name": name,
                    "projectName": this.allData.projectName,
                    "projectId": this.allData.projectId
                }
            }
            this.$emit('event', event)
        },
        noMore () {
            return this.count >= 20
        },
        disabled () {
            return this.loading || this.noMore
        },
        load () {
            this.loading = true
            setTimeout(() => {
                this.count += 2
                this.loading = false
            }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .execution-container {
        .execution-lst {

        }
    }
</style>
