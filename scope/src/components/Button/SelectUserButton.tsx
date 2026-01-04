import { useState } from "react";

export default function SelectUserButton(){
    const [selected, setSelected] = useState("ผู้ใช้ทั่วไป");

    return(
        <>
            <div className="flex gap-2 ml-4 bg-[#EBEBEC] p-1 mt-1 rounded-2xl text-xs items-center ">
                <div 
                    className={`p-2 rounded-2xl cursor-pointer transition-colors ${
                        selected === "ผู้ใช้ทั่วไป" ? "bg-white" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelected("ผู้ใช้ทั่วไป")}
                > 
                    ผู้ใช้ทั่วไป 
                </div>
                <div 
                    className={`p-2 rounded-3xl cursor-pointer transition-colors ${
                        selected === "นักวิจัย" ? "bg-white" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelected("นักวิจัย")}
                > 
                    นักวิจัย 
                </div>
                <div 
                    className={`p-2 rounded-3xl cursor-pointer transition-colors ${
                        selected === "แอดมิน" ? "bg-white" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelected("แอดมิน")}
                > 
                    แอดมิน 
                </div>
            </div>
        </>
    )
}