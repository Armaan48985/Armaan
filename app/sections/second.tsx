import React from 'react';
import SquigglyText from '../squiglyText';

const SecondSection: React.FC = () => {
  return (
    <div className="bg-[#1B1B1B] min-h-[92vh] flex-center" id="secondSection">
      <div className="flex-center flex-col gap-8">
        {/* Applying squiggly effect to the heading */}
        <h1 className="text-8xl squiggly-text">
          <SquigglyText/>
        </h1>

        <p className="text-lg max-w-[35rem] opacity-80 text-center">
          I'm a Fullstack web Developer specializing in MERN stack, passionate about building scalable solutions and solving complex problems.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
