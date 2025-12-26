import React, { useEffect, useState, useRef } from 'react'
import logo from './assets/Logo.png'
import { Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, checkbox, Button, useDisclosure, Input, extendVariants, Checkbox } from "@heroui/react";
import { Outlet , BrowserRouter,Routes,Route } from 'react-router-dom';
import time from './assets/time.png';
import date from './assets/date.png';
import person from './assets/person.png'
import personPlus from './assets/person-plus.png'
import personPlusBlack from './assets/personplusblack.png'
import personBlack from './assets/personblack.png'
import banner from './assets/Banner.png'
import ratimage from './assets/ratimage.png'
import statusNormal from './assets/statusNormal.png'
import statusNotnormal from './assets/statusNotnormal.png'
import statusDanger from './assets/statusDanger.png'
import temp from './assets/temp.png'
import humid from './assets/humid.png'
import ammonia from './assets/ammonia.png'
import sound from './assets/sound.png'
import light from './assets/light.png'
import air from './assets/air.png'
import normal from './assets/normal.png'
import high from './assets/high.png'
import exclude from './assets/Exclude.png'
import setting from './assets/setting.png';
import { Divider } from "@heroui/react";
import * as echarts from 'echarts';
import sharelink from './assets/sharelink.png'
import piclab2 from './assets/piclab2.png'
import piclab1 from './assets/piclab1.png'
import piclab3 from './assets/piclab3.png'
import piclab4 from './assets/piclab4.png'
import footer from './assets/footer.png'
import history from './assets/history.png'
import {DatePicker} from "@heroui/react";
import {now, getLocalTimeZone} from "@internationalized/date";
import low from './assets/low.png'

export function Logo() {
  return (
    <Image
      className='w-[400px]'
      alt="HeroUI hero Image"
      src={logo}
    />
  )
}

export function Time() {
  return (
    <img
      className='max-w-[25px] max-h-[25px]'
      alt="Time"
      src={time}
    />
  )
}

export function Date() {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt="Date"
      src={date}
    />
  )
}

function StatusNormal() {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusNormal'
      src={statusNormal} />
  )
}

function StatusNotNormal() {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusNotNormal'
      src={statusNotnormal} />
  )
}

function StatusDanger() {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusDanger'
      src={statusDanger} />
  )
}

function Temp() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Temp'
      src={temp} />
  )
}

function Humid() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Humid'
      src={humid} />
  )
}

function Ammonia() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Ammonia'
      src={ammonia} />
  )
}

function Sound() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Sound'
      src={sound} />
  )
}

function Light() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Light'
      src={light} />
  )
}

function Air() {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Air'
      src={air} />
  )
}

function Normal() {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Normal'
      src={normal} />
  )
}

function Normalstatus() {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='Normal'
      src={normal} />
  )
}

function High() {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='High'
      src={high} />
  )
}

function Highsmall() {
  return (
    <img
      className='w-[23px] h-[23px] object-contain'
      alt='High'
      src={high} />
  )
}

function Highstatus() {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='High'
      src={high} />
  )
}

function Low() {
  return (
    <img
      className='w-[23px] h-[23px] object-contain'
      alt='Low'
      src={low} />
  )
}

function Lowstatus() {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='Low'
      src={low} />
  )
}

function Exclude() {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Normal'
      src={exclude} />
  )
}

function Setting() {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Normal'
      src={setting} />
  )
}

function Person() {
  return (
    <img
      className='w-[20px]'
      alt='Person'
      src={person}
    />
  )
}

function PersonPlus() {
  return (
    <img
      className='w-[20px]'
      alt='PersonPlus'
      src={personPlus}
    />
  )
}

function PersonPlusBlack() {
  return (
    <img
      className='w-[22px]'
      alt='PersonPlusBlack'
      src={personPlusBlack} />
  )
}

function PersonBlack() {
  return (
    <img
      className='w-[15px]'
      alt='PersonBlack'
      src={personBlack} />
  )
}

function HistorySetting() {
  return (
    <img
      className='w-[17px] h-[18px] object-contain'
      alt='HistorySetting'
      src={history} />
  )
}

function Banner() {
  return (
    <img
      className='w-full h-auto object-contain'
      alt='Banner'
      src={banner} />
  )
}

function PicLab1() {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab2'
      src={piclab1} />
  )
}

function PicLab2() {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab2'
      src={piclab2} />
  )
}

function PicLab3() {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab2'
      src={piclab3} />
  )
}
function PicLab4() {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab2'
      src={piclab4} />
  )
}


function RatImage() {
  return (
    <img
      className='w-[90px] object-contain'
      alt='RatImage'
      src={ratimage} />
  )
}

function ShareLink() {
  return (
    <img
      className='w-[8px] h-[11px] opacity-60 object-contain'
      alt='ShareLink'
      src={sharelink} />
  )
}

function Footer(){
  return (
    <img
    className='w-[500px] object-contain mb-6'
    alt='FooterImage'
    src={footer} />
  )
}


export const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};



function TempChart() {
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
            data: [24, 25, 26, 28, 27, 26, 25],
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

function TempDangerChart() {
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

  return <div ref={chartRef} style={{ width: '95%', height: '400px' }} />;
}

function HumidChart() {
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
            formatter: '{value} %'
          }
        },
        series: [
          {
            name: 'ความชื้น',
            type: 'line',
            data: [65, 60, 58, 55, 57, 59, 62],
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

function HumidDangerChart() {
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
            formatter: '{value} %'
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

  return <div ref={chartRef} style={{ width: '95%', height: '400px' }} />;
}

function AmmoniaChart() {
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
            formatter: '{value} ppm'
          }
        },
        series: [
          {
            name: 'แอมโมเนีย',
            type: 'line',
            data: [0.2, 0.3, 0.5, 0.4, 0.6, 0.3, 0.2],
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

function SoundChart() {
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
            formatter: '{value} dB'
          }
        },
        series: [
          {
            name: 'เสียง',
            type: 'line',
            data: [40, 42, 45, 50, 48, 44, 41],
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

function LightChart() {
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
            formatter: '{value} lux'
          }
        },
        series: [
          {
            name: 'แสงสว่าง',
            type: 'line',
            data: [200, 400, 600, 800, 700, 500, 300],
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

function LightDangerChart() {
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
            formatter: '{value} %'
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

  return <div ref={chartRef} style={{ width: '95%', height: '400px' }} />;
}

function AirChart() {
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

export default function App() {
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
  const { isOpen: isSettingOpen, onOpen: onSettingOpen, onOpenChange: onSettingOpenChange} = useDisclosure();
  const CustomModalRegister = extendVariants(Modal, {
    variants: {
      placement: {
        "side-right": {
          wrapper: "justify-end pt-10 items-stretch",
          base: "mx-0 my-0 max-w-xl h-[840px]",
        },
      },
    },
  });

  const imageComponents = [<PicLab1 />, <PicLab2 />, <PicLab3 />, <PicLab4 />];
  const [activePage, setActivePage] = useState(0);

  const onPrevious = () => {
    setActivePage((prev) =>
      prev > 0 ? prev - 1 : imageComponents.length - 1
    );
  };

  const onNext = () => {
    setActivePage((prev) =>
      prev < imageComponents.length - 1 ? prev + 1 : 0
    );
  };


  const CustomModalLogin = extendVariants(Modal, {
    variants: {
      placement: {
        "side-right": {
          wrapper: "justify-end pt-10 items-stretch",
          base: "mx-0 my-0 max-w-xl h-[380px]",
        },
      },
    },
  });


  return (
    <div className='min-h-screen flex flex-col'>
      <div className='sticky top-0 z-50 flex gap-7 pt-2 pb-2 bg-[#F8F8FF] shadow-xl'>
        <Logo />
        <div className='flex items-center gap-4 bg-white  px-4 py-5 w-[300px] h-[70px] rounded-2xl'>
          <div className='pb-5'>
            <Time />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[#48429E]'> Time </h1>
            <h2> 10:45 AM </h2>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white px-4 py-3 w-[300px] h-[70px] rounded-2xl'>
          <div className='pb-5'>
            <Date />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[#48429E]'> Date </h1>
            <h2> Tuesday, December 24,2025 </h2>
          </div>
        </div>

        <div className='flex ml-auto'>
          <div className='flex p-3 gap-3'>

            <Button onPress={onRegisterOpen} className='bg-[#FCFCFC] shadow-md' size="lg"> <PersonPlus /> สมัครสมาชิก </Button>
            <CustomModalRegister className='bg-[#F8F8FF]' isOpen={isRegisterOpen} placement='side-right' onOpenChange={onRegisterOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex gap-3 items-center'>
                      <div className='bg-[#EBEBEC] rounded-2xl p-3'>
                        <PersonPlusBlack />
                      </div>
                      <span>สมัครสมาชิก</span>
                    </ModalHeader>
                    <ModalBody>
                      <span className='text-[#71717A] pb-3'> กรุณากรอกข้อมูลรายละเอียด </span>
                      <div className='flex gap-2'>
                        <span> ชื่อ</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='John' />

                      <div className='flex gap-2'>
                        <span> รหัสผ่าน </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="password" classNames={{ inputWrapper: "bg-white" }} placeholder='************' />

                      <div className='flex gap-2'>
                        <span> อีเมล</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="email" classNames={{ inputWrapper: "bg-white" }} placeholder='name@email.com' />

                      <div className='flex gap-2'>
                        <span> ไลน์</span>
                      </div>
                      <div className='flex rounded-xl bg-[#FFFFFF]'>
                        <span className='w-[80px] pt-2 text-[#71717A] shadow-xs ml-2'>Line - ID  </span>
                        <span className='pt-2 text-[#71717A] shadow-xs'> | </span>
                        <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='ID here...' />
                      </div>

                      <div className='flex gap-2'>
                        <span> บทบาทการเป็นสมาชิก </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          ผู้ใช้ทั่วไป
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้ </span>
                        </Checkbox>
                      </div>


                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          นักวิจัย
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          แอดมิน
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                      <span className='text-[#71717A] text-sm'> สำหรับนักวิจัยและแอดมิน จำเป็นต้องรอการตอบรับจากทางแอดมิน</span>
                    </ModalBody>
                    <ModalFooter>
                      <Button className='bg-[#EBEBEC] rounded-3xl' onPress={onClose}>
                        ยกเลิก
                      </Button>
                      <Button className='bg-[#48429E] text-[#FCFCFC] rounded-3xl' onPress={onClose}>
                        สมัครสมาชิก
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </CustomModalRegister>
          </div>

          <div className='flex pt-3 pr-3'>
            <Button onPress={onLoginOpen} className='bg-[#48429E] text-[#FCFCFC] shadow-md' size='lg'><Person /> เข้าสู่ระบบ </Button>
            <CustomModalLogin className='bg-[#F8F8FF]' isOpen={isLoginOpen} placement='side-right' onOpenChange={onLoginOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex gap-3 items-center'>
                      <div className='bg-[#EBEBEC] rounded-2xl p-3'>
                        <PersonBlack />
                      </div>
                      <span> เข้าสู่ระบบ </span>
                    </ModalHeader>
                    <ModalBody>
                      <span className='text-[#71717A] pb-3'> กรุณากรอกข้อมูลรายละเอียด </span>
                      <div className='flex gap-2'>
                        <span> ชื่อ </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type='text' classNames={{ inputWrapper: "bg-white" }} placeholder='John' />

                      <div className='flex gap-2'>
                        <span> รหัสผ่าน </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type='password' classNames={{ inputWrapper: "bg-white" }} placeholder='************' />
                    </ModalBody>
                    <ModalFooter className='pb-4'>
                      <Button className='bg-[#EBEBEC] rounded-3xl' onPress={onClose}>
                        ยกเลิก
                      </Button>
                      <Button className='bg-[#48429E] text-[#FCFCFC] rounded-3xl' onPress={onClose}>
                        เข้าสู่ระบบ
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </CustomModalLogin>
          </div>
        </div>
      </div>

      <div className='bg-[#F5F5F5]'>
        <Banner />
        <div className=''>
          <div className='flex items-center pl-10 bg-[#0088FF] max-w-[1800px] mx-auto mt-10 rounded-t-3xl h-[130px]'>
            <RatImage />
            <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
              <span className='font-bold'>Station 1</span>
              <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
            </div>
            <div className='flex ml-230 mb-10 mb-7 p-3 text-xl pl-15 pr-15 rounded-2xl text-[#0088FF] bg-[#FCFCFC]'>
              <StatusNormal />
              <h1 className='pl-3 font-bold'>ปกติ</h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Temp />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> อุณหภูมิ </p>
                <div className='flex ml-68 gap-2'>
                  <Button isIconOnly variant='light' radius='none' className='mt-2' ><Normal /></Button>
                  <Button isIconOnly variant='light' radius='none' className='mt-2' ><Exclude /></Button>
                  <Button isIconOnly variant='light' radius='none' className='mt-2' onPress={onSettingOpen}><Setting /></Button> {/*หนูทำpopup แค่ตรงนี้อันเดียวนะคะ */}
                  <Modal isOpen={isSettingOpen} onOpenChange={onSettingOpenChange} size='xl' className='bg-[#F8F8FF]'>
                    <ModalContent>
                      {(onClose) =>  (
                        <>
                          <ModalHeader className="flex gap-4 items-center">
                            <div className='bg-[#EBEBEC] p-3 rounded-full'>
                              <HistorySetting/>
                            </div>
                            <h1>ประวัติย้อนหลัง</h1>
                          </ModalHeader>
                          <ModalBody>
                            
                              <div className='flex gap-3'>
                                <div>
                                  <h1>ตั้งแต่วันที่</h1>
                                  <div className="w-[260px] max-w-xl flex flex-row gap-4 mt-1">
                                    <DatePicker
                                      hideTimeZone
                                      showMonthAndYearPickers
                                      defaultValue={now(getLocalTimeZone())}
                                      variant="bordered"
                                      className='bg-white'
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h1> สิ้นสุดวันที่ </h1>
                                  <div className="w-[260px] max-w-xl flex flex-row gap-4 mt-1">
                                    <DatePicker
                                      hideTimeZone
                                      showMonthAndYearPickers
                                      defaultValue={now(getLocalTimeZone())}
                                      variant="bordered"
                                      className='bg-white'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className='flex gap-4'>
                                <div>
                                  <div className='flex gap-1'>
                                    <h1> สูงกว่าปกติ</h1>
                                    <h1 className='text-[#FF383C]'> * </h1>
                                  </div>
                                  <div>
                                    <input placeholder='number' className='bg-white w-[260px] p-2 pl-4  rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'></input>
                                    <div className='absolute left-63 top-49'>
                                      <Highsmall />
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <div className='flex gap-1'>
                                    <h1> สูงกว่าปกติ</h1>
                                    <h1 className='text-[#FF383C]'> * </h1>
                                  </div>
                                  <div>
                                    <input placeholder='number' className='bg-white w-[260px] p-2 pl-4  rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'></input>
                                    <div className='absolute right-6 top-49'>
                                      <Low />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className='bg-[#48429E] text-[#FCFCFC] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-hidden'>
                                  <div className='flex text-xl'>
                                    <div className='flex-1 text-center py-4'> เวลา </div>
                                    <div className='w-px bg-[#FCFCFC]'></div>
                                    <div className='flex-1 text-center py-4'> เฉลี่ย </div>
                                    <div className='w-px bg-[#FCFCFC]'></div>
                                    <div className='flex-1 text-center py-4'> สูงสุด </div>
                                    <div className='w-px bg-[#FCFCFC]'></div>
                                    <div className='flex-1 text-center py-4'> ต่ำสุด </div>
                                    <div className='w-px bg-[#FCFCFC]'></div>
                                    <div className='flex-1 text-center py-4'> สถานะ </div>
                                  </div>
                                </div>
                              </div>

                              <div className='bg-[#FFFFFF] text-[#71717A] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-hidden'>
                                  <div className='flex text-base border-b border-gray-200'>
                                      <div className='flex-1 text-center py-4 '>11:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Normalstatus/>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* 2222222222222 */}
                                    <div className='flex text-base border-b border-gray-200'>
                                      <div className='flex-1 text-center py-4 '>10:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className=' w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Normalstatus/>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* 33333333333 */}
                                    <div className='flex text-base border-b border-gray-200'>
                                      <div className='flex-1 text-center py-4 '>09:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className=' w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Highstatus/>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* 444444444 */}
                                    <div className='flex text-base border-b border-gray-200'>
                                      <div className='flex-1 text-center py-4 '>08:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Highstatus/>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* 55555555*/}
                                    <div className='flex text-base border-b border-gray-200'>
                                      <div className='flex-1 text-center py-4 '>07:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Lowstatus />
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* 6666666*/}
                                    <div className='flex text-base'>
                                      <div className='flex-1 text-center py-4 '>06:00</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 '>xx.xx</div>
                                      <div className='flex-1 text-center py-4 flex justify-center'>
                                        <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                          <Lowstatus />
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              

                          </ModalBody>
                        </>
                        )}
                    </ModalContent>
                  </Modal>
                  
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <TempChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-4 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Humid />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> ความชื้น </p>
                <div className='flex ml-68 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <HumidChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-3 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Ammonia />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แอมโมเนีย </p>
                <div className='flex ml-63 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AmmoniaChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Sound />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> เสียง </p>
                <div className='flex ml-74 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <SoundChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Light />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แสงสว่าง </p>
                <div className='flex ml-66 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <LightChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Air />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> คุณภาพอากาศ </p>
                <div className='flex ml-54 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AirChart />
            </div>
          </div>
        </div>
        {/* station222222222222222222222 */}
        <div className=''>
          <div className='flex items-center pl-10 bg-[#F5A524] max-w-[1800px] mx-auto mt-10 rounded-t-3xl h-[130px]'>
            <RatImage />
            <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
              <span className='font-bold'>Station 2</span>
              <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
            </div>
            <div className='flex ml-224 mb-10 mb-7 p-3 text-xl pl-15 pr-15 rounded-2xl text-[#DD9015] bg-[#FCFCFC]'>
              <StatusNotNormal />
              <h1 className='pl-3 font-bold'>ผิดปกติ</h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Temp />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> อุณหภูมิ </p>
                <div className='flex ml-68 gap-2'>
                  <High />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <TempDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-4 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Humid />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> ความชื้น </p>
                <div className='flex ml-68 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <HumidChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-3 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Ammonia />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แอมโมเนีย </p>
                <div className='flex ml-63 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AmmoniaChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Sound />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> เสียง </p>
                <div className='flex ml-74 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <SoundChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Light />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แสงสว่าง </p>
                <div className='flex ml-66 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <LightChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Air />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> คุณภาพอากาศ </p>
                <div className='flex ml-54 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AirChart />
            </div>
          </div>
        </div>
        {/* station33333333333333333333333333333333333333 */}
        <div className=''>
          <div className='flex items-center pl-10 bg-[#FF383C] max-w-[1800px] mx-auto mt-10 rounded-t-3xl h-[130px]'>
            <RatImage />
            <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
              <span className='font-bold'>Station 3</span>
              <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
            </div>
            <div className='flex ml-224 mb-10 mb-7 p-3 text-xl pl-15 pr-15 rounded-2xl text-[#FF383C] bg-[#FCFCFC]'>
              <StatusDanger />
              <h1 className='pl-3 font-bold'>อันตราย</h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Temp />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> อุณหภูมิ </p>
                <div className='flex ml-68 gap-2'>
                  <High />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <TempDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-4 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Humid />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> ความชื้น </p>
                <div className='flex ml-68 gap-2'>
                  <High />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <HumidDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-3 w-[570px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Ammonia />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แอมโมเนีย </p>
                <div className='flex ml-63 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AmmoniaChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Sound />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> เสียง </p>
                <div className='flex ml-74 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <SoundChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Light />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แสงสว่าง </p>
                <div className='flex ml-66 gap-2'>
                  <High />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <LightDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Air />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> คุณภาพอากาศ </p>
                <div className='flex ml-54 gap-2'>
                  <Normal />
                  <Exclude />
                  <Setting />
                </div>
              </div>
            </div>
            <Divider />
            <div className='flex items-center'>
              <AirChart />
            </div>
          </div>
        </div>

        <div className='flex justify-center max-w-[1500px] mx-auto mt-10  '>
          <div className='relative rounded-3xl overflow-hidden'>
            {imageComponents[activePage]}
            <button
          onClick={onPrevious}
          className="absolute left-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
        >
          <ChevronIcon />
        </button>

        {/* ปุ่มเลื่อนขวา */}
        <button
          onClick={onNext}
          className="absolute right-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
        >
          <ChevronIcon className="rotate-180" />
        </button>

        {/* จุด pagination */}
        <ul className="absolute bottom-62 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {imageComponents.map((_, page) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                className={`w-4 h-4 rounded-full ${
                  activePage === page ? "bg-secondary" : "bg-default-300"
                }`}
              />
            </li>
          ))}
        </ul>

          </div>
            

          <div>
            <div className=' flex pt-5 pl-5 pb-5 pr-4 ml-10 text-xl rounded-2xl bg-[#48429E] text-[#FCFCFC]'>
              <h1> การให้บริการ สถาบันนวัตกรรมและถ่ายทอดเทคโนโลยี </h1>
            </div>

            <div className='flex flex-col justify-center mt-4 mb-4 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)]  rounded-2xl bg-[#FCFCFC]'>
              <h1 className='pb-2'>กลุ่มงานอุทยานวิทยาศาสตร์ และพัฒนานวัตกรรมเชิงพานิชย์</h1>
              <Divider />
              <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
                <div className='flex gap-1'>
                  <span> ศูนย์อุทยานวิทยาศาสตร์ มหาวิทยาลัยพะเยา </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span > ศูนย์จัดการทรัพย์สินทางปัญญาและถ่ายทอดเทคโนโลยี</span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <div> ศูนย์วิจัยและความร่วมมืออุตสาหกรรม </div>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <div> ศูนย์บ่มเพาะวิสาหกิจและพัฒนาความเป็นผู้ประกอบการ </div>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span> ศูนย์พัฒนาระบบนิเวศนวัตกรรม </span>
                  <ShareLink />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center mt-4 mb-4 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)]  rounded-2xl bg-[#FCFCFC]'>
              <h1 className='pb-2'>กลุ่มงานบริการวิชาการเพื่อสังคม</h1>
              <Divider />
              <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
                <div className='flex gap-1'>
                  <span> ศูนย์บริการวิชาการ </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span > ศูนย์เครือข่ายความร่วมมือเพื่อการพัฒนา เชิงพื้นที่แบบสร้างสรรค์ [ABC] </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <div> ศูนย์วิจัยสัตว์ทดลอง </div>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span> ศูนย์บริการเครื่องมือวิทยาศาสตร์และ ตรวจสอบมาตรฐานผลิตภัณฑ์ </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <div> ศูนย์การเรียนรู้นกยูงไทย </div>
                  <ShareLink />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center mt-4 mb-16 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)]  rounded-2xl bg-[#FCFCFC]'>
              <h1 className='pb-2'>Tags</h1>
              <Divider />
              <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
                <div className='flex gap-1'>
                  <span> #ข่าวประชาสัมพันธ์ </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span > #บริการ </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <div> #ดาวน์โหลด </div>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span> #รูปภาพกิจกรรม </span>
                  <ShareLink />
                </div>
                <div className='flex gap-1 mt-2'>
                  <span> #ติดต่อเรา </span>
                  <ShareLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='bg-[#FCFCFC]'>
          <div className='flex justify-between ml-20 mr-20  pb-17'>
            <div className='pt-16'>
              <h1> ที่อยู่: </h1>
              <div className='mt-4'>
                <h1>สถาบันนวัตกรรมและถ่ายทอดเทคโนโลยี มหาวิทยาลัยพะเยา </h1>
                <h1> อาคาร 99 ปี พระอุบาลีคุณูปมาจารย์  (ปวง ธมฺมปญฺโญ) </h1>
                <h1> 19 หมู่ 2 ต.แม่กา อ.เมือง จ.พะเยา 56000 </h1>
              </div>
              <div className='mt-5'>
                <h1> โทรศัพท์ : 054-466666 ต่อ 3711-3714 </h1>
                <h1> Email : upiti@up.ac.th </h1>
              </div>
            </div>
            <Footer/>
          </div>
        
        </footer>

        <Outlet />
      </div>
    </div>
  )
}
