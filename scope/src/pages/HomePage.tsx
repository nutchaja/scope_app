import React from 'react';
import Header from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Banner } from '../components/layout/Banner';
import StationCard from '../components/station/StationCard';
import ImageGallery from '../components/ImageGallery';
import SidebarInfo from '../components/SidebarInfo';

export function HomePage(): React.JSX.Element {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <div className='bg-[#F5F5F5]'>
        <Banner />
        
        {/* Station 1 - Normal */}
        <StationCard stationNumber={1} type="normal" />

        {/* Station 2 - Warning */}
        <StationCard stationNumber={2} type="warning" />

        {/* Station 3 - Danger */}
        <StationCard stationNumber={3} type="danger" />

        {/* Image Gallery & Sidebar Section */}
        <div className='flex justify-center max-w-[1500px] mx-auto mt-10'>
          <ImageGallery />
          <SidebarInfo />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;