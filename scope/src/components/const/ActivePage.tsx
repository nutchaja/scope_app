import { useState } from "react";
import { PicLab1 } from "../icon/PicLab1";
import { PicLab2 } from "../icon/PicLab2";
import { PicLab3 } from "../icon/PicLab3";
import { PicLab4 } from "../icon/PicLab4";
import { ChevronIcon } from "../icon/ChevronIcon";

export default function ActivePage(){

    const imageComponents = [<PicLab1 />, <PicLab2 />, <PicLab3 />, <PicLab4 />];
    
    const [activePage, setActivePage] = useState(0);
     
    const onPrevious = () => {
        setActivePage((prev) =>
      prev > 0 ? prev - 1 : imageComponents.length - 1
    );
  };

    const onNext = () => {
        setActivePage((prev) =>
      prev < imageComponents.length - 1 ? prev + 1 : 0
    );
  };

  return(
      <div className='flex justify-center max-w-[1500px]  mt-10  '>
          <div className='relative rounded-3xl overflow-hidden'>
            {imageComponents[activePage]}
            <button
              onClick={onPrevious}
              className="absolute left-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
            >
              <ChevronIcon />
            </button>

            {/* ปุ่มเลื่อนขวา */}
            <button
              onClick={onNext}
              className="absolute right-4 top-80 -translate-y-1/2 bg-[#EBEBEC] text-black p-2 text-xl rounded-full"
            >
              <ChevronIcon className="rotate-180" />
            </button>

            {/* จุด pagination */}
            <ul className="absolute bottom-62 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              {imageComponents.map((_, page) => (
                <li key={page}>
                  <button
                    onClick={() => setActivePage(page)}
                    className={`w-4 h-4 rounded-full ${activePage === page ? "bg-secondary" : "bg-default-300"
                      }`}
                  />
                </li>
              ))}
            </ul>

          </div>
      </div>
  );
}