import TableData from "./statusNavbar/TableData";

export default function TableDashboard(){
  return(
    <>
        <div className="flex bg-[#48429E] text-[#FCFCFC] mt-4 mb-2 ml-7 mr-6 rounded-xl">
        <span className="py-4 flex-1 text-center"> รูปภาพ </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 flex-1 text-center"> ไอดี </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 px-10 flex-1 text-center"> ชื่อ </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 flex-1 text-center"> บทบาท </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 px-7 flex-1 text-center"> อีเมล </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 px-2 flex-1 text-center"> ไลน์ </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 flex-1 px-3 text-center"> สถานะ </span>
        <div className='w-px bg-[#FCFCFC]'></div>
        <span className="py-4 flex-1 text-center"> จัดการ </span>
      </div>

      <TableData/>
    </>
  )
}