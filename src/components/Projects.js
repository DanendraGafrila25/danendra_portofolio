'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import GitHubLinks from './GitHubLinks';

const Projects = () => {
  // Menggunakan data dari file projects.js
  const projects = getFeaturedProjects(6); // Ambil 6 project featured

  return (
    <section id="projects" className="py-20 px-6 bg-[#f9f3ef]" style={{ overflow: 'visible' }}>
      <div className="container mx-auto max-w-7xl" style={{ overflow: 'visible' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#456882] max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ overflow: 'visible' }}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              style={{ overflow: 'visible' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                    project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#1b3c53]/80 text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b3c53] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#456882] mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack - Show only first 3 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="flex items-center space-x-1 px-2 py-1 bg-[#f9f3ef] text-[#1b3c53] text-xs rounded-md border border-[#d2c1b6]/50"
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-[#d2c1b6] text-[#1b3c53] text-xs rounded-md">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-center text-sm text-[#456882] mb-4">
                  <span>{project.role}</span>
                  <span>{project.timeline.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 relative">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 group relative overflow-hidden bg-gradient-primary text-white py-3 px-4 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#456882] to-[#1b3c53] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </Link>
                  <GitHubLinks 
                    project={project} 
                    buttonStyle="icon" 
                    showAsDropdown={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-block bg-white border-2 border-[#1b3c53] text-[#1b3c53] px-8 py-3 rounded-lg font-medium hover:bg-[#1b3c53] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
