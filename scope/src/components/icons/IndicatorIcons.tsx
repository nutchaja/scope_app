import React from 'react';
import normal from '../../assets/normal.png';
import high from '../../assets/high.png';
import low from '../../assets/low.png';
import exclude from '../../assets/Exclude.png';
import setting from '../../assets/setting.png';
import setting2 from '../../assets/setting2.png'

export function Normal(): React.JSX.Element {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Normal'
      src={normal}
    />
  );
}

export function Normalstatus(): React.JSX.Element {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='Normal'
      src={normal}
    />
  );
}

export function High(): React.JSX.Element {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='High'
      src={high}
    />
  );
}

export function Highsmall(): React.JSX.Element {
  return (
    <img
      className='w-[23px] h-[23px] object-contain'
      alt='High'
      src={high}
    />
  );
}

export function Highstatus(): React.JSX.Element {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='High'
      src={high}
    />
  );
}

export function Low(): React.JSX.Element {
  return (
    <img
      className='w-[23px] h-[23px] object-contain'
      alt='Low'
      src={low}
    />
  );
}

export function Lowstatus(): React.JSX.Element {
  return (
    <img
      className='w-[35px] h-[35px] object-contain'
      alt='Low'
      src={low}
    />
  );
}

export function Exclude(): React.JSX.Element {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Exclude'
      src={exclude}
    />
  );
}

export function Setting(): React.JSX.Element {
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Setting'
      src={setting}
    />
  );
}

export function Setting2(): React.JSX.Element{
  return (
    <img
      className='w-[40px] h-[60px] object-contain'
      alt='Setting2'
      src={setting2} />
  )
}