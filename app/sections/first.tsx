'use client'
import Image from "next/image";
import RingCanvas from "../RingCanvas";


export default function FirstSection(){
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div className="relative w-screen h-screen overflow-hidden flex items-center bg-black text-white">
            {/* Background Image */}
            <Image
                src="/noise-texture.png" // Change to your actual image path
                alt="Background Texture"
                fill
                style={{ objectFit: "cover" }}
                className="absolute z-0 brightness-105" // Background image stays behind everything
            />
  
            {/* Glowing Ring - Ensure it's behind the text */}
            <div className="absolute inset-0 z-10">
                <RingCanvas />
            </div>
  
            {/* Text Content - Ensures it stays above everything */}
            <div className="relative z-20 flex flex-col items-start justify-start space-y-4 ml-20">
                <h1 className="text-[8rem] opacity-80 font-semibold uppercase leading-[1.1]">
                    Armaan Raj <br /> Thakur
                </h1>
                <p className="mt-4 text-xl opacity-80 ml-8">~Web Developer</p>
            </div>

            {/* Buttons - Top right corner */}
            <div className="absolute top-10 right-20 space-x-12 z-20 text-xl">
                <button
                    onClick={() => scrollToSection("secondSection")}
                    className="bg-transparent text-white hover:scale-105 duration-700 pb-4 group opacity-75 hover:opacity-100"
                >
                    <span className="relative group-hover:translate-y-1 transition-all duration-500">
                        About
                        <span className="absolute left-0 bottom-[10px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 group-hover:translate-y-4 transition-all duration-500"></span>
                    </span>
                </button>
                <button
                    onClick={() => scrollToSection("thirdSection")}
                    className="bg-transparent text-white hover:scale-105 duration-700 pb-4 group opacity-75 hover:opacity-100"
                >
                    <span className="relative group-hover:translate-y-1 transition-all duration-500">
                        Work
                        <span className="absolute left-0 bottom-[10px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 group-hover:translate-y-4 transition-all duration-500"></span>
                    </span>
                </button>
            </div>


        </div>
    );
}
