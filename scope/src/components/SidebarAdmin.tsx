import { Divider } from "@heroui/divider";
import { Dashboard2 } from "./icon/dashboard2";
import { PersonGear } from "./icon/Persongear";
import { VIcon } from "./icon/vIcon";
import { BackIcon3 } from "./icon/BackIcon3";
import { PersonGray } from "./icon/PersonGray";

export default function SidebarAdmin(){
    return(
        <>
            <div className="w-[350px] bg-[#F8F8FF]  p-6 h-screen shadow-md">
                <div className="flex gap-2 ml-2 mt-1">
                    <Dashboard2/>
                    <h1 className="text-xl font-bold mb-2"> Dashboard </h1>
                </div>
                <Divider/>
                <nav className="space-y-4">
                    <div className="flex items-center gap-2 mt-5">
                        <PersonGear/>
                        <div className="font-semibold"> User Management </div>
                        <div className="ml-25">
                            <VIcon/>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <BackIcon3/>
                        <PersonGray/>
                        <div className="text-[#71717A]"> User </div>
                    </div>
                </nav>
            </div>

        </>
    )
}