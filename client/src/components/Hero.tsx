import { Button } from "./Button";

export const Hero = ({ scrollToFeatures }: { scrollToFeatures: () => void }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-color)]">
      <div className="flex flex-col items-center text-center">
        <div className="text-[60px] font-semibold leading-[1.1] text-[var(--text-color)]">
          <span className="text-orange-500">Inst</span>
          <span className="text-orange-400">ant</span> Image{" "}
          <span className="text-orange-500">Compr</span>
          <span className="text-orange-400">ession</span>{" "}
          <span className="text-orange-400">&</span> Conversion
        </div>
        <div className="text-[54px] font-semibold mt-[-15px] text-[var(--text-color)]">
          made simple!
        </div>
        <Button onClick={scrollToFeatures} />
      </div>
    </div>
  );
};