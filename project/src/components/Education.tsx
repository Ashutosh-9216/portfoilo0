import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Download, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.education-card',
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={educationRef} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My academic background and professional certifications that form the foundation of my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="education-card">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="text-blue-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-blue-300 font-medium mb-1">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-300 mb-2">
                    Sant Gadge Baba University, Amravati
                  </p>
                  <p className="text-gray-400 text-sm">
                    Completed comprehensive coursework in software engineering, 
                    computer systems, and modern development practices.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-lg font-semibold text-white mb-3">Key Subjects</h5>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering'].map((subject) => (
                    <span key={subject} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="education-card">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                  <p className="text-orange-400">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    AWS Certified Solutions Architect
                  </h4>
                  <p className="text-orange-300 font-medium mb-1">
                    Associate Level
                  </p>
                  <p className="text-gray-300 mb-2">
                    Amazon Web Services • 2024
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Validated expertise in designing distributed systems on AWS platform 
                    with focus on cost optimization, performance, and security.
                  </p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 px-4 py-2 rounded-lg transition-all duration-300 border border-orange-400/30">
                      <Download size={16} />
                      <span>Certificate</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 border border-white/20">
                      <ExternalLink size={16} />
                      <span>Verify</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-lg font-semibold text-white mb-3">Skills Covered</h5>
                <div className="flex flex-wrap gap-2">
                  {['AWS Architecture', 'Cost Optimization', 'Security', 'High Availability', 'Disaster Recovery', 'Performance'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-400/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently pursuing advanced certifications in Kubernetes, Terraform, and cloud security 
              to enhance my DevOps and cloud engineering expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;