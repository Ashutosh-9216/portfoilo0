import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const techLogosRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { name: 'AWS', color: 'from-orange-400 to-orange-600', icon: '☁️' },
    { name: 'Docker', color: 'from-blue-400 to-blue-600', icon: '🐳' },
    { name: 'Kubernetes', color: 'from-purple-400 to-purple-600', icon: '⚙️' },
    { name: 'Jenkins', color: 'from-red-400 to-red-600', icon: '🔧' },
    { name: 'Git', color: 'from-gray-400 to-gray-600', icon: '📋' },
    { name: 'Terraform', color: 'from-indigo-400 to-indigo-600', icon: '🏗️' },
    { name: 'Linux', color: 'from-yellow-400 to-yellow-600', icon: '🐧' },
    { name: 'Azure', color: 'from-cyan-400 to-cyan-600', icon: '☁️' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section fade in
      gsap.fromTo('.about-content',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Tech logos floating animation
      gsap.fromTo('.tech-logo',
        { scale: 0, rotation: 180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: techLogosRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Continuous floating animation for tech logos
      gsap.to('.tech-logo', {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-content">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Story */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Professional Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  DevOps Engineer with hands-on expertise in AWS cloud services, containerization using Docker, 
                  orchestration with Kubernetes, and CI/CD pipeline implementation through Jenkins.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Committed to building scalable, secure, and high-performing systems while driving continuous 
                  integration, streamlined deployments, and operational excellence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently working as a DevOps Trainee at LinuxWorld Informatics Pvt. Ltd., where I provision 
                  AWS services, containerize applications, and implement robust CI/CD pipelines.
                </p>
              </div>

              {/* Current Role */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-400/20">
                <h4 className="text-xl font-semibold text-white mb-3">Current Role</h4>
                <p className="text-blue-300 font-medium">DevOps Trainee</p>
                <p className="text-gray-300">LinuxWorld Informatics Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm">Jan 2025 – Present</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div ref={techLogosRef}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack</h3>
              <div className="grid grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-logo group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-br ${tech.color} p-4 rounded-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <p className="text-white font-semibold text-sm">{tech.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;