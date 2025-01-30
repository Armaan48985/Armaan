import React from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

const SecondSection: React.FC = () => {
    return (
        <div className='bg-[#1B1B1B] min-h-[92vh] flex-center' id='secondSection'>
            <div className='flex-center flex-col gap-8'>
                <GlitchSquiggly>
                <h1 className='text-8xl'>About Me?</h1>
                </GlitchSquiggly>

                <p className='text-lg max-w-[35rem] opacity-80 text-center'>
                    I'm a Fullstack web Developer specializing in MERN stack, passionate about building scalable solutions and solving complex problems.
                </p>
            </div>
        </div>
    );
};

export default SecondSection;