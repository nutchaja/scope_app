import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, ModalFooter } from "@heroui/react";
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
import { HumidSmall } from "../icon/HumidSmall";
import { AmmoniaSmall } from "../icon/AmmoniaSmall";
import { SoundSmall } from "../icon/SoundSmall";
import { LightSmall } from "../icon/LightSmall";
import { AirSmall } from "../icon/AirSmall";
import { useState } from "react";
import { CreateUserIcon } from "../icon/CreateUserIcon";

export function CreateStationModal(){
    const { isOpen: isSettingResearchOpen, onOpen: onSettingResearchOpen, onOpenChange: onSettingResearchOpenChange } = useDisclosure();
    
    const [sensors, setSensors] = useState([
      { id: 1, icon: <TempSmall/>, name: "อุณหภูมิ", placeholder: "อุณหภูมิ" },
      { id: 2, icon: <HumidSmall/>, name: "ความชื้น", placeholder: "ความชื้น" },
      { id: 3, icon: <AmmoniaSmall/>, name: "แอมโมเนีย", placeholder: "แอมโมเนีย" },
      { id: 4, icon: <SoundSmall/>, name: "เสียง", placeholder: "เสียง" },
      { id: 5, icon: <LightSmall/>, name: "แสง", placeholder: "แสง" },
      { id: 6, icon: <AirSmall/>, name: "คุณภาพอากาศ", placeholder: "คุณภาพอากาศ" },
    ]);

    const handleRemoveSensor = (id: number) => {
      setSensors(sensors.filter(sensor => sensor.id !== id));
    };
    
    const SensorCard = ({ 
      id,
      icon, 
      defaultName, 
      placeholder,
      onRemove
    }: { 
      id: number;
      icon: React.ReactNode; 
      defaultName: string; 
      placeholder: string;
      onRemove: () => void;
    }) => {
      const [inputValue, setInputValue] = useState("");
      const [fileName, setFileName] = useState("");

      return (
        <div className="bg-[#F9F9F9] opactiy-92 shadow-[0_0_5px_rgba(0,0,0,0.2)] pt-3 pl-1 rounded-xl h-[480px] w-[330px] relative">
          <button 
            onClick={onRemove}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>

          <div className="flex items-center gap-1">
            {icon}
            <div className="font-bold">
              {inputValue || defaultName}
            </div>
          </div>

          <div className="flex gap-1 ml-3 mt-2">
            <div> ชื่อ </div>
            <div className="text-[#FF383C]"> * </div>
          </div>

          <div className="relative bg-white w-[300px]">
            <input 
              type="text"
              value={inputValue}
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
              className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3 rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"
            />
          </div>

          <div className="flex gap-1 ml-3 mt-3">
            <div> รูปภาพ </div>
            <div className="text-[#FF383C]"> * </div>
          </div>

          <div className="relative bg-white w-[300px]">
            <input 
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFileName(e.target.files[0].name);
                }
              }}
              className="hidden"
              id={`file-upload-${id}`}
            />
            <label 
              htmlFor={`file-upload-${id}`}
              className="ml-3 flex items-center cursor-pointer"
            >
              <span className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <FolderImage/>
              </span>
              <div className="pl-10 pr-4 py-2 pt-3 pb-3 rounded-xl w-full shadow-sm text-sm text-gray-500">
                {fileName || "เลือกไฟล์..."}
              </div>
            </label>
          </div>

          <div className="flex gap-1 ml-3 mt-3">
            <div> สูงกว่าปกติ </div>
            <div className="text-[#FF383C]"> * </div>
          </div>
          
          <div className="relative bg-white w-[300px]">
            <input 
              type="text" 
              placeholder="Insert number" 
              className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3 rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"
            />
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
          
          <div className="relative bg-white w-[300px]">
            <input 
              type="text" 
              placeholder="Insert number" 
              className="ml-3 pl-4 pr-4 py-2 pt-3 pb-3 rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-sm"
            />
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
            <input 
              type="text" 
              placeholder="Write Here..." 
              className="ml-3 pl-4 pr-4 py-2 pt-3 pb-7 rounded-xl w-full focus:ring focus:ring-blue-300 shadow-sm text-[14px]"
            />
          </div>
        </div>
      );
    };
    
    return(
        <>
            <Button 
              radius='none' 
              className='bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mt-5 ml-5 p-7 gap-4 rounded-2xl' 
              onPress={onSettingResearchOpen}
            >
              <CreateStationIcon />
              <div className="text-lg font-bold text-[#71717A]">สร้าง Station </div>
            </Button>
            
            <Modal 
              isOpen={isSettingResearchOpen} 
              onOpenChange={onSettingResearchOpenChange} 
              size='4xl' 
              className='bg-[#F8F8FF]'
            >
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
                          {sensors.map((sensor) => (
                            <SensorCard 
                              key={sensor.id}
                              id={sensor.id}
                              icon={sensor.icon}
                              defaultName={sensor.name}
                              placeholder={sensor.placeholder}
                              onRemove={() => handleRemoveSensor(sensor.id)}
                            />
                          ))}
                        </div>
                      </div>
                    </ModalBody>
                    
                    <ModalFooter>
                      <Button className="mr-140 bg-[#F5A524] text-[#FCFCFC] min-w-[150px] px-6 py-3 rounded-3xl">
                        <AddSensor/>
                        <span> เพิ่ม sensor </span>
                      </Button>

                      <Button className=" bg-[#21B55D] text-[#FCFCFC] min-w-[130px] px-5 py-3 rounded-3xl">
                        <CreateUserIcon/>
                        <span> สร้าง Station </span>
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
        </>
    )
}