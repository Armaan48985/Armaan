"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";

export function HeroScrollDemo() {
  return (
<div className="flex flex-col overflow-hidden space-y-4">
    <ContainerScroll titleComponent="">
        <Link href={`/work/1`}>
        <Image
          src={`/coin-type.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hover:scale-105 duration-500"
          draggable={false}
        />
        </Link>
      </ContainerScroll>
      <ContainerScroll titleComponent="">
        <Link href={`/work/2`}>
          <Image
            src={`/crypto-tracker.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top hover:scale-105 duration-500"
            draggable={false}
          />
        </Link>
      </ContainerScroll>
      <ContainerScroll titleComponent="">
        <Link href={`/work/3`}>
        <Image
          src={`/eval-ai.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hover:scale-105 duration-500"
          draggable={false}
        />
        </Link>
      </ContainerScroll>
    </div>
  );
}
