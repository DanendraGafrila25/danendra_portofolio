'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import GitHubLinks from '@/components/GitHubLinks';

const ProjectDetailPage = ({ params }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  // Unwrap params Promise using React.use()
  const resolvedParams = use(params);
  
  // Get project data berdasarkan slug dari URL
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f3ef] to-[#d2c1b6]/20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1b3c53] mb-4">Project Not Found</h1>
          <p className="text-[#456882] mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

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
            <div className="flex items-center space-x-4">
              <GitHubLinks 
                project={project} 
                buttonStyle="full" 
                showAsDropdown={true}
              />
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border-2 border-[#1b3c53] text-[#1b3c53] px-4 py-2 rounded-lg hover:bg-[#1b3c53] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Completed' ? 'bg-green-100 text-green-800' :
              project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
            <span className="px-3 py-1 bg-[#f9f3ef] text-[#1b3c53] rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[#456882] max-w-3xl mx-auto leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Images Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-[#1b3c53] mb-6">Project Gallery</h2>
              <div className="space-y-4">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => openImageModal(0)}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {project.images.slice(1).map((image, index) => (
                      <div 
                        key={index + 1} 
                        className="relative h-24 rounded-lg overflow-hidden shadow cursor-pointer"
                        onClick={() => openImageModal(index + 1)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Project Description */}
            <section>
              <h2 className="text-2xl font-bold text-[#1b3c53] mb-6">About This Project</h2>
              <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-8">
                <div className="prose prose-lg max-w-none text-[#456882]">
                  {project.fullDescription.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </section>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#1b3c53] mb-6">Key Features</h2>
                <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#456882]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#1b3c53] mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-6">
                      <h3 className="text-lg font-semibold text-[#1b3c53] mb-3">
                        🚧 Challenge: {challenge.problem}
                      </h3>
                      <p className="text-[#456882]">
                        ✅ Solution: {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-6">
              <h3 className="text-xl font-bold text-[#1b3c53] mb-6">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-[#456882] block">Role</span>
                  <span className="text-[#1b3c53] font-semibold">{project.role}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#456882] block">Duration</span>
                  <span className="text-[#1b3c53] font-semibold">{project.timeline.duration}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#456882] block">Team Size</span>
                  <span className="text-[#1b3c53] font-semibold">{project.teamSize} {project.teamSize === 1 ? 'Person' : 'People'}</span>
                </div>
                {project.metrics && Object.keys(project.metrics).length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-[#456882] block mb-2">Metrics</span>
                    <div className="space-y-1">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        value && (
                          <div key={key} className="text-sm">
                            <span className="text-[#456882] capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                            <span className="text-[#1b3c53] font-medium ml-1">{value}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-6">
              <h3 className="text-xl font-bold text-[#1b3c53] mb-6">Tech Stack</h3>
              <div className="space-y-4">
                {['Frontend', 'Backend', 'Database', 'Tools'].map(category => {
                  const techs = project.techStack.filter(tech => 
                    tech.category?.toLowerCase().includes(category.toLowerCase()) || 
                    (category === 'Tools' && !['Frontend', 'Backend', 'Database', 'Framework', 'Language', 'Styling'].includes(tech.category))
                  );
                  
                  if (techs.length === 0) return null;
                  
                  return (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-[#456882] mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, index) => (
                          <span key={index} className="flex items-center space-x-1 bg-[#f9f3ef] text-[#1b3c53] px-3 py-1 rounded-full text-sm">
                            <span>{tech.icon}</span>
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 p-6">
                <h3 className="text-xl font-bold text-[#1b3c53] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gradient-soft text-[#1b3c53] px-3 py-1 rounded-full text-sm border border-[#d2c1b6]/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="relative h-[80vh]">
              <Image
                src={project.images[selectedImageIndex]}
                alt={`${project.title} ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            {project.images.length > 1 && (
              <div className="text-center text-white mt-4">
                {selectedImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
