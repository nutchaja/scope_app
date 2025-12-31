import { RatImage } from "../icon/RatImage";
import { StatusDanger } from "../icon/StatusDanger";
import { StatusNormal } from "../icon/StatusNormal";
import { StatusNotNormal } from "../icon/StatusNotNormal";
import { SettingResearchModal } from "../Modals/SettingResearchModal";

export default function NavbarDanger() {
    return (
        <div className=''>
            <div className='flex items-center pl-10 bg-[#FF383C] max-w-[1564px] mx-auto mt-10 rounded-t-3xl h-[130px]'>
                <RatImage />
                <div className='flex flex-col text-[#FCFCFC] ml-4 text-xl'>
                    <span className='font-bold'>Station 3</span>
                    <span>ห้องตรวจสอบสุขภาพของหนู โดยตรวจจากสภาพแวดล้อมโดยรวม</span>
                </div>
                <div className="flex flex-col">
                    <div className='flex ml-164 mb-10 p-3 text-xl px-11 rounded-2xl text-[#FF383C] bg-[#FCFCFC]'>
                        <StatusDanger />
                        <h1 className='pl-3 font-bold'> อันตราย </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}