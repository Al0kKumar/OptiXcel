
import { Button } from "./Button";

export const Hero = ({scrollToFeatures}: {scrollToFeatures : () => void}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center text-center">
        <div className="text-[60px] font-semibold leading-[1.1] text-white">
          <span className="text-orange-500">Inst</span>
          <span className="text-orange-400">ant</span> Image{" "}
          <span className="text-orange-500">Compr</span>
          <span className="text-orange-400">ession</span>{" "}
          <span className="text-orange-400">&</span> Conversion
        </div>
        <div className="text-[54px] font-semibold mt-[-15px] text-white">
          made simple !
        </div>
        <Button onClick={scrollToFeatures} />
      </div>
    </div>
  );
};
