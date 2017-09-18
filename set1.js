setTimeout(showCounty, 1000);
var countyChart = echarts.init(document.getElementById('county'));

function showCounty() {
    proChart.on('click', function (param) {
        console.log(param)
        var selectedProvince = param.name;

        if (!provinces[selectedProvince]) {
            option.series.splice(1);
            option.legend = null;
            option.visualMap = null;
            countyChart.setOption(option, true);
            return;
        }
        option.series[2] = {
            name: '选择器',
            type: 'map',
            mapType: selectedProvince,
            left: '10%',
            top: '25%',
            width: '50%',
            height: '50%',
            roam: true,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: data2
        };
        // option.legend = {
        //     left: 'right',
        //     data: ['随机数据']
        // };
        option.visualMap = {
            seriesIndex: 1,
            orient: 'horizontal',
            left: 'right',
            min: 0,
            max: 1000,
            color: ['orange', 'yellow'],
            text: ['高', '低'], // 文本，默认为数值文本
            splitNumber: 0
        };
        console.log(option)
        countyChart.setOption(option, true);
    })
}


proOption = {
    tooltip: {
        //trigger: 'item'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            }
        }
    },
    series: [{
        name: '选择器',
        type: 'map',
        mapType: selectedProvince,
        left: 'left',
        top: '25%',
        width: '50%',
        height: '50%',
        roam: true,
        selectedMode: 'single',
        showLegendSymbol: false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data2
    }],
    animation: false
};