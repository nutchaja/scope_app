import { Button, Checkbox, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import CustomModalRegister from "./CustomModalRegister";
import { EditModalIcon } from "../icon/EditModalicon";
import SwitchStatusButton from "../Button/switchButton";
import { UpdateDataWhite } from "../icon/UpdateDataWhite";
import { CreateUserIcon } from "../icon/CreateUserIcon";
import { CreateModalIconBlack } from "../icon/CreateUserIconBlack";

 function CreateUserModal(){
    const { isOpen: isCreateOpen, onOpen: onCreateOpen, onOpenChange: onCreateOpenChange } = useDisclosure();
    return(
      <div>

            <Button onPress={onCreateOpen} className="font-semibold text-lg p-6 px-7 text-[#FCFCFC] bg-[#F5A524]"> <CreateUserIcon /> สร้างผู้ใช้ </Button>
            <CustomModalRegister className='bg-[#F8F8FF]' isOpen={isCreateOpen} onOpenChange={onCreateOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex gap-3 items-center'>
                      <div className='bg-[#EBEBEC] rounded-2xl p-3'>
                        <CreateModalIconBlack />
                      </div>
                      <span> สร้างผู้ใช้ </span>
                    </ModalHeader>
                    <ModalBody>
                      <div className='flex gap-2 font-bold'>
                        <span> สถานะ</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <SwitchStatusButton/>
                      <div className='flex gap-2 font-bold'>
                        <span> ชื่อ</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='Athit Yingsoong' />


                      <div className='flex gap-2 font-bold'>
                        <span> อีเมล</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="email" classNames={{ inputWrapper: "bg-white" }} placeholder='name@email.com' />

                      <div className='flex gap-2 font-bold'>
                        <span> ไลน์</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <div className='flex rounded-xl bg-[#FFFFFF]'>
                        <span className='w-[80px] pt-2 text-[#71717A] shadow-xs ml-2'>Line - ID  </span>
                        <span className='pt-2 text-[#71717A] shadow-xs'> | </span>
                        <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='ID here...' />
                      </div>

                      <div className='flex gap-2 font-bold'>
                        <span> บทบาทการเป็นสมาชิก </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          <div className="font-bold">ผู้ใช้ทั่วไป</div>
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้ </span>
                        </Checkbox>
                      </div>


                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          <div className="font-bold">นักวิจัย</div>
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          <div className="font-bold"> แอดมิน </div>
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                    </ModalBody>
                    <ModalFooter>
                      <Button className='bg-[#F5A524] text-[#FCFCFC] text-md rounded-3xl' onPress={onClose}>
                        <CreateUserIcon/>
                        สร้าง
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </CustomModalRegister>
          </div>
  )
 }
 
 export default CreateUserModal;