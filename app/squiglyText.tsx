import React from 'react';

const SquigglyText: React.FC = () => {
  return (
    <div>
      {/* SVG filter definition */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
      </svg>

      {/* Text that will have the squiggly effect */}
      <h1 className="squiggly-text">About Me?</h1>

      {/* Add CSS to animate the squiggly effect */}
      <style jsx>{`
        @keyframes squiggly-anim {
          0% {
            filter: url('#squiggly-0');
          }
          25% {
            filter: url('#squiggly-1');
          }
          50% {
            filter: url('#squiggly-2');
          }
          75% {
            filter: url('#squiggly-3');
          }
          100% {
            filter: url('#squiggly-4');
          }
        }

        .squiggly-text {
          display: inline-block;
          font-size: 5rem;
          animation: squiggly-anim 0.34s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SquigglyText;
