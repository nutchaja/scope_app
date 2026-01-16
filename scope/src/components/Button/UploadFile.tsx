import { useState, useRef, useEffect } from "react";
import FolderImage from "../icon/FolderImage";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const clearFile = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>

      {/* preview อยู่ด้านบนตามที่ขอ */}
      {preview && (
        <div className="mt-2 mb-3">
          <img
            src={preview}
            alt={file?.name || "preview"}
            className="w-28 h-28 object-cover rounded-md"
          />
        </div>
      )}

      <div className="relative bg-white">
        <span className="absolute inset-y-0 left-2 flex items-center">
          <FolderImage />
        </span>

        {/* กล่อง UI ดั้งเดิมของคุณ: แสดง placeholder "Choose File" ก่อนเลือกไฟล์ */}
        <input
          type="text"
          name="temperature"
          readOnly
          value={file ? file.name : ""}
          placeholder="Choose File"
          className="pl-10 pr-4 py-2 pt-3 pb-3 rounded-xl w-full focus:ring focus:ring-blue-300 shadow-md text-sm"
        />

        {/* input file โปร่งใสทับกล่องเดิม เพื่อเปิด dialog เมื่อคลิก */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-xl"
          aria-label="อัปโหลดรูปสัตว์ทดลอง"
        />

        {/* ปุ่มกากบาทล้างไฟล์ แสดงเมื่อมีไฟล์ */}
        {file && (
          <button
            type="button"
            onClick={clearFile}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            aria-label="ลบไฟล์"
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}