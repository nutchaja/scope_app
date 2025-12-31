import { RatImage } from "../icon/RatImage";
import { Setting3 } from "../icon/Setting3";
import { StatusNormal } from "../icon/StatusNormal";
import { SettingResearchModal } from "../Modals/SettingResearchModal";

export default function NavbarNormal(){
    return (
        <div className=''>
          <div className='flex items-center pl-10 bg-[#0088FF] max-w-[1564px] mx-auto mt-4 rounded-t-3xl h-[130px]'>
            <RatImage />
            <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
              <span className='font-bold'>Station 1</span>
              <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
            </div>
            <div className="flex flex-col">
                <div className='flex ml-165 mb-10 p-3 text-xl px-13 rounded-2xl text-[#0088FF] bg-[#FCFCFC]'>
                    <StatusNormal />
                    <h1 className='pl-3 font-bold'>ปกติ</h1>
                </div>
            </div>
          </div>
        </div>
    )
}