import React, { useEffect, useState, useRef } from 'react'
import logo from './assets/Logo.png'
import { Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, checkbox, Button, useDisclosure, Input, extendVariants, Checkbox } from "@heroui/react";
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { DatePicker } from "@heroui/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import low from './assets/low.png'
import LoginModal from './components/Modals/LoginModal';
import RegisterModal from './components/Modals/RegisterModal';
import NavbarHome from './components/NavbarHome';
import { SettingModal } from './components/Modals/SettingModal';
import NavbarNormal from './components/statusNavbar/NavbarNormal';
import CardNormal from './components/Card/CardNormal';
import NavbarNotNormal from './components/statusNavbar/NavbarNotNormal';
import CardNotNormal from './components/Card/CardNotNormal';
import NavbarDanger from './components/statusNavbar/NavbarDanger';
import CardDanger from './components/Card/CardDanger';
import ActivePage from './components/const/ActivePage';
import Banner2 from './components/Banner2';
import FooterHome from './components/FooterHome';
import BackButton from './components/Button/backButton';
import { CreateStationModal } from './components/Modals/CreateStationModal';

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

function Footer() {
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

  return (
    <div className='min-h-screen flex flex-col'>
      <NavbarHome/>

      <div className='bg-[#F5F5F5]'>
        <Banner />
        <div className='min-h-screen flex flex-col'>
        
          <NavbarNormal/>
          <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
            <CardNormal/>
          </div>
        
          <NavbarNotNormal/>
            <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
              <CardNotNormal/>
            </div>
        
          <NavbarDanger/>
            <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
              <CardDanger/>
            </div>
        </div>

        <div className='flex justify-center max-w-[1500px] mx-auto mt-10  '>
          <ActivePage/>

          <div>
            <Banner2/>
          </div>
        </div>

        <footer className='bg-[#FCFCFC]'>
          <FooterHome/>

        </footer>

        <Outlet />
      </div>
    </div>
  )
}





