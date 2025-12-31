import { Button} from "@heroui/react";
import { Link } from "react-router-dom";
import { BackIcon } from "../icon/BackIcon";

export default function BackButton() {
    return (
        <>
            <Button as={Link} to="/" className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mt-5 ml-5 p-7 gap-4 rounded-2xl">
                <BackIcon/>
                <div className="text-lg font-bold text-[#71717A]">กลับหน้าหลัก </div>
            </Button>
        </>
    )
}