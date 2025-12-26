import { Header } from "../components/layout";
import StationSettingCard from "../components/station/StationSettingCard";

export default function Researcher(){
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
        
            <div className='bg-[#F5F5F5]'>
                {/* Station 1 - Normal */}
                        <StationSettingCard stationNumber={1} type="normal" />
                
                        {/* Station 2 - Warning */}
                        <StationSettingCard stationNumber={2} type="warning" />
                
                        {/* Station 3 - Danger */}
                        <StationSettingCard stationNumber={3} type="danger" />
            </div>
        </div>
    )
}