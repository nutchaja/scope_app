import React from 'react';
import { useDisclosure } from "@heroui/react";
import StationHeader from './StationHeader';
import SensorCard from './SensorCard';
import HistorySettingModal from '../modals/HistorySettingModal';
import { StatusNormal, StatusNotNormal, StatusDanger } from '../icons/StatusIcons';
import { Temp, Humid, Ammonia, Sound, Light, Air } from '../icons/SensorIcons';
import { Normal, High } from '../icons/IndicatorIcons';
import { TempChart, TempDangerChart } from '../charts/TempChart';
import { HumidChart, HumidDangerChart } from '../charts/HumidChart';
import { AmmoniaChart } from '../charts/AmmoniaChart';
import { SoundChart } from '../charts/SoundChart';
import { LightChart, LightDangerChart } from '../charts/LightChart';
import { AirChart } from '../charts/AirChart';

type StationType = 'normal' | 'warning' | 'danger';

interface StationCardProps {
  stationNumber: number;
  type: StationType;
}

const stationConfig = {
  normal: {
    bgColor: 'bg-[#0088FF]',
    statusColor: 'text-[#0088FF]',
    statusIcon: <StatusNormal />,
    statusText: 'ปกติ',
    tempChart: <TempChart />,
    humidChart: <HumidChart />,
    lightChart: <LightChart />,
    tempStatus: <Normal />,
    humidStatus: <Normal />,
    lightStatus: <Normal />
  },
  warning: {
    bgColor: 'bg-[#F5A524]',
    statusColor: 'text-[#DD9015]',
    statusIcon: <StatusNotNormal />,
    statusText: 'ผิดปกติ',
    tempChart: <TempDangerChart />,
    humidChart: <HumidChart />,
    lightChart: <LightChart />,
    tempStatus: <High />,
    humidStatus: <Normal />,
    lightStatus: <Normal />
  },
  danger: {
    bgColor: 'bg-[#FF383C]',
    statusColor: 'text-[#FF383C]',
    statusIcon: <StatusDanger />,
    statusText: 'อันตราย',
    tempChart: <TempDangerChart />,
    humidChart: <HumidDangerChart />,
    lightChart: <LightDangerChart />,
    tempStatus: <High />,
    humidStatus: <High />,
    lightStatus: <High />
  }
};

export function StationCard({ stationNumber, type }: StationCardProps): React.JSX.Element {
  const config = stationConfig[type];
  const { isOpen: isSettingOpen, onOpen: onSettingOpen, onOpenChange: onSettingOpenChange } = useDisclosure();

  return (
    <>
      <StationHeader
        stationNumber={stationNumber}
        bgColor={config.bgColor}
        statusColor={config.statusColor}
        statusIcon={config.statusIcon}
        statusText={config.statusText}
      />
      
      <div className='grid grid-cols-3 bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
        {/* แถวบน */}
        <SensorCard
          icon={<Temp />}
          title="อุณหภูมิ"
          chart={config.tempChart}
          statusIcon={config.tempStatus}
          onSettingClick={onSettingOpen}
        />
        
        <SensorCard
          icon={<Humid />}
          title="ความชื้น"
          chart={config.humidChart}
          statusIcon={config.humidStatus}
        />
        
        <SensorCard
          icon={<Ammonia />}
          title="แอมโมเนีย"
          chart={<AmmoniaChart />}
          statusIcon={<Normal />}
        />

        {/* แถวล่าง - มี mt-4 */}
        <SensorCard
          icon={<Sound />}
          title="เสียง"
          chart={<SoundChart />}
          statusIcon={<Normal />}
          className="mt-4"
        />

        <SensorCard
          icon={<Light />}
          title="แสงสว่าง"
          chart={config.lightChart}
          statusIcon={config.lightStatus}
          className="mt-4"
        />

        <SensorCard
          icon={<Air />}
          title="คุณภาพอากาศ"
          chart={<AirChart />}
          statusIcon={<Normal />}
          className="mt-4"
        />
      </div>

      {/* Modal เดียวสำหรับทั้ง Station */}
      <HistorySettingModal 
        isOpen={isSettingOpen} 
        onOpenChange={onSettingOpenChange} 
      />
    </>
  );
}

export default StationCard;