import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'CI/CD for Microservices E-Commerce App',
      description: 'Automated CI/CD pipeline for microservices e-commerce application on AWS with self-managed Kubernetes cluster.',
      image: '🛒',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS EC2', 'Helm'],
      github: 'https://github.com/Ashutosh-9216/Automated-CI-CD-Pipeline-for-a-Microservices-E-Commerce-App-on-AWS-with-Self-Managed-Kubernetes.git',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CI/CD for Flask App on AWS',
      description: 'Complete CI/CD pipeline implementation for Flask application deployment on AWS with monitoring and logging.',
      image: '🐍',
      tech: ['Jenkins', 'GitHub', 'Docker', 'EC2', 'CloudWatch'],
      github: 'https://github.com/Ashutosh-9216/flask-ci-cd-app.git',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'EBS Snapshot Cleanup Automation',
      description: 'AWS Lambda function for automated EBS snapshot cleanup to optimize costs and manage storage efficiently.',
      image: '💾',
      tech: ['Python', 'boto3', 'Lambda', 'IAM', 'CloudWatch'],
      github: 'https://github.com/Ashutosh-9216/Cost-Optimization-With-AWS-Lambda.git',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Terraform configurations for provisioning and managing AWS infrastructure with best practices.',
      image: '🏗️',
      tech: ['Terraform', 'AWS', 'VPC', 'EC2', 'S3'],
      github: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing DevOps practices, cloud automation, and CI/CD implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                {/* Project Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{project.image}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <ExternalLink size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;