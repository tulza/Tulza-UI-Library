import { motion } from "framer-motion";
import { useState } from "react";

type sizeType = { width: number; height: number };
const Main = () => {
  const [size, setSize] = useState<sizeType>({
    width: 150,
    height: 150,
  });
  const [index, setIndex] = useState(0);

  const handleResize = (size: sizeType) => {
    setSize({ width: size.width, height: size.height });
  };

  const sizes = {
    small: { width: 150, height: 150 },
    medium: { width: 200, height: 200 },
    large: { width: 300, height: 300 },
  };

  const nextSize = () => {
    const next = [sizes.small, sizes.medium, sizes.large];
    setIndex((_) => {
      const nextIndex = (index + 1) % next.length;
      handleResize(next[nextIndex]);
      return nextIndex;
    });
  };

  return (
    <div className="grid64 grid h-full w-full place-content-center bg-black">
      <motion.div
        className="fadeborder relative h-[200px] w-[350px] overflow-hidden rounded-3xl bg-zinc-950 p-4"
        animate={{ width: size.width, height: size.height }}
      >
        <div className="flex items-center justify-end gap-4">
          <p className="text-white">1/4</p>
          <div
            className="grid aspect-square w-10 cursor-pointer place-items-center rounded-full bg-lime-400 pl-1"
            onClick={nextSize}
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path
                d="M0 11.7636V2.00706C0 0.769695 1.41376 0.064476 2.40225 0.808756L8.50009 5.40007C9.26866 5.97875 9.30145 7.12112 8.56736 7.74294L2.46952 12.9082C1.49479 13.7338 0 13.041 0 11.7636Z"
                fill="rgb(9 9 11)"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 right-[50%] aspect-[2.5] w-[200px] translate-x-[50%] translate-y-[50%] rounded-full bg-zinc-800 blur-3xl " />
      </motion.div>
    </div>
  );
};

export default Main;
