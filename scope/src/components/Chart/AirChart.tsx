import { useRef, useEffect } from "react";
import * as echarts from 'echarts';

export function AirChart() {
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
            formatter: '{value} AQI'
          }
        },
        series: [
          {
            name: 'คุณภาพอากาศ',
            type: 'line',
            data: [50, 55, 60, 70, 65, 58, 52],
            smooth: true,
            lineStyle: {
              color: '#0088FF',
              width: 3
            },
            itemStyle: {
              color: '#0088FF'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(0, 136, 255, 0.3)' },
                { offset: 1, color: 'rgba(0, 136, 255, 0.05)' }
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

  return <div ref={chartRef} style={{ width: '95%', height: '400px' }} />;
}