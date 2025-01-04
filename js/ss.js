var urbanData = [];
var ruralData = [];
var xAxisData = ["Illiterate", "Primary school", "Middle school", "High school", "College", "employment numbers", "Undergraduate or above"];
var _city = '国家';

Object.defineProperty(window, 'city', {
    get: function () {
        return _city;
    },
    set: function (value) {
        if (_city !== value) {
            _city = value;
            // 数据发生变化时重新绘制折线图
            updateChart();
        }
    }
});


function getData() {
    urbanData = [];
    ruralData = [];
    return new Promise(function (resolve, reject) {
        $.get('data/城乡受教育对比1.csv', function (csvData) {
            // 处理数据的逻辑...
            var lines = csvData.split('\n');
            var locations = lines[0].split(',').slice(1);
            console.log(locations)
            for (var i = 1; i < lines.length; i++) {
                var values = lines[i].split(',');
                var value= lines[i].split(',').slice(1);;
                console.log(value)
                if (window._city == values[0]) {
                    for (var j = 4; j < value.length; j++) {
                        if (j % 2 === 0) {
                            ruralData.push(value[j]);
                        } else {
                            urbanData.push(value[j]);
                        }
                    }
                    break;
                }
            }
            resolve();
        });
    });
}
function drawLine(xAxisData, urbanData, ruralData) {
    var myChart = echarts.init(document.getElementById('uvrline'));
    var option = {
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
                color: 'white',
                interval: 0,
                rotate: 45,
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'white',
                formatter: function (value) {
                    // Format y-axis values as millions
                    return value / 1000000 + 'M';
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                },
            },
        },
        tooltip: {
            trigger: 'axis', 
            formatter: function (params) {
                return params[0].name + '<br/>' +
                    params[0].seriesName + ': ' + (params[0].value / 1000000).toFixed(2) + 'M<br/>' +
                    params[1].seriesName + ': ' + (params[1].value / 1000000).toFixed(2) + 'M';
            },
        },
        legend: {
            data: ['Urban Data', 'Rural Data'],
            textStyle: {
                color: 'white',
            },
        },
        series: [
            {
                name: 'Urban Data',
                type: 'line',
                data: urbanData,
            },
            {
                name: 'Rural Data',
                type: 'line',
                data: ruralData,
            },
        ],
        grid: {
            left: '5%',
            right: '7%',
            top: '10%',
            bottom: '5%',
            containLabel: true,
        },
    };
    myChart.setOption(option);
}


// 初始化图表
getData().then(function () {
    drawLine(xAxisData, urbanData, ruralData);
});
function updateChart() {
    getData().then(function () {

        drawLine(xAxisData, urbanData, ruralData);
    });
}