"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
<motion.div
  className="fixed inset-0 bg-[#1B1B1B] flex flex-col items-center justify-center text-white z-50"
  initial={{ opacity: 1 }}
  animate={progress === 100 ? { opacity: 0 } : {}}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
{/* Solid Color Progress Bar with Opacity Animation */}
<motion.div
  className="w-60 h-[1px] bg-blue-400 mt-4 relative"
  animate={{ width: `${progress}%`}}
  transition={{ ease: "easeInOut" }}
/>

  {/* Progress percentage in bottom-right */}
  <motion.div className="absolute bottom-8 right-8 text-6xl font-bold">
    {progress}%
  </motion.div>
</motion.div>

  
  );
  
}
