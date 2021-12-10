<template>
    <div>
        <div class="show_logs">
            <div class="header_area">
                <div class="script_name">{{jobName}}</div>
                <button>Retry This Job</button>
            </div>
            <div class="jobs_area">
                {{emrLog}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            emrLog: "",
            jobName: ""
        }
    },
    props: {
        jobId: {
            type: String,
            default: "ETL_Iterator_ETL_Iterator_developer"
        },
        response: {
            type: Object,
            default: function() {
                return {"data": [{"type": "notifications", "id": "ETL_Iterator_ETL_Iterator_developer_2021-12-10T06_30_01+00_00", "attributes": {"project-id": "ETL_Iterator_ETL_Iterator_developer_compute_111out_0Jj6bBGAh6vIqs5", "owner": "", "show-name": "\u5f20\u7490", "time": -1, "code": "0", "job-desc": "max", "job-cat": "failed", "comments": "<empty>", "message": "{\"type\": \"notification\", \"opname\": \"\u5f20\u7490\", \"cnotification\": {\"jobName\": \"ETL_Iterator_ETL_Iterator_developer_compute_111out_0Jj6bBGAh6vIqs5\", \"runId\": \"ETL_Iterator_ETL_Iterator_developer_2021-12-10T06_30_01+00_00\", \"error\": \"\"}}", "date": 1639117863191}}], "meta": {"start_key": "{}"}}
            }
        }
    },
    computed: {},
    async mounted() {
        // this.jobName = JSON.parse(this.response.data[0].attributes.message).cnotification.jobName //更新状态用
        // let runId = JSON.parse(this.response.data[0].attributes.message).cnotification.runId
        let runId = this.$route.query.runId
        let jobId = this.$route.query.jobId
        this.jobName = this.$route.query.jobName
        const url = "https://apiv2.pharbers.com/phdydatasource/query"
        const accessToken = this.getCookie( "access_token" ) || "a116e7890eedd4b3b4555ab8568c364a1a8db1d82d49d9173c1b02aa0b088721"
        let body = {
            "table": "logs",
            "conditions": {
                "runId": ["=", runId],
                "jobId": ["begins_with", jobId]
            },
            "limit": 1000,
            "start_key": {}
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        let logs = await fetch(url, options).then(res => res.json())
        this.emrLog = logs.data[0].attributes["emr-log"]
    },
    watch: {
    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
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
    .jobs_area {
        padding: 20px;
    }
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