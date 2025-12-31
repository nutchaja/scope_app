import { ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Button, Input } from "@heroui/react";
import { Person } from "../icon/Person";
import { PersonBlack } from "../icon/PersonBlack";
import CustomModalLogin from "./CustomModalLogin";

function LoginModal() {

    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onLoginOpen} className='bg-[#48429E] text-[#FCFCFC] shadow-md' size='lg'><Person /> เข้าสู่ระบบ </Button>
            <CustomModalLogin className='bg-[#F8F8FF]' isOpen={isLoginOpen} placement='side-right' onOpenChange={onLoginOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex gap-3 items-center'>
                                <div className='bg-[#EBEBEC] rounded-2xl p-3'>
                                    <PersonBlack />
                                </div>
                                <span> เข้าสู่ระบบ </span>
                            </ModalHeader>
                            <ModalBody>
                                <span className='text-[#71717A] pb-3'> กรุณากรอกข้อมูลรายละเอียด </span>
                                <div className='flex gap-2'>
                                    <span> ชื่อ </span>
                                    <span className='text-[#FF383C]'> * </span>
                                </div>
                                <Input type='text' classNames={{ inputWrapper: "bg-white" }} placeholder='John' />

                                <div className='flex gap-2'>
                                    <span> รหัสผ่าน </span>
                                    <span className='text-[#FF383C]'> * </span>
                                </div>
                                <Input type='password' classNames={{ inputWrapper: "bg-white" }} placeholder='************' />
                            </ModalBody>
                            <ModalFooter className='pb-4'>
                                <Button className='bg-[#EBEBEC] rounded-3xl' onPress={onClose}>
                                    ยกเลิก
                                </Button>
                                <Button className='bg-[#48429E] text-[#FCFCFC] rounded-3xl' onPress={onClose}>
                                    เข้าสู่ระบบ
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </CustomModalLogin>
        </>
    )
}

export default LoginModal