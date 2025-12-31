import { useRef, useEffect } from "react";
import * as echarts from 'echarts';

export function TempDangerChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: 'อุณหภูมิ',
            type: 'line',
            data: [20, 25, 30, 38, 45, 26, 25],
            smooth: true,
            lineStyle: {
              color: '#FF383C',
              width: 3
            },
            itemStyle: {
              color: '#FF383C'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(253, 75, 75, 0.3)' },
                { offset: 1, color: 'rgba(255, 255, 255, 0.05)' }
              ])
            }
          }
        ]
      };

      myChart.setOption(option);

      // Responsive
      const handleResize = () => {
        myChart.resize();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
}