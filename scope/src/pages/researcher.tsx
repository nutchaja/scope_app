import BackButton from "../components/Button/backButton";
import CardDanger from "../components/Card/CardDanger";
import CardNormal from "../components/Card/CardNormal";
import CardNotNormal from "../components/Card/CardNotNormal";
import { CreateStationModal } from "../components/Modals/CreateStationModal";
import NavbarResearcher from "../components/NavbarResearcher";
import NavbarDangerResearch from "../components/statusNavbar/NavbarDangerResearch";
import NavbarNormalResearch from "../components/statusNavbar/NavbarNormalResearch";
import NavbarNotNormalResearch from "../components/statusNavbar/NavbarNotNormalResearch";


export default function Researcher(){
    return (
        <div className='min-h-screen flex flex-col'>
            <NavbarResearcher/>

            <div>
                <BackButton/>
                <CreateStationModal/>
            </div>

            <NavbarNormalResearch/>
            <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
                      <CardNormal/>
            </div>

            <NavbarNotNormalResearch/>
            <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
                <CardNotNormal/>
            </div>

            <NavbarDangerResearch/>
            <div className='grid grid-cols-3  bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.3)] max-w-[1800px] mx-auto pt-5 pb-10 rounded-b-3xl'>
                <CardDanger/>
            </div>
        </div>

        
    )
}