import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";
import { PersonGearGray } from "./icon/PersonGearGray";
import { Input } from "@heroui/react";
import SelectUserButton from "./Button/SelectUserButton";
import TableDashboard from "./TableDashboard";
import CreateUserModal from "./Modals/CreateUserModal";

export default function UserDashboard() {

  const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
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
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

  return (
    <>
        <div className="bg-[#F8F8FF] rounded-3xl shadow-[0_0_5px_rgba(0,0,0,0.2)] mt-4 w-[1100px] h-[600px]">
            <div className="flex gap-3 text-[#71717A] pt-8 pl-8">
                <PersonGearGray/>
                <span className="font-bold text-xl"> User Management </span>
            </div>
            <div className="text-xs pt-4 pl-8">
              ค้นหา
            </div>
            <div className="flex">
            
            <Input
              isClearable
              placeholder="Search"
              radius="lg"
              className="w-[250px] h-[10px] ml-7 mt-1" 
              classNames={{
                input: [
                  "text-blue-600",             
                  "placeholder:text-gray-400", 
                  "text-xs"                    
                ],
                inputWrapper: [
                 "bg-white",                 
                "border border-gray-300",    
                "shadow-sm"                  
                ],
                }}
                startContent={
                <SearchIcon className="text-gray-500 mr-1 mb-1" /> // ปรับสีและขนาดไอคอน
                }/>

                <SelectUserButton/>
                <div className="ml-112">
                  <CreateUserModal/>
                </div>
                </div>
                <TableDashboard/>
        </div>
    </>
  );
}