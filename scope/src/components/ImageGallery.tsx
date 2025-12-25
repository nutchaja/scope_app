import React, { useState } from 'react';
import { PicLab1, PicLab2, PicLab3, PicLab4 } from './icons/LabImages';
import { ChevronIcon } from './icons/MiscIcons';

export function ImageGallery(): React.JSX.Element {
  const imageComponents = [<PicLab1 />, <PicLab2 />, <PicLab3 />, <PicLab4 />];
  const [activePage, setActivePage] = useState(0);

  const onPrevious = () => {
    setActivePage((prev) => (prev > 0 ? prev - 1 : imageComponents.length - 1));
  };

  const onNext = () => {
    setActivePage((prev) => (prev < imageComponents.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='relative rounded-3xl overflow-hidden'>
      {imageComponents[activePage]}
      
      <button
        onClick={onPrevious}
        className="absolute left-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
      >
        <ChevronIcon />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
      >
        <ChevronIcon className="rotate-180" />
      </button>

      <ul className="absolute bottom-62 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {imageComponents.map((_, page) => (
          <li key={page}>
            <button
              onClick={() => setActivePage(page)}
              className={`w-4 h-4 rounded-full ${
                activePage === page ? "bg-secondary" : "bg-default-300"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;