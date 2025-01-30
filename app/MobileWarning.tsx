'use client'
import { useRouter } from "next/navigation";
import React, {  useEffect } from "react";
// import { useRouter } from "next/router";

const MobileWarning = () => {
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);

      if (isMobileDevice) {
        // Only redirect after router is ready
        router.push("/not-optimized");
      }
    };

    checkMobile(); // Check on initial load
    window.addEventListener("resize", checkMobile); // Recheck on resizing

    return () => window.removeEventListener("resize", checkMobile);
  }, [router]);

  return(
    <div></div>
  )

};

export default MobileWarning;
