import { Setting2 } from "./IndicatorIcons"

export default function SettingButton(){
    return (
        <div>
            <div className={`flex ml-auto mr-10 mb-7 p-3 text-xl px-6 rounded-2xl bg-[#FCFCFC]`}>
                <Setting2/>
                <h1 className='pl-3 font-bold'> การตั้งค่า </h1>
            </div>
        </div>
    )
}