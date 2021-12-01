import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import datasource from '../datasource/datasource'

export default class DagChartsComponent extends Component {
    @tracked needRefresh = 0
    get option() {
        let n = this.needRefresh
        console.log(n)
        return {
            title: {
                text: this.title
            },
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
                tooltip: {},
            animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
            series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                symbol: 'rect',
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [5, 10],
                itemStyle: {
                    color: '#24a861'
                },
                label: {
                    show: true,
                    fontSize: 16,
                    position: 'bottom'
                },
                edgeLabel: {
                    fontSize: 20
                },
                categories: [
                    {
                        name: 'code',
                        symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-163226.png'
                    },
                    {
                        name: 'file',
                        symbol: 'image://https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/WX20211019-173847.png'
                    }
                ],
                data: this.datasource.nodes,
                links: this.datasource.links,
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        ]
        }
    }

    datasource = new datasource()

    onEvents = {
        click(params, echart) {
            console.log('onClick', params, echart);
        }
    }

    @action
    onChartReady(chart) {
        chart.hideLoading();
    }

    @action
    beforeSetup() {
        if (this.datasource.nodes.length === 0)
            this.datasource.refreshData(this)
    }

    @action
    afterSetup() {
        // console.log('After Setup');
    }
};
