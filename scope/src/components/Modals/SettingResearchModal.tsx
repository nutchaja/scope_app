import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure,ScrollShadow, ModalFooter } from "@heroui/react";
import { Highsmall } from "../icon/Highsmall";
import { Low } from "../icon/Low";
import { Setting3 } from "../icon/Setting3";
import { SettingBlack } from "../icon/SettingBlack";
import { FolderImage } from "../icon/FolderImage";
import { TempSmall } from "../icon/Tempsmall";
import { AddNumber } from "../icon/AddNumber";
import { AddSensor } from "../icon/AddSensor";
import { DeleteStation } from "../icon/DeleteStation";
import { UpdateData } from "../icon/UpdateData";

export function SettingResearchModal(){
    const { isOpen: isSettingResearchOpen, onOpen: onSettingResearchOpen, onOpenChange: onSettingResearchOpenChange } = useDisclosure();
    
    return(
        <>
            <Button variant='light' radius='none' className='flex ml-165 p-3 py-6 text-xl  rounded-2xl text-[#71717A] bg-[#FCFCFC] items-center' onPress={onSettingResearchOpen}><Setting3 /><h1 className='pl-3 font-bold'> การตั้งค่า </h1></Button> {/*หนูทำpopup แค่ตรงนี้อันเดียวนะคะ */}
                  <Modal isOpen={isSettingResearchOpen} onOpenChange={onSettingResearchOpenChange} size='xl' className='bg-[#F8F8FF]'>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex gap-4 items-center">
                            <div className='bg-[#EBEBEC] p-3 rounded-full'>
                              <SettingBlack />
                            </div>
                            <h1> การตั้งค่า </h1>
                          </ModalHeader>
                          <ModalBody>
                            <div className="text-[#71717A]">
                                Station: x
                            </div>

                            <div className="flex gap-1">
                                <div> รูปสัตว์ทดลอง </div>
                                <div className="text-[#FF383C]"> * </div>
                            </div>
                            <div className="relative bg-white">
                              <span className="absolute inset-y-0 left-2 flex items-center">
                                <FolderImage/>                                
                              </span>
                              <input type="text" name="temperature" placeholder="temperature.png" className="pl-10 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-md text-sm"></input>
                            </div>
                            <div className="flex gap-1">
                                <div> สุขภาพสัตว์ทดลอง </div>
                                <div className="text-[#FF383C]"> * </div>
                            </div>
                            <div className="overflow-x-auto w-full">
                            <div className="flex gap-4 flex-nowrap min-w-max">
                          <div className="flex gap-4">
                            <div className="bg-[#F9F9F9] opactiy-92 shadow-[0_0_5px_rgba(0,0,0,0.2)] pt-3 pl-1 rounded-xl h-[480px] w-[330px]">
                              
                              <div className="flex items-center gap-1">
                                <TempSmall/>
                                <div className="font-bold">
                                  อุณหภูมิ
                                </div>
                              </div>

                              <div className="flex gap-1 ml-3 mt-2">
                                <div> ชื่อ </div>
                                <div className="text-[#FF383C]"> * </div>
                              </div>

                              <div className="relative bg-white w-[300px]">
                              <input type="text" name="temperature" placeholder="อุณหภูมิ" className=" ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                                <div> รูปภาพ </div>
                                <div className="text-[#FF383C]"> * </div>
                              </div>

                             <div className="relative bg-white w-[300px] ">
                              <span className="absolute inset-y-0 left-5 flex items-center">
                                <FolderImage/>                                
                              </span>
                              <input type="text" name="temperature" placeholder="temperature.png" className="ml-3 pl-10 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> สูงกว่าปกติ </div>
                              <div className="text-[#FF383C]"> * </div>
                            </div>                            
                            
                            <div className="relative bg-white w-[300px] ">
                              <input type="text" name="temperature" placeholder="Insert number" className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                              <span className="absolute inset-y-0 right-4 flex items-center">  
                                  <Highsmall/>                            
                              </span>
                              <span className="absolute inset-y-0 ml-73 flex items-center">  
                                  <AddNumber/>                            
                              </span>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> ต่ำกว่า </div>
                              <div className="text-[#FF383C]"> * </div>
                            </div>                            
                            
                            <div className="relative bg-white w-[300px] ">
                              <input type="text" name="temperature" placeholder="Insert number" className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                              <span className="absolute inset-y-0 right-4 flex items-center">  
                                  <Low/>                            
                              </span>
                              <span className="absolute inset-y-0 ml-73 flex items-center">  
                                  <AddNumber/>                            
                              </span>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> รายละเอียด </div>
                            </div>  

                            <div className="relative bg-white w-[300px]">
                              <input type="text" name="temperature" placeholder="Write Here..." className="ml-3 pl-4 pr-4 py-2 pt-3 pb-7  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-[14px]"></input>
                            </div>

                            </div>

                            <div className="bg-[#F9F9F9] opactiy-92 shadow-[0_0_5px_rgba(0,0,0,0.2)] pt-3 pl-1 rounded-xl h-[480px] w-[330px]">
                              
                              <div className="flex items-center gap-1">
                                <TempSmall/>
                                <div className="font-bold">
                                  อุณหภูมิ
                                </div>
                              </div>

                              <div className="flex gap-1 ml-3 mt-2">
                                <div> ชื่อ </div>
                                <div className="text-[#FF383C]"> * </div>
                              </div>

                              <div className="relative bg-white w-[300px]">
                              <input type="text" name="temperature" placeholder="อุณหภูมิ" className=" ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                                <div> รูปภาพ </div>
                                <div className="text-[#FF383C]"> * </div>
                              </div>

                             <div className="relative bg-white w-[300px] ">
                              <span className="absolute inset-y-0 left-5 flex items-center">
                                <FolderImage/>                                
                              </span>
                              <input type="text" name="temperature" placeholder="temperature.png" className="ml-3 pl-10 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> สูงกว่าปกติ </div>
                              <div className="text-[#FF383C]"> * </div>
                            </div>                            
                            
                            <div className="relative bg-white w-[300px] ">
                              <input type="text" name="temperature" placeholder="Insert number" className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                              <span className="absolute inset-y-0 right-4 flex items-center">  
                                  <Highsmall/>                            
                              </span>
                              <span className="absolute inset-y-0 ml-73 flex items-center">  
                                  <AddNumber/>                            
                              </span>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> ต่ำกว่า </div>
                              <div className="text-[#FF383C]"> * </div>
                            </div>                            
                            
                            <div className="relative bg-white w-[300px] ">
                              <input type="text" name="temperature" placeholder="Insert number" className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"></input>
                              <span className="absolute inset-y-0 right-4 flex items-center">  
                                  <Low/>                            
                              </span>
                              <span className="absolute inset-y-0 ml-73 flex items-center">  
                                  <AddNumber/>                            
                              </span>
                            </div>

                            <div className="flex gap-1 ml-3 mt-3">
                              <div> รายละเอียด </div>
                            </div>  

                            <div className="relative bg-white w-[300px]">
                              <input type="text" name="temperature" placeholder="Write Here..." className="ml-3 pl-4 pr-4 py-2 pt-3 pb-7  rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-[14px]"></input>
                            </div>
                          </div>
                            </div>
                          </div>
                          </div>
                          
                          
                            
                            
                          </ModalBody>
                          <ModalFooter>
                            <Button className="mr-23 bg-[#F5A524] text-[#FCFCFC] min-w-[150px] px-6 py-3 rounded-3xl">
                              <AddSensor/>
                              <span> เพิ่ม sensor </span>
                            </Button>

                            <Button className=" bg-[#FF5551] text-[#FCFCFC] min-w-[130px] px-3 py-3 rounded-3xl">
                              <DeleteStation />
                              <span> ลบ Station </span>
                            </Button>

                            <Button className=" bg-[#21B55D] text-[#FCFCFC] min-w-[130px] px-5 py-3 rounded-3xl">
                              <UpdateData/>
                              <span> อัพเดทข้อมูล </span>
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
        </>
    )
}
