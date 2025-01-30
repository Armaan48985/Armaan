'use client'
import FirstSection from "./sections/first";
import FourthSection from "./sections/fourth";
import SecondSection from "./sections/second";
import ThirdSection from "./sections/third";



export default function Home() {
  return (
   <div className="geologica">
    <FirstSection/>

    <SecondSection/>

    <ThirdSection/>

    <FourthSection/>
   </div>
  );
}