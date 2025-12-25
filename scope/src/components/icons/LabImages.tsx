import React from 'react';
import piclab1 from '../../assets/piclab1.png';
import piclab2 from '../../assets/piclab2.png';
import piclab3 from '../../assets/piclab3.png';
import piclab4 from '../../assets/piclab4.png';

export function PicLab1(): React.JSX.Element {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab1'
      src={piclab1}
    />
  );
}

export function PicLab2(): React.JSX.Element {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab2'
      src={piclab2}
    />
  );
}

export function PicLab3(): React.JSX.Element {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab3'
      src={piclab3}
    />
  );
}

export function PicLab4(): React.JSX.Element {
  return (
    <img
      className='w-[560px] h-[580px] object-contain shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl'
      alt='PicLab4'
      src={piclab4}
    />
  );
}