import React from 'react';
import time from '../../assets/time.png';
import date from '../../assets/date.png';

export function Time(): React.JSX.Element {
  return (
    <img
      className='max-w-[25px] max-h-[25px]'
      alt="Time"
      src={time}
    />
  );
}

export function Date(): React.JSX.Element {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt="Date"
      src={date}
    />
  );
}