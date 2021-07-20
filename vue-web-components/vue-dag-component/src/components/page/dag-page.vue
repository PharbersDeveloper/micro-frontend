<template>
    <div class="dag-page">
        <div class="dag-header">
            <span class="header-text">DAG</span>
            <button>返回列表</button>
        </div>
        
        <div class="dag-states">
            <span v-for="(state, index) in states" :key="index" class="dag-state" :class="state">{{state}}</span>
        </div>
        
        <bp-dag :dag="dag"></bp-dag>
    </div>
</template>

<script>
import bpDag from '../bp-dag.vue'
export default {
    components: {
        bpDag
    },
    data() {
        return {
            dag: {
                "Comment": "An example of the Amazon States Language using a parallel state to execute two branches at the same time.",
                "StartAt": "Parallel",
                "States": {
                    "Parallel": {
                        "Type": "Parallel",
                        "Next": "Final State",
                        "Branches": [
                            {
                                "StartAt": "Wait 20s",
                                "States": {
                                    "Wait 20s": {
                                        "Type": "Wait",
                                        "Seconds": 20,
                                        "End": true
                                    }
                                }
                            },
                            {
                                "StartAt": "Pass",
                                "States": {
                                    "Pass": {
                                        "Type": "Pass",
                                        "Next": "Wait 10s"
                                    },
                                    "Wait 10s": {
                                        "Type": "Wait",
                                        "Seconds": 10,
                                        "End": true
                                    }
                                }
                            }
                        ]
                    },
                    "Final State": {
                        "Type": "Pass",
                        "End": true
                    }
                }
            },
            states: ['queued', 'running', 'success', 'failed', 'up_for_retry', 'up_for_reschedule', 'upstream_failed', 'skipped', 'scheduled', 'no_status']
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    @mixin heading-large {
        font-family: SFProText-Regular;
        font-size: 20px;
        color: #25232D;
        letter-spacing: 0.25px;
        line-height: 28px;
        font-weight: 400;
    }

    @mixin btn_secondary_initial {
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #57565F;
        letter-spacing: 0;
        text-align: center;
        line-height: 20px;
        font-weight: 500;
    }

    @mixin body-tertiary {
        font-family: SFProText-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 16px;
        font-weight: 200;
    }

    .queued {
        border: 1px solid #63616B;
    }

    .running {
        border: 1px solid #7163C5;
    }

    .success {
        border: 1px solid #23A959;
    }

    .failed {
        border: 1px solid #DB4D71;
    }

    .up_for_retry {
        border: 1px solid #F7E54B;
    }

    .up_for_reschedule {
        border: 1px solid #5EDED1;
    }

    .upstream_failed {
        border: 1px solid #E0C00B;
    }

    .skipped {
        border: 1px solid #EA99AE;
    }

    .scheduled {
        border: 1px solid #CB88D3;
    }

    .no_status {
        border: 1px solid #F2F0F9;
    }

    .dag-page {
        display: flex;
        flex-direction: column;

        .dag-header {
            display: flex;
            justify-content: space-between;
            height: 58px;
            border-bottom: 1px solid rgba(37,35,45,0.08);
            padding: 0 20px;
            .header-text {
                @include heading-large;
                margin-top: 20px;
            }

            button {
                width: 80px;
                height: 32px;
                background: rgba(37, 35, 45, 0.04);
                border-radius: 2px;
                border: none;
                cursor: pointer;
                @include btn_secondary_initial;
                margin-top: 16px;
            }
        }

        .dag-states {
            display: flex;
            padding: 0 20px;
            margin-top: 20px;

            .dag-state {
                @include body-tertiary;
                padding: 2px 4px;
                border-radius: 2px;
                margin-right: 8px;
            }
        }
    }
</style>