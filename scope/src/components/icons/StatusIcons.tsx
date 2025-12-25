import React from 'react';
import statusNormal from '../../assets/statusNormal.png';
import statusNotnormal from '../../assets/statusNotnormal.png';
import statusDanger from '../../assets/statusDanger.png';

export function StatusNormal(): React.JSX.Element {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusNormal'
      src={statusNormal}
    />
  );
}

export function StatusNotNormal(): React.JSX.Element {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusNotNormal'
      src={statusNotnormal}
    />
  );
}

export function StatusDanger(): React.JSX.Element {
  return (
    <img
      className='w-[25px] h-[25px] object-contain'
      alt='StatusDanger'
      src={statusDanger}
    />
  );
}