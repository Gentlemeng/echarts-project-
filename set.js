var provinces = {
    '上海': 'shanghai',
    '河北': 'hebei',
    '山西': '/asset/get/s/data-1482909909703-SyCA_JbSg.json',
    '内蒙古': '/asset/get/s/data-1482909841923-rkqqdyZSe.json',
    '辽宁': '/asset/get/s/data-1482909836074-rJV9O1-Hg.json',
    '吉林': '/asset/get/s/data-1482909832739-rJ-cdy-Hx.json',
    '黑龙江': '/asset/get/s/data-1482909803892-Hy4__J-Sx.json',
    '江苏': '/asset/get/s/data-1482909823260-HkDtOJZBx.json',
    '浙江': '/asset/get/s/data-1482909960637-rkZMYkZBx.json',
    '安徽': '/asset/get/s/data-1482909768458-HJlU_yWBe.json',
    '福建': '/asset/get/s/data-1478782908884-B1H6yezWe.json',
    '江西': '/asset/get/s/data-1482909827542-r12YOJWHe.json',
    '山东': '/asset/get/s/data-1482909892121-BJ3auk-Se.json',
    '河南': '/asset/get/s/data-1482909807135-SJPudkWre.json',
    '湖北': '/asset/get/s/data-1482909813213-Hy6u_kbrl.json',
    '湖南': '/asset/get/s/data-1482909818685-H17FOkZSl.json',
    '广东': '/asset/get/s/data-1482909784051-BJgwuy-Sl.json',
    '广西': '/asset/get/s/data-1482909787648-SyEPuJbSg.json',
    '海南': '/asset/get/s/data-1482909796480-H12P_J-Bg.json',
    '四川': '/asset/get/s/data-1482909931094-H17eKk-rg.json',
    '贵州': '/asset/get/s/data-1482909791334-Bkwvd1bBe.json',
    '云南': '/asset/get/s/data-1482909957601-HkA-FyWSx.json',
    '西藏': '/asset/get/s/data-1482927407942-SkOV6Qbrl.json',
    '陕西': '/asset/get/s/data-1482909909703-SyCA_JbSg.json',
    '甘肃': '/asset/get/s/data-1482909780863-r1aIdyWHl.json',
    '青海': '/asset/get/s/data-1482909853618-B1IiOyZSl.json',
    '宁夏': '/asset/get/s/data-1482909848690-HJWiuy-Bg.json',
    '新疆': '/asset/get/s/data-1482909952731-B1YZKkbBx.json',
    '北京': '/asset/get/s/data-1482818963027-Hko9SKJrg.json',
    '天津': '/asset/get/s/data-1482909944620-r1-WKyWHg.json',
    '重庆': '/asset/get/s/data-1482909775470-HJDIdk-Se.json',
    '香港': '/asset/get/s/data-1461584707906-r1hSmtsx.json',
    '澳门': '/asset/get/s/data-1482909771696-ByVIdJWBx.json'
};
//全国
var chinaChart = echarts.init(document.getElementById('china'));
//给value赋值
for (var i = 0; i < data1.length; i++) {
    data1[i].value = Math.round(Math.random() * 10000);
}
chinaChart.setOption({
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
        mapType: 'china',
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
        data: data1
    }],
    animation: false
}, true);

//点击省份/直辖市
var proChart = echarts.init(document.getElementById('province'));
for (var i = 0; i < data2.length; i++) {
    data2[i].value = Math.round(Math.random() * 1000);
}
clickProvince();
// setTimeout(clickProvince, 10);
function clickProvince() {
    //chinaChart.on("mapselectchanged", function (param)
    chinaChart.on("click", function (param) {
        // console.log(param)
        // '字符串'
        $('#china').hide();
        $('#county').hide();
        $('#province').show();
        var selectedProvince = param.name;
        if (!provinces[selectedProvince]) {
            option.series.splice(1);
            option.legend = null;
            option.visualMap = null;
            proChart.setOption(option, true);
            return;
        }
        proChart.setOption({
            series: {
                name: '选择器',
                type: 'map',
                map: selectedProvince,
                left: 'left',
                top: '25%',
                width: '30%',
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
            },
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
        }, true);
    });
}
var data3 = [{
        name: '张家口市'
    },
    {
        name: '承德市'
    },
    {
        name: '保定市'
    },
    {
        name: '秦皇岛市'
    },
    {
        name: '廊坊市'
    },
    {
        name: '唐山市'
    },
    {
        name: '沧州市'
    },
    {
        name: '石家庄市'
    },
    {
        name: '衡水市'
    },
    {
        name: '邢台市'
    },
    {
        name: '邯郸市'
    },
]
//点击市
var cityChart = echarts.init(document.getElementById('city'));
for (var i = 0; i < data3.length; i++) {
    data3[i].value = Math.round(Math.random() * 1000);
}
setTimeout(clickCity, 100);
function clickCity() {
    //chinaChart.on("mapselectchanged", function (param)
    proChart.on("click", function (param) {
        console.log(param)
        // '字符串'
        $('#china').hide();
        $('#city').show();
        $('#province').hide();
        var selectedCity = param.name;
        if (!provinces[selectedCity]) {
            option.series.splice(1);
            option.legend = null;
            option.visualMap = null;
            proChart.setOption(option, true);
            return;
        }
        //请求后台数据
        $.get('', function (cityMap) {
            echarts.registerMap(selectedCity, cityMap);
            cityChart.setOption({
                tooltip: {
                    trigger: 'item'
                    // formatter:function(){}
                },
                series: {
                    name: '选择器',
                    type: 'map',
                    map: selectedCity,
                    left: 'left',
                    top: '25%',
                    width: '30%',
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
                    //需要改动的地方
                    data: data3
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
            })
        })
        // cityChart.setOption({
        //     series: {
        //         name: '选择器',
        //         type: 'map',
        //         map: selectedCity,
        //         left: 'left',
        //         top: '25%',
        //         width: '30%',
        //         height: '50%',
        //         roam: true,
        //         selectedMode: 'single',
        //         itemStyle: {
        //             normal: {
        //                 label: {
        //                     show: true
        //                 }
        //             },
        //             emphasis: {
        //                 label: {
        //                     show: true
        //                 }
        //             }
        //         },
        //         data: data3
        //     },
        //     tooltip: {
        //         //trigger: 'item'
        //     },
        //     toolbox: {
        //         show: true,
        //         orient: 'vertical',
        //         x: 'right',
        //         y: 'center',
        //         feature: {
        //             mark: {
        //                 show: true
        //             },
        //             dataView: {
        //                 show: true,
        //                 readOnly: false
        //             }
        //         }
        //     },
        // }, true);
    });
}