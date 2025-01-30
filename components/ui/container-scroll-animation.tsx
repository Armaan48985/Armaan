import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform} from "framer-motion";
import { Header } from "./Header";
import { Card } from "./Card";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[50rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: "500px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};
