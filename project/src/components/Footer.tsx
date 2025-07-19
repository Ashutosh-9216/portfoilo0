import React from 'react';
import { Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Ashutosh Shrungare
            </div>
            <p className="text-gray-400 mb-4">
              AWS Cloud & DevOps Engineer passionate about building scalable, 
              secure, and high-performing cloud systems.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:ashutoshshrungare63@gmail.com" className="w-10 h-10 bg-white/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Mail size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
              <a href="https://github.com/Ashutosh-9216" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gray-500/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Github size={18} className="text-gray-400 hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/ashutosh-shrungare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} className="text-gray-400 hover:text-blue-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'AWS Cloud Architecture',
                'DevOps Implementation',
                'CI/CD Pipeline Setup',
                'Infrastructure as Code',
                'Container Orchestration',
                'Cloud Migration'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> by Ashutosh Shrungare
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-50"></div>
    </footer>
  );
};

export default Footer;