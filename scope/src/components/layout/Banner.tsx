import React from 'react';
import banner from '../../assets/Banner.png';

export function Banner(): React.JSX.Element {
  return (
    <img
      className='w-full h-auto object-contain'
      alt='Banner'
      src={banner}
    />
  );
}

export default Banner;