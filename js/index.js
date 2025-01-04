// 柱状图1模块
(function()  {
  // 实例化对象

  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "70后",
          "80后",
          "90后",
          "00后"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "受教育程度（百分比）",
        type: "bar",
        barWidth: "35%",
        data: [23.98,41.64,56.86,73.66],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
 // myChart.on('click',function(params){
  //  window.open('panel pie1' + encodeURIComponent(params.name))
 // });


  // 数据变化
  var dataAll = [
    { year: "sixth", data: [23.98,41.64,56.86,73.66] },
    { year: "seventh", data: [24.03, 41.83, 57.12, 72.66] }
  ];

  $(".bar1 h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();



//   饼状图？（文化水平）
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

  var option;

option = {
  title: {
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'right',
    bottom: 'bottom',
    textStyle: {
      color: 'white' // 设置图例文字的颜色
    }
  },
  series: [
    {
      name: '人数',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 518176222, name: 'junior' },
        { value: 186646865, name: 'senior' },
        { value: 45625793, name: 'specialty' },
        { value: 68610519, name: 'undergraduate' },
        { value: 4138585, name: 'master' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  // 数据变化
  var dataAll = [
    { year: "第六次", data: [{ value: 518176222, name: 'junior' },
    { value: 186646865, name: 'senior' },
    { value: 45625793, name: 'specialty' },
    { value: 68610519, name: 'undergraduate' },
    { value: 4138585, name: 'master' }] },
    { year: "第七次", data: [{ value: 487095010, name: 'junior' },
    { value: 212209922, name: 'senior' },
    { value: 112303003, name: 'specialty' },
    { value: 94156072, name: 'undergraduate' },
    { value: 9488228, name: 'master' }] }
  ];

  $(".pie1 h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

