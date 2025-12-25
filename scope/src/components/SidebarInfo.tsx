import React from 'react';
import { Divider } from "@heroui/react";
import { ShareLink } from './icons/MiscIcons';

export function SidebarInfo(): React.JSX.Element {
  return (
    <div>
      <div className='flex pt-5 pl-5 pb-5 pr-4 ml-10 text-xl rounded-2xl bg-[#48429E] text-[#FCFCFC]'>
        <h1> การให้บริการ สถาบันนวัตกรรมและถ่ายทอดเทคโนโลยี </h1>
      </div>

      <div className='flex flex-col justify-center mt-4 mb-4 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl bg-[#FCFCFC]'>
        <h1 className='pb-2'>กลุ่มงานอุทยานวิทยาศาสตร์ และพัฒนานวัตกรรมเชิงพาณิชย์</h1>
        <Divider />
        <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
          <div className='flex gap-1'>
            <span> ศูนย์อุทยานวิทยาศาสตร์ มหาวิทยาลัยพะเยา </span>
            <ShareLink />
          </div>
          <div className='flex gap-1 mt-2'>
            <span> ศูนย์จัดการทรัพย์สินทางปัญญาและถ่ายทอดเทคโนโลยี</span>
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

      <div className='flex flex-col justify-center mt-4 mb-4 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl bg-[#FCFCFC]'>
        <h1 className='pb-2'>กลุ่มงานบริการวิชาการเพื่อสังคม</h1>
        <Divider />
        <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
          <div className='flex gap-1'>
            <span> ศูนย์บริการวิชาการ </span>
            <ShareLink />
          </div>
          <div className='flex gap-1 mt-2'>
            <span> ศูนย์เครือข่ายความร่วมมือเพื่อการพัฒนา เชิงพื้นที่แบบสร้างสรรค์ [ABC] </span>
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
            <div> ศูนย์การเรียนรู้นุ่งยูง </div>
            <ShareLink />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center mt-4 mb-16 text-md ml-10 p-3 pl-5 pb-6 max-w-[450px] shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl bg-[#FCFCFC]'>
        <h1 className='pb-2'>Tags</h1>
        <Divider />
        <div className='flex flex-col mt-3 text-sm text-[#4B4BB9]'>
          <div className='flex gap-1'>
            <span> #ข่าวประชาสัมพันธ์ </span>
            <ShareLink />
          </div>
          <div className='flex gap-1 mt-2'>
            <span> #บริการ </span>
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
  );
}

export default SidebarInfo;