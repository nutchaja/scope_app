import React from 'react';
import person from '../../assets/person.png';
import personPlus from '../../assets/person-plus.png';
import personPlusBlack from '../../assets/personplusblack.png';
import personBlack from '../../assets/personblack.png';
import ratimage from '../../assets/ratimage.png';
import sharelink from '../../assets/sharelink.png';
import history from '../../assets/history.png';

export function Person(): React.JSX.Element {
  return (
    <img
      className='w-[20px]'
      alt='Person'
      src={person}
    />
  );
}

export function PersonPlus(): React.JSX.Element {
  return (
    <img
      className='w-[20px]'
      alt='PersonPlus'
      src={personPlus}
    />
  );
}

export function PersonPlusBlack(): React.JSX.Element {
  return (
    <img
      className='w-[22px]'
      alt='PersonPlusBlack'
      src={personPlusBlack}
    />
  );
}

export function PersonBlack(): React.JSX.Element {
  return (
    <img
      className='w-[15px]'
      alt='PersonBlack'
      src={personBlack}
    />
  );
}

export function RatImage(): React.JSX.Element {
  return (
    <img
      className='w-[90px] object-contain'
      alt='RatImage'
      src={ratimage}
    />
  );
}

export function ShareLink(): React.JSX.Element {
  return (
    <img
      className='w-[8px] h-[11px] opacity-60 object-contain'
      alt='ShareLink'
      src={sharelink}
    />
  );
}

export function HistorySetting(): React.JSX.Element {
  return (
    <img
      className='w-[17px] h-[18px] object-contain'
      alt='HistorySetting'
      src={history}
    />
  );
}

export const ChevronIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};