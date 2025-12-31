import { Button, Divider } from "@heroui/react";
import { Temp } from "../icon/Temp";
import { SettingModal } from "../Modals/SettingModal";
import { TempChart } from "../Chart/TempChart";
import { Humid } from "../icon/Humid";
import { Normal } from "../icon/Normal";
import { Exclude } from "../icon/Exclude";
import { HumidChart } from "../Chart/HumidChart";
import { Ammonia } from "../icon/Ammonia";
import { AmmoniaChart } from "../Chart/AmmoniaChart";
import { Sound } from "../icon/Sound";
import { SoundChart } from "../Chart/SoundChart";
import { Light } from "../icon/Light";
import { LightChart } from "../Chart/LightChart";
import { Air } from "../icon/Air";
import { AirChart } from "../Chart/AirChart";
import { TempDangerChart } from "../Chart/TempDangerChart";
import { HumidDangerChart } from "../Chart/HumidDangerChart";
import { LightDangerChart } from "../Chart/LightDangerChart";

export default function CardDanger(){
    return (
        <>
        <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Temp />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> อุณหภูมิ </p>
                <div className='flex ml-45 mb-3 gap-2'>
                  <Button isIconOnly variant='light' radius='none' className='mt-2' ><Normal /></Button>
                  <Button isIconOnly variant='light' radius='none' className='mt-2' ><Exclude /></Button>
                  <SettingModal/>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <TempDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Humid />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> ความชื้น </p>
                <div className='flex ml-45 gap-2'>
                  <Normal />
                  <Exclude />
                  <div className="mt-1">
                    <SettingModal/>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <HumidDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3'>
            <div className='flex gap-3 pl-2'>
              <Ammonia />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แอมโมเนีย </p>
                <div className='flex ml-40 gap-2'>
                  <Normal />
                  <Exclude />
                  <div className="mt-1">
                    <SettingModal/>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AmmoniaChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Sound />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> เสียง </p>
                <div className='flex ml-51 gap-2'>
                  <Normal />
                  <Exclude />
                  <div className="mt-1">
                    <SettingModal/>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <SoundChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Light />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> แสงสว่าง </p>
                <div className='flex ml-42 gap-2'>
                  <Normal />
                  <Exclude />
                  <div className="mt-1">
                    <SettingModal/>
                  </div>
                </div>
            </div>
            </div>
            <Divider />
            <div>
              <LightDangerChart />
            </div>
          </div>

          <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[480px] h-[380px] pt-3 mt-4'>
            <div className='flex gap-3 pl-2'>
              <Air />
              <div className='flex items-center'>
                <p className='text-xl font-bold'> คุณภาพอากาศ </p>
                <div className='flex ml-32 gap-2'>
                  <Normal />
                  <Exclude />
                  <div className="mt-1">
                    <SettingModal />
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <AirChart />
            </div>
          </div>

        </>
    )
}