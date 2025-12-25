import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, extendVariants } from "@heroui/react";
import { PersonBlack } from '../icons/MiscIcons';

const CustomModalLogin = extendVariants(Modal, {
  variants: {
    placement: {
      "side-right": {
        wrapper: "justify-end pt-10 items-stretch",
        base: "mx-0 my-0 max-w-xl h-[380px]",
      },
    },
  },
});

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export function LoginModal({ isOpen, onOpenChange }: LoginModalProps): React.JSX.Element {
  return (
    <CustomModalLogin 
      className='bg-[#F8F8FF]' 
      isOpen={isOpen} 
      placement='side-right' 
      onOpenChange={onOpenChange}
    >
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
  );
}

export default LoginModal;