import { Button} from "@heroui/react";
import { Link } from "react-router-dom";

import { BackIcon2 } from "../icon/BackIcon2";

export default function BackButton2() {
    return (
        <>
            <Button as={Link} to="/" className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mt-5 ml-5 p-5 gap-3 rounded-2xl">
                <BackIcon2/>
                <div className="text-md font-bold text-[#71717A]">กลับหน้าหลัก </div>
            </Button>
        </>
    )
}