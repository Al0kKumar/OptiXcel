"use client";

import { useState } from "react";

const TaskPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [convertedUrl, setConvertedUrl] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
    }
  };

  const handleConvert = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setConvertedUrl("https://example.com/converted-image.jpg");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="p-6 bg-orange-500 shadow-lg sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold text-white hover:text-orange-100 transition duration-200"
          >
            SaaS Converter
          </a>
          <nav>
            <a
              href="/"
              className="text-sm text-white hover:text-orange-300 transition duration-200"
            >
              ← Back to Home
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto mt-12 p-8 bg-zinc-900 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-orange-400 mb-6">
          PNG to JPG Conversion
        </h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Convert your PNG files into JPG effortlessly with our sleek SaaS interface.
        </p>
        <div className="flex flex-col items-center space-y-6">
          {!file && (
            <label
              htmlFor="file-upload"
              className="w-full max-w-3xl p-8 border-2 border-dashed border-orange-400 rounded-xl text-center cursor-pointer hover:bg-orange-100 hover:bg-opacity-10 transition duration-300"
            >
              <p className="text-lg text-orange-400 mb-4">
                Drag and drop your PNG file here, or click to select
              </p>
              <input
                type="file"
                id="file-upload"
                accept="image/png"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
          {file && preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="max-w-xs mx-auto rounded-lg shadow-lg border border-orange-400"
              />
            </div>
          )}
          {file && (
            <button
              onClick={handleConvert}
              disabled={isLoading}
              className={`px-8 py-3 ${
                isLoading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              } rounded-full text-white text-xl font-semibold shadow-md transition duration-300`}
            >
              {isLoading ? "Converting..." : "Convert Now"}
            </button>
          )}
          {convertedUrl && (
            <div className="mt-8 text-center">
              <p className="text-2xl text-orange-400 font-bold mb-4">
                Conversion Complete!
              </p>
              <a
                href={convertedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </main>
      <footer className="p-6 text-center text-sm text-gray-400 mt-12">
        © 2025 SaaS Converter. All rights reserved.
      </footer>
    </div>
  );
};

export default TaskPage;
