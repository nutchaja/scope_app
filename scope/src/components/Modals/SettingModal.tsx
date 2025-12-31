import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/react";
import { HistorySetting } from "../icon/HistorySetting";
import { Highsmall } from "../icon/Highsmall";
import { Low } from "../icon/Low";
import { Normalstatus } from "../icon/Normalstatus";
import { Highstatus } from "../icon/Highstatus";
import { Lowstatus } from "../icon/Lowstatus";
import { getLocalTimeZone, now } from "@internationalized/date";
import { Setting } from "../icon/Setting";

export function SettingModal(){
    const { isOpen: isSettingOpen, onOpen: onSettingOpen, onOpenChange: onSettingOpenChange } = useDisclosure();
    
    return(
        <>
            <Button isIconOnly variant='light' radius='none' className='mt-2' onPress={onSettingOpen}><Setting /></Button> {/*หนูทำpopup แค่ตรงนี้อันเดียวนะคะ */}
                  <Modal isOpen={isSettingOpen} onOpenChange={onSettingOpenChange} size='xl' className='bg-[#F8F8FF]'>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex gap-4 items-center">
                            <div className='bg-[#EBEBEC] p-3 rounded-full'>
                              <HistorySetting />
                            </div>
                            <h1>ประวัติย้อนหลัง</h1>
                          </ModalHeader>
                          <ModalBody>

                            <div className='flex gap-3'>
                              <div>
                                <h1>ตั้งแต่วันที่</h1>
                                <div className="w-[260px] max-w-xl flex flex-row gap-4 mt-1">
                                  <DatePicker
                                    hideTimeZone
                                    showMonthAndYearPickers
                                    defaultValue={now(getLocalTimeZone())}
                                    variant="bordered"
                                    className='bg-white'
                                  />
                                </div>
                              </div>
                              <div>
                                <h1> สิ้นสุดวันที่ </h1>
                                <div className="w-[260px] max-w-xl flex flex-row gap-4 mt-1">
                                  <DatePicker
                                    hideTimeZone
                                    showMonthAndYearPickers
                                    defaultValue={now(getLocalTimeZone())}
                                    variant="bordered"
                                    className='bg-white'
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='flex gap-4'>
                              <div>
                                <div className='flex gap-1'>
                                  <h1> สูงกว่าปกติ</h1>
                                  <h1 className='text-[#FF383C]'> * </h1>
                                </div>
                                <div>
                                  <input placeholder='number' className='bg-white w-[260px] p-2 pl-4  rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'></input>
                                  <div className='absolute left-63 top-49'>
                                    <Highsmall />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className='flex gap-1'>
                                  <h1> สูงกว่าปกติ</h1>
                                  <h1 className='text-[#FF383C]'> * </h1>
                                </div>
                                <div>
                                  <input placeholder='number' className='bg-white w-[260px] p-2 pl-4  rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'></input>
                                  <div className='absolute right-6 top-49'>
                                    <Low />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className='bg-[#48429E] text-[#FCFCFC] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-hidden'>
                                <div className='flex text-xl'>
                                  <div className='flex-1 text-center py-4'> เวลา </div>
                                  <div className='w-px bg-[#FCFCFC]'></div>
                                  <div className='flex-1 text-center py-4'> เฉลี่ย </div>
                                  <div className='w-px bg-[#FCFCFC]'></div>
                                  <div className='flex-1 text-center py-4'> สูงสุด </div>
                                  <div className='w-px bg-[#FCFCFC]'></div>
                                  <div className='flex-1 text-center py-4'> ต่ำสุด </div>
                                  <div className='w-px bg-[#FCFCFC]'></div>
                                  <div className='flex-1 text-center py-4'> สถานะ </div>
                                </div>
                              </div>
                            </div>

                            <div className='bg-[#FFFFFF] text-[#71717A] rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-hidden'>
                              <div className='flex text-base border-b border-gray-200'>
                                <div className='flex-1 text-center py-4 '>11:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Normalstatus />
                                  </div>
                                </div>
                              </div>

                              {/* 2222222222222 */}
                              <div className='flex text-base border-b border-gray-200'>
                                <div className='flex-1 text-center py-4 '>10:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className=' w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Normalstatus />
                                  </div>
                                </div>
                              </div>

                              {/* 33333333333 */}
                              <div className='flex text-base border-b border-gray-200'>
                                <div className='flex-1 text-center py-4 '>09:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className=' w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Highstatus />
                                  </div>
                                </div>
                              </div>

                              {/* 444444444 */}
                              <div className='flex text-base border-b border-gray-200'>
                                <div className='flex-1 text-center py-4 '>08:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Highstatus />
                                  </div>
                                </div>
                              </div>

                              {/* 55555555*/}
                              <div className='flex text-base border-b border-gray-200'>
                                <div className='flex-1 text-center py-4 '>07:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Lowstatus />
                                  </div>
                                </div>
                              </div>

                              {/* 6666666*/}
                              <div className='flex text-base'>
                                <div className='flex-1 text-center py-4 '>06:00</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 '>xx.xx</div>
                                <div className='flex-1 text-center py-4 flex justify-center'>
                                  <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                                    <Lowstatus />
                                  </div>
                                </div>
                              </div>
                            </div>


                          </ModalBody>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
        </>
    )
}
