import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Progress animation
    const progressAnimation = gsap.to({ value: 0 }, {
      value: 100,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].value));
      }
    });

    // Logo animation
    tl.fromTo('.loading-logo',
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
    )
    .to('.loading-logo', {
      y: -10,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    }, '-=0.5');

    // Complete loading
    setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.in',
        onComplete: onComplete
      });
    }, 3000);

    return () => {
      tl.kill();
      progressAnimation.kill();
    };
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="loading-logo mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl font-bold text-white">AS</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Ashutosh Shrungare
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl text-gray-300 mb-8">AWS Cloud & DevOps Engineer</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-400 text-sm">Loading... {progress}%</p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          {['☁️', '🐳', '⚙️', '🔧'].map((icon, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-2xl animate-pulse">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;