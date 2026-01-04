import BackButton2 from "../components/Button/backButton2";
import NavbarAdminDashboard from "../components/NavbarAdminDashboard";
import SidebarAdmin from "../components/SidebarAdmin";
import UserDashboard from "../components/Userdashboard";

export default function AdminDashboard(){
    return (
        <div className='min-h-screen flex flex-col'>
            <NavbarAdminDashboard/>

            <div className='flex bg-[#F5F5F5]'>
                <SidebarAdmin/>

                <div className="flex-1 flex-col ml-5 ">
                    <BackButton2/>
                    <UserDashboard/>
                </div>
            </div>

        </div>

    )
}