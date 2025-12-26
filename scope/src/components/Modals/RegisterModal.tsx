const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();

const CustomModalRegister = extendVariants(Modal, {
    variants: {
      placement: {
        "side-right": {
          wrapper: "justify-end pt-10 items-stretch",
          base: "mx-0 my-0 max-w-xl h-[840px]",
        },
      },
    },
  });

  export function RegisterModal(){
    return (
        <CustomModalRegister className='bg-[#F8F8FF]' isOpen={isRegisterOpen} placement='side-right' onOpenChange={onRegisterOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex gap-3 items-center'>
                      <div className='bg-[#EBEBEC] rounded-2xl p-3'>
                        <PersonPlusBlack />
                      </div>
                      <span>สมัครสมาชิก</span>
                    </ModalHeader>
                    <ModalBody>
                      <span className='text-[#71717A] pb-3'> กรุณากรอกข้อมูลรายละเอียด </span>
                      <div className='flex gap-2'>
                        <span> ชื่อ</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='John' />

                      <div className='flex gap-2'>
                        <span> รหัสผ่าน </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="password" classNames={{ inputWrapper: "bg-white" }} placeholder='************' />

                      <div className='flex gap-2'>
                        <span> อีเมล</span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>
                      <Input type="email" classNames={{ inputWrapper: "bg-white" }} placeholder='name@email.com' />

                      <div className='flex gap-2'>
                        <span> ไลน์</span>
                      </div>
                      <div className='flex rounded-xl bg-[#FFFFFF]'>
                        <span className='w-[80px] pt-2 text-[#71717A] shadow-xs ml-2'>Line - ID  </span>
                        <span className='pt-2 text-[#71717A] shadow-xs'> | </span>
                        <Input type="text" classNames={{ inputWrapper: "bg-white" }} placeholder='ID here...' />
                      </div>

                      <div className='flex gap-2'>
                        <span> บทบาทการเป็นสมาชิก </span>
                        <span className='text-[#FF383C]'> * </span>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          ผู้ใช้ทั่วไป
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้ </span>
                        </Checkbox>
                      </div>


                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          นักวิจัย
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                      <div className='flex py-2 px-1 justify-between'>
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          แอดมิน
                          <span className='flex flex-col text-[#71717A]'> สามารถเยี่ยมชมเว็บไซต์ได้และอื่นๆ </span>
                        </Checkbox>
                      </div>

                      <span className='text-[#71717A] text-sm'> สำหรับนักวิจัยและแอดมิน จำเป็นต้องรอการตอบรับจากทางแอดมิน</span>
                    </ModalBody>
                    <ModalFooter>
                      <Button className='bg-[#EBEBEC] rounded-3xl' onPress={onClose}>
                        ยกเลิก
                      </Button>
                      <Button className='bg-[#48429E] text-[#FCFCFC] rounded-3xl' onPress={onClose}>
                        สมัครสมาชิก
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </CustomModalRegister>
    )
  }