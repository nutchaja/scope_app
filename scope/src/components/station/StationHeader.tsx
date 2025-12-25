import React from 'react';
import { RatImage } from '../icons/MiscIcons';

interface StationHeaderProps {
  stationNumber: number;
  bgColor: string;
  statusColor: string;
  statusIcon: React.JSX.Element;
  statusText: string;
}

export function StationHeader({ 
  stationNumber, 
  bgColor, 
  statusColor, 
  statusIcon, 
  statusText 
}: StationHeaderProps): React.JSX.Element {
  return (
    <div className=''>
      <div className={`flex items-center pl-10 ${bgColor} max-w-[1800px] mx-auto mt-10 rounded-t-3xl h-[130px]`}>
        <RatImage />
        <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
          <span className='font-bold'>Station {stationNumber}</span>
          <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
        </div>
        <div className={`flex ml-auto mr-10 mb-7 p-3 text-xl px-6 rounded-2xl ${statusColor} bg-[#FCFCFC]`}>
          {statusIcon}
          <h1 className='pl-3 font-bold'>{statusText}</h1>
        </div>
      </div>
    </div>
  );
}

export default StationHeader;