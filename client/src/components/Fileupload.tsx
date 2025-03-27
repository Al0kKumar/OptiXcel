"use client";
import { ChangeEvent } from "react";

interface FileUploadProps {
  onFileSelect: (file: File, previewUrl: string) => void;
}

export const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      const previewUrl = URL.createObjectURL(uploadedFile);
      onFileSelect(uploadedFile, previewUrl);
    }
  };

  return (
    <>
      <button
        onClick={() => document.getElementById("fileInput")?.click()}
        className="px-8 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(255,183,77,0.7)] transition-all duration-300 shadow-md"
      >
        Choose Image
      </button>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </>
  );
};
