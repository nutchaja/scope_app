import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import { HistorySetting } from '../icons/MiscIcons';
import { Highsmall, Low, Normalstatus, Highstatus, Lowstatus } from '../icons/IndicatorIcons';

interface HistorySettingModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export function HistorySettingModal({ isOpen, onOpenChange }: HistorySettingModalProps): React.JSX.Element {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='xl' className='bg-[#F8F8FF]'>
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
                    <input 
                      placeholder='number' 
                      className='bg-white w-[260px] p-2 pl-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'
                    />
                    <div className='absolute left-63 top-49'>
                      <Highsmall />
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex gap-1'>
                    <h1> ต่ำกว่าปกติ</h1>
                    <h1 className='text-[#FF383C]'> * </h1>
                  </div>
                  <div>
                    <input 
                      placeholder='number' 
                      className='bg-white w-[260px] p-2 pl-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)] text-sm mt-1'
                    />
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
                {[
                  { time: '11:00', icon: <Normalstatus /> },
                  { time: '10:00', icon: <Normalstatus /> },
                  { time: '09:00', icon: <Highstatus /> },
                  { time: '08:00', icon: <Highstatus /> },
                  { time: '07:00', icon: <Lowstatus /> },
                  { time: '06:00', icon: <Lowstatus /> }
                ].map((row, index, array) => (
                  <div 
                    key={row.time} 
                    className={`flex text-base ${index < array.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className='flex-1 text-center py-4'>{row.time}</div>
                    <div className='flex-1 text-center py-4'>xx.xx</div>
                    <div className='flex-1 text-center py-4'>xx.xx</div>
                    <div className='flex-1 text-center py-4'>xx.xx</div>
                    <div className='flex-1 text-center py-4 flex justify-center'>
                      <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
                        {row.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default HistorySettingModal;