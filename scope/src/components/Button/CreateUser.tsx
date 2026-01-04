import { Button } from "@heroui/react";
import { CreateUserIcon } from "../icon/CreateUserIcon";

export default function CreateUserButton(){
    return(
        <>
            <Button className="font-semibold text-lg p-6 px-7 text-[#FCFCFC] bg-[#F5A524]">
                <CreateUserIcon/>
                <div> สร้างผู้ใช้ </div>
            </Button>
        </>
    )
}