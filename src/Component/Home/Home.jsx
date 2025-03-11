import React from 'react';

export default function Home() {
  return (
    <section id='home' className="h-screen w-full bg flex justify-center items-center relative">
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-lg border-4 border-transparent rounded-lg p-4 animate-border">
          KaDSA
        </h1>
      </div>

      {/* Keyframe Animation for Border */}
      <style>
        {`
          @keyframes borderAnimation {
            0% { border-color: #3b82f6; } /* Blue */
            50% { border-color: #10b981; } /* Green */
            100% { border-color: #3b82f6; } /* Blue */
          }
          .animate-border {
            animation: borderAnimation 3s infinite alternate ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
