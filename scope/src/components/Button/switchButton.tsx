import { useState } from "react";

export default function SwitchStatusButton() {
  const [approved, setApproved] = useState(false);

  return (
    <div
      onClick={() => setApproved(!approved)}
      className={`relative w-30 h-12 rounded-2xl cursor-pointer transition-colors duration-300
        ${approved ? "bg-green-500" : "bg-orange-500"}`}
    >
      <div
        className={`absolute top-1 left-1 w-20 h-10 rounded-2xl bg-white shadow-md flex items-center justify-center text-sm text-[#71717A] transition-transform duration-300
          ${approved ? "translate-x-8" : "translate-x-0"}`}
      >
        {approved ? "อนุมัติ" : "รออนุมัติ"}
      </div>
    </div>
  );
}