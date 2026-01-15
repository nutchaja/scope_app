import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure,ScrollShadow, ModalFooter } from "@heroui/react";
import { Highsmall } from "../icon/Highsmall";
import { Low } from "../icon/Low";
import FolderImage from "../icon/FolderImage";
import { TempSmall } from "../icon/Tempsmall";
import { AddNumber } from "../icon/AddNumber";
import { AddSensor } from "../icon/AddSensor";
import { UpdateData } from "../icon/UpdateData";
import { CreateStationIcon } from "../icon/createStationIcon";
import { CreateStationBlackIcon } from "../icon/CreateStationBlackIcon";
import UploadFile from "../Button/UploadFile";

export function CreateStationModal(){
    const { isOpen: isSettingResearchOpen, onOpen: onSettingResearchOpen, onOpenChange: onSettingResearchOpenChange } = useDisclosure();
    
    return(
        <>
            <Button radius='none' className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mt-5 ml-5 p-7 gap-4 rounded-2xl' onPress={onSettingResearchOpen}><CreateStationIcon /><div className="text-lg font-bold text-[#71717A]">สร้าง Station </div></Button> {/*หนูทำpopup แค่ตรงนี้อันเดียวนะคะ */}
                  <Modal isOpen={isSettingResearchOpen} onOpenChange={onSettingResearchOpenChange} size='xl' className='bg-[#F8F8FF]'>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex gap-4 items-center">
                            <div className='bg-[#EBEBEC] p-3 rounded-full'>
                              <CreateStationBlackIcon />
                            </div>
                            <h1> สร้าง Station </h1>
                          </ModalHeader>
                          <ModalBody>
                            <div className="text-[#71717A]">
                                Station: x+1
                            </div>

                            <UploadFile/>
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
                            <Button className="mr-57 bg-[#F5A524] text-[#FCFCFC] min-w-[150px] px-6 py-3 rounded-3xl">
                              <AddSensor/>
                              <span> เพิ่ม sensor </span>
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
