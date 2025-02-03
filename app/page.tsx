'use client'
import { useState } from "react";
import FirstSection from "./sections/first";
import FourthSection from "./sections/fourth";
import SecondSection from "./sections/second";
import ThirdSection from "./sections/third";
import Preloader from "./Preloader";



export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    !loadingComplete ? (
      <Preloader onComplete={() => setLoadingComplete(true)} />
    ) : (
      <div className="geologica">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </div>
    )
  );
}