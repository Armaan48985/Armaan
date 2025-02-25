'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BackgroundLines } from '@/components/ui/backgroundlines';

type Project = {
    name: string;
    description: string;
    videoUrl?: string; // Optional
    image?: string;    // Optional
    liveLink: string;
    githubLink: string;
  };
  

  const projects: Record<number, Project> = {
  1: {
    name: "CoinType",
    description: `CoinType is a typing app with cryptocurrency integration, allowing users to compete in real-time typing battles while staking Ethereum. Built with Next.js and React, it uses Wagmi for wallet connections and ETH transactions. Players can challenge each other by pooling ETH, with the winner claiming the prize, combining skill improvement with crypto rewards.`,
    videoUrl: "https://www.youtube.com/embed/kUM1YUJ2ECg",
    liveLink: "https://coin-type.vercel.app/",
    githubLink: "https://github.com/Armaan48985/CoinType",
  },
  3: {
    name: "Eval.AI",
    description: `Eval.AI is a Chrome extension that uses Gemini’s API to explain, optimize, and clean code, enhancing readability and performance. Users can select code snippets and apply prompts like “optimize” or “explain.” With interactive visualizations and instant feedback, Eval.AI simplifies coding, supporting developers with clear insights into code quality and efficiency.`,
    image: '/eval-ai.png',
    liveLink: "https://eval-ai-six.vercel.app/",
    githubLink: "https://github.com/Armaan48985/Eval.AI",
},
2: {
    name: "CryptoTracker",
    description: `CryptoTracker is a real-time cryptocurrency tracking app with live prices, graphs, and charts. Built with React and TypeScript, it uses Ethers.js for crypto swaps, wallet management, and decentralized exchange interactions. With secure MetaMask integration and a sleek Tailwind CSS interface, it offers a comprehensive platform for tracking and managing crypto assets.`,
    image: '/crypto-tracker.png',
    liveLink: "https://defiapp-armaan-raj-thakurs-projects.vercel.app/",
    githubLink: "https://github.com/Armaan48985/new-defi",
  },
};

const Page = () => {
  const params = useParams();
  const id = Number(params?.id) as keyof typeof projects;

  const project = projects[id];

  if (!project) {
    return <div className="text-center text-white mt-20 text-2xl">Project not found</div>;
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-6 bg-black text-white">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
               {/* Left Side: Video or Image */}
              <div className='rounded-2xl grid md:grid-cols-2 gap-16 w-full max-w-6xl p-10 py-24 border-[1px] border-gray-800 z-20 bg-black bg-opacity-80'>
                <div className="flex-center">
                <div className="relative rounded-2xl border border-gray-600 overflow-hidden w-full h-auto aspect-video">
                    {project.videoUrl ? (
                    <iframe
                        className="w-full h-full"
                        src={project.videoUrl}
                        title={`${project.name} Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    ) : (
                        <Image
                        src={project.image || '/placeholder.png'}
                        alt={`${project.name} Image`}
                        width={900}
                        height={520}
                        className="w-full h-full object-contain rounded-2xl"
                      />
                  
                    )}
                </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center gap-6">
                <h1 className="text-6xl font-bold">{project.name}</h1>
                <div className="w-[80%] h-[2px] bg-orange-400"></div>
                <p className="text-lg leading-relaxed">{project.description}</p>

                <div className="space-y-4 text-[17px]">
                    <p className="text-white/70 font-bold">
                    Demo:{'  '}
                    <span className="font-normal ml-2 text-base">
                        <Link href={project.liveLink} target="_blank" className="text-blue-600">
                        {project.liveLink}
                        </Link>
                    </span>
                    </p>
                    <p className="text-white/70 font-bold">
                    GitHub:{' '}
                    <span className="font-normal ml-2 text-base">
                        <Link href={project.githubLink} target="_blank" className="text-blue-600">
                        {project.githubLink}
                        </Link>
                    </span>
                    </p>
                </div>
                </div>
              </div>
        </BackgroundLines>
    </div>
  );
};

export default Page;
