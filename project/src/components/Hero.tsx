import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Github, MapPin, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import profileImage from '../assets/profile-image.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo('.hero-content', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );

      // Profile image animation
      gsap.fromTo(profileRef.current,
        { scale: 0, rotation: 180 },
        { scale: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.7)', delay: 0.8 }
      );

      // Floating animation for profile
      gsap.to(profileRef.current, {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Background gradient animation
      gsap.to('.gradient-bg', {
        backgroundPosition: '400% 0%',
        duration: 15,
        ease: 'none',
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-[length:400%_400%]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="hero-content text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Ashutosh
              </span>
              <span className="block text-white">Shrungare</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl lg:text-3xl text-gray-300 font-light mb-4">
                AWS Cloud & DevOps Engineer
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Building scalable, secure, and high-performing cloud systems with expertise in 
                AWS, Docker, Kubernetes, and CI/CD pipeline implementation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <a href="mailto:ashutoshshrungare63@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Mail size={18} />
                <span className="text-sm">ashutoshshrungare63@gmail.com</span>
              </a>
              <a href="tel:+919021785923" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Phone size={18} />
                <span className="text-sm">+91-9021785923</span>
              </a>
              <a href="https://github.com/Ashutosh-9216" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ashutosh-shrungare/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Hire Me
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div ref={profileRef} className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Ashutosh Shrungare" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-orange-400/30">
                <span className="text-orange-400 font-bold text-sm">AWS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-blue-400/30">
                <span className="text-blue-400 font-bold text-sm">K8s</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-14 h-14 bg-green-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-green-400/30">
                <span className="text-green-400 font-bold text-xs">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;