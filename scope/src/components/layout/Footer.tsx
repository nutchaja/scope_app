import React from 'react';
import footer from '../../assets/footer.png';

function FooterImage(): React.JSX.Element {
  return (
    <img
      className='w-[500px] object-contain mb-6'
      alt='FooterImage'
      src={footer}
    />
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer className='bg-[#FCFCFC]'>
      <div className='flex justify-between ml-20 mr-20 pb-17'>
        <div className='pt-16'>
          <h1> ที่อยู่: </h1>
          <div className='mt-4'>
            <h1>สถาบันนวัตกรรมและถ่ายทอดเทคโนโลยี มหาวิทยาลัยพะเยา </h1>
            <h1> อาคาร 99 ปี พระอุบาลีคุณูปมาจารย์  (ปวง ธมฺมปกฺโก) </h1>
            <h1> 19 หมู่ 2 ต.แม่กา อ.เมือง จ.พะเยา 56000 </h1>
          </div>
          <div className='mt-5'>
            <h1> โทรศัพท์ : 054-466666 ต่อ 3711-3714 </h1>
            <h1> Email : upiti@up.ac.th </h1>
          </div>
        </div>
        <FooterImage />
      </div>
    </footer>
  );
}

export default Footer;