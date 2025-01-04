
var myChart = echarts.init(document.querySelector(".map .chart"));
var option = {
    title: {  //标题样式
        text: '',
        x: "center",
        textStyle: {
            fontSize: 18,
            color: "black"
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            // console.log(params)
            if (params.name) {
                return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
            }
        }
    },
    visualMap: {//视觉映射组件
        top: 'bottom',
        left: 'left',
        min: 10,
        max: 100000000,
        //text: ['High', 'Low'],
        realtime: false,  //拖拽时，是否实时更新
        calculable: true,  //是否显示拖拽用的手柄
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
        }
    },
    series: [
        {
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle: {//地图区域的多边形 图形样式
                normal: {//是图形在默认状态下的样式
                    label: {
                        show: true,//是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5,  //地图缩放比例,默认为1
                emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {show: true}
                }
            },
            top: "5%",//组件距离容器的距离
            data: [
                {name: '北京', value: 21893095},
                {name: '天津', value: 13866009},
                {name: '上海', value: 24870895},
                {name: '重庆', value: 32054159},
                {name: '河北', value: 74610235},
                {name: '河南', value: 99365519},
                {name: '云南', value: 47209277},
                {name: '辽宁', value: 42591407},
                {name: '黑龙江', value: 24049155},
                {name: '湖南', value: 66444864},
                {name: '安徽', value: 61027171},
                {name: '山东', value: 101527452},
                {name: '新疆', value: 25852345},
                {name: '江苏', value: 84748016},
                {name: '浙江', value: 64567588},
                {name: '江西', value: 45188635},
                {name: '湖北', value: 57752557},
                {name: '广西', value: 50126804},
                {name: '甘肃', value: 25019831},
                {name: '山西', value: 34915616},
                {name: '内蒙古', value: 24049155},
                {name: '陕西', value: 39528999},
                {name: '吉林', value: 24073453},
                {name: '福建', value: 41540086},
                {name: '贵州', value: 38562148},
                {name: '广东', value: 126012510},
                {name: '青海', value: 5923957},
                {name: '西藏', value: 3648100},
                {name: '四川', value: 83674866},
                {name: '宁夏', value: 7202654},
                {name: '海南', value: 10081232},
                {name:'台湾',value: 157886},
                {name:'香港',value: 371380},
                {name:'澳门',value: 55732}
            ],
            // event: [
            //     {
            //       type: 'click',
            //       handler: function(params) {
            //         window.city=params.name;
            //         console.log(params.name); // 点击的省份名称
            //       }
            //     }
            //   ]
        }
    ]
};
myChart.setOption(option);
myChart.on('click', function (params) {
    // updateCity(params.name);
    // console.log(window.city)
    // console.log(params.name); // 点击的省份名称
    window.city=params.name;
    console.log(window.city)
});
 window.addEventListener("resize", function() {
    myChart.resize();
});

