import { Datee } from "./icon/Date";
import { Logo } from "./icon/Logo";
import { Time } from "./icon/Time";
import AdminModal from "./Modals/AdminModal";

export default function NavbarAdminDashboard(){
    return (
        <div className='sticky top-0 z-50 flex gap-7 pt-2 pb-2 bg-[#F8F8FF] shadow-xl'>
        <Logo />
        <div className='flex items-center gap-4 bg-white  px-4 py-5 w-[300px] h-[70px] rounded-2xl'>
          <div className='pb-5'>
            <Time />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[#48429E]'> Time </h1>
            <h2> 10:45 AM </h2>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white px-4 py-3 w-[300px] h-[70px] rounded-2xl'>
          <div className='pb-5'>
            <Datee />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[#48429E]'> Date </h1>
            <h2> Tuesday, December 24,2025 </h2>
          </div>
        </div>

        <div className='flex ml-auto'>
          <div className='flex pr-6'>
            <AdminModal/>
          </div>
        </div>
      </div>
    )
}