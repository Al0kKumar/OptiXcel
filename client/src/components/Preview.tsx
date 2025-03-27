"use client";
interface PreviewSectionProps {
  previewUrl: string;
  onConvert: () => void;
}

export const PreviewSection = ({ previewUrl, onConvert }: PreviewSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 text-center">
        <img src={previewUrl} alt="Preview" className="max-w-md rounded-lg" />
      </div>
      <div className="flex-1 text-center">
        <button
          onClick={onConvert}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(30,144,255,0.7)] transition-all duration-300 shadow-md"
        >
          Convert
        </button>
      </div>
    </div>
  );
};
