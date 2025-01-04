d3.csv('data/sex.csv').then(function(data) {
  // 创建存储转换后数据的数组
  var chartData = {
    names: [], // X轴数据
    boy: [], // 男生数据
    girl: [] // 女生数据
  };

  // 遍历每一行数据
  data.forEach(function(d) {
    var name = d.region;
    var total_boy = parseFloat(d['total_boy']);
    var total_girl = parseFloat(d['total_girl']);
    var high_boy = parseFloat(d['high_boy']);
    var zhuanke_boy = parseFloat(d['zhuanke_boy']);
    var above_boy = parseFloat(d['above_boy']);
    var high_girl = parseFloat(d['high_girl']);
    var zhuanke_girl = parseFloat(d['zhuanke_girl']);
    var above_girl = parseFloat(d['above_girl']);
    
    // 将数据添加到对应的数组中
    chartData.names.push(name);
    var boy = (high_boy + zhuanke_boy + above_boy) / total_boy;
    var girl = (high_girl + zhuanke_girl + above_girl) / total_girl;
    chartData.boy.push(boy);
    chartData.girl.push(girl);
  });

  // 创建图表容器
  var chartContainer = document.getElementById('bar2');

  // 创建图表实例
  var myChart = echarts.init(chartContainer);

  // 将JSON数据应用于图表配置
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    legend: {
      data: ['boy', 'girl'],
      itemGap: 5,
      left: '15%',
      textStyle: {
        color: 'white' // 设置图例文字的颜色
      }
    },
    grid: {
      top: '12%',
      left: '1%',
      right: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: chartData.names,
        axisLabel: {
          rotate: -45 // 旋转角度
        },
        axisLine: {
          lineStyle: {
            color: 'white' // 设置 x 轴的颜色
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '占比',
        axisLine: {
          lineStyle: {
            color: 'white' // 设置 x 轴的颜色
          }
        },
        axisLabel: {
          formatter: function (a) {
            a = +a;
            return isFinite(a) ? echarts.format.addCommas(+a ) : '';
          }
        }
      }
    ],
    dataZoom: [
      {
        show: true,
        start: 94,
        end: 100
      },
      {
        type: 'inside',
        start: 94,
        end: 100
      },
      {
        show: true,
        yAxisIndex: 0,
        filterMode: 'empty',
        width: 30,
        height: '80%',
        showDataShadow: false,
        left: '93%'
      }
    ],
    series: [
      {
        name: 'boy',
        type: 'bar',
        data: chartData.boy
      },
      {
        name: 'girl',
        type: 'bar',
        data: chartData.girl
      }
    ]
  };

  // 使用option设置图表
  myChart.setOption(option);
});