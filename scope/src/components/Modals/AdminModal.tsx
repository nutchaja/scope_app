import { Button, Divider, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import CustomModalResearcher from "./CustomModalResearcher";
import { AvatarResearcher } from "../icon/AvatarResearcher";
import { Setting3 } from "../icon/Setting3";
import { ExitIcon } from "../icon/Exit";
import { AvatarAdmin } from "../icon/AvatarAdmin";
import { Dashboard } from "../icon/Dashboard";
import CustomModalAdmin from "./CustomModalAdmin";


function AdminModal(){
    const { isOpen: isResearchOpen, onOpen: onResearchOpen, onOpenChange: onResearchOpenChange } = useDisclosure();
    return(
        <>
            <Button onPress={onResearchOpen} className='gap-4 bg-white px-4 py-5 w-[200px] h-[70px] mr-5 rounded-2xl'>
                    <AvatarAdmin />
                    <div>
                        <div className="mr-3"> 
                            Athit Yingsoong 
                        </div>
                        <div className="text-[#71717A] text-sm mr-20 ">
                            แอดมิน
                        </div>
                    </div>
                </Button>
            <CustomModalAdmin className='bg-[#F8F8FF]' isOpen={isResearchOpen} placement='side-right' onOpenChange={onResearchOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='text-[#71717A] text-sm flex gap-3 items-center'>
                                <div> Profile </div>
                            </ModalHeader>
                            <ModalBody>
                                <AvatarAdmin/>
                                <div>
                                    <div className='text-sm'>
                                        <span> ชื่อผู้ใช้ </span>
                                    </div>
                                    <div className="text-xs text-[#71717A]"> Athit Yingsoong</div>
                                </div>

                                <div>
                                    <div className='text-sm'>
                                        <span> อีเมล </span>
                                    </div>
                                    <div className="text-xs text-[#71717A]"> name@gmail.com </div>
                                </div>

                                <div>
                                    <div className='text-sm'>
                                        <span> ไลน์ </span>
                                    </div>
                                    <div className="text-xs text-[#71717A]"> bright3037 </div>
                                </div>

                                <div>
                                    <div className='text-sm'>
                                        <span> บทบาท </span>
                                    </div>
                                    <div className="text-xs text-[#71717A]"> แอดมิน </div>
                                </div>

                                <Divider/>
                                <div>
                                    <div className='text-[#71717A] text-xs'>
                                        <div> Actions </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <Setting3 />
                                            <button>
                                                <div className="flex flex-col items-start">
                                                    <div className="text-sm mt-2"> Station Dashboard</div>
                                                    <div className="text-xs text-[#71717A]">แก้ไขข้อมูล Station</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <Dashboard />
                                            <button>
                                                <div className="flex flex-col items-start">
                                                    <div className="text-sm mt-2"> Dashboard</div>
                                                    <div className="text-xs text-[#71717A]">หน้าจัดการข้อมูล</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Divider/>
                                <div className='text-[#71717A] text-xs'>
                                    <div> Logout </div>
                                </div>

                                <div>
                                    <button className="flex gap-3" onClick={onClose}>
                                        <ExitIcon/>
                                        <div className="text-[#FF383C]">
                                            ออกจากระบบ
                                        </div>
                                    </button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </CustomModalAdmin>
        </>
    )
}

export default AdminModal;