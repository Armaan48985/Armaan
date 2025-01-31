'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MobileWarning = () => {
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);

      if (isMobileDevice) {
        router.push("/not-optimized");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [router]);

  return(
    <div></div>
  )

};

export default MobileWarning;
