import React from 'react';
import { Button, useDisclosure } from "@heroui/react";
import { Logo } from '../icons/Logo';
import { Time, Date } from '../icons/TimeDateIcons';
import { Person, PersonPlus } from '../icons/MiscIcons';
import RegisterModal from '../modals/RegisterModal';
import LoginModal from '../modals/LoginModal';

export function Header(): React.JSX.Element {
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();

  return (
    <>
      <div className='sticky top-0 z-50 flex gap-7 pt-2 pb-2 bg-[#F8F8FF] shadow-xl'>
        <Logo />
        
        <div className='flex items-center gap-4 bg-white px-4 py-5 w-[300px] h-[70px] rounded-2xl'>
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
            <Date />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[#48429E]'> Date </h1>
            <h2> Tuesday, December 24, 2025 </h2>
          </div>
        </div>

        <div className='flex ml-auto'>
          <div className='flex p-3 gap-3'>
            <Button onPress={onRegisterOpen} className='bg-[#FCFCFC] shadow-md' size="lg">
              <PersonPlus /> สมัครสมาชิก
            </Button>
          </div>

          <div className='flex pt-3 pr-3'>
            <Button onPress={onLoginOpen} className='bg-[#48429E] text-[#FCFCFC] shadow-md' size='lg'>
              <Person /> เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onOpenChange={onRegisterOpenChange} 
      />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onOpenChange={onLoginOpenChange} 
      />
    </>
  );
}

export default Header;