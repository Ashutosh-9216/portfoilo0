import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, MapPin, Send, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for contact cards
      gsap.to('.contact-card', {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ashutoshshrungare63@gmail.com',
      link: 'mailto:ashutoshshrungare63@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-9021785923',
      link: 'tel:+919021785923',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'Ashutosh-9216',
      link: 'https://github.com/Ashutosh-9216',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      link: '#',
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="contact-content text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and DevOps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="contact-content">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-card block group"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="contact-content">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-blue-400/20">
                <h4 className="text-white font-semibold mb-4">Quick Connect</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Feel free to reach out through any of these platforms:
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:ashutoshshrungare63@gmail.com" className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Mail size={16} className="text-blue-400" />
                  </a>
                  <a href="https://github.com/Ashutosh-9216" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Github size={16} className="text-gray-400" />
                  </a>
                  <a href="https://www.linkedin.com/in/ashutosh-shrungare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={16} className="text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="contact-content bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Project Discussion / Job Opportunity / General Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;