'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MobileWarning = () => {
    const router = useRouter();

    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

            // Redirect to /not-optimized if on mobile
            if (isMobileDevice) {
                router.push("/not-optimized");
            } 
            // If user is on /not-optimized and not on mobile, redirect to /
            else if (window.location.pathname === "/not-optimized") {
                router.push("/");
            }
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, [router]);

    return null;
};

export default MobileWarning;
