'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import GitHubLinks from '@/components/GitHubLinks';

const AllProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const allProjects = getAllProjects();
  
  // Filter projects berdasarkan search term saja
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f3ef] via-white to-[#d2c1b6]/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#d2c1b6]/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-[#1b3c53] hover:text-[#456882] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-2xl font-bold text-[#1b3c53]">All Projects</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12" style={{ overflow: 'visible' }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Projects Portfolio
          </h2>
          <p className="text-lg text-[#456882] max-w-2xl mx-auto">
            Explore all of my projects including web applications, data analysis, and development tools
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-6 mb-8">
          <div className="relative max-w-md mx-auto">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#456882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#d2c1b6]/50 rounded-lg focus:ring-2 focus:ring-[#456882] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ overflow: 'visible' }}>
          {filteredProjects.map((project) => (
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
                
                {/* Featured Badge */}
                {project.showOnLandingPage && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                    project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 right-4">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="flex items-center space-x-1 px-2 py-1 bg-[#f9f3ef] text-[#1b3c53] text-xs rounded-md border border-[#d2c1b6]/50"
                    >
                      {tech.icon && <span>{tech.icon}</span>}
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

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-[#d2c1b6]/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-[#456882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.981-6 2.561V17a.97.97 0 01.929-.926L7 16a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1b3c53] mb-2">No Projects Found</h3>
            <p className="text-[#456882]">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">{allProjects.length}</div>
              <div className="text-[#456882]">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {allProjects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-[#456882]">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {allProjects.filter(p => p.status === 'In Progress').length}
              </div>
              <div className="text-[#456882]">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
