import React from 'react';
import temp from '../../assets/temp.png';
import humid from '../../assets/humid.png';
import ammonia from '../../assets/ammonia.png';
import sound from '../../assets/sound.png';
import light from '../../assets/light.png';
import air from '../../assets/air.png';

export function Temp(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Temp'
      src={temp}
    />
  );
}

export function Humid(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Humid'
      src={humid}
    />
  );
}

export function Ammonia(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Ammonia'
      src={ammonia}
    />
  );
}

export function Sound(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Sound'
      src={sound}
    />
  );
}

export function Light(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Light'
      src={light}
    />
  );
}

export function Air(): React.JSX.Element {
  return (
    <img
      className='w-[60px] h-[60px] object-contain'
      alt='Air'
      src={air}
    />
  );
}