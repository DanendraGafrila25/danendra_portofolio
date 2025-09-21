'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "TOEIC Certificate",
      issuer: "Educational Testing Service",
      date: "2025",
      image: "/images/certificate/046_Danendra Gafrila_TOEIC-1.png",
      description: "English proficiency certification demonstrating professional-level English skills."
    },
    {
      id: 2,
      title: "Advanced Golang Development",
      issuer: "Programming Course",
      date: "2025",
      image: "/images/certificate/Advance-Golang.png",
      description: "Advanced concepts in Go programming language including concurrency and microservices."
    },
    {
      id: 3,
      title: "Basic Golang Programming",
      issuer: "Programming Course",
      date: "2025",
      image: "/images/certificate/Basic-Golang.png",
      description: "Fundamental concepts of Go programming language and basic application development."
    },
    {
      id: 4,
      title: "Basic Java Programming",
      issuer: "Programming Course",
      date: "2025",
      image: "/images/certificate/Basic-Java.png",
      description: "Core Java programming concepts including OOP principles and basic application development."
    },
    {
      id: 5,
      title: "MPA Certificate",
      issuer: "Organization",
      date: "2024",
      image: "/images/certificate/Sertifikat MPA_Danendra Gafrila_page-0001.jpg",
      description: "Majelis Perwakilan Anggota Himpunan Mahasiswa Komputer certification."
    },
    {
      id: 6,
      title: "MPM Certificate",
      issuer: "Organization",
      date: "2024",
      image: "/images/certificate/Sertifikat MPM_Danendra Gafrila_page-0001.jpg",
      description: "Majelis Perwakilan Mahasiswa Politeknik Negeri Bandung certification."
    },
    {
      id: 7,
      title: "Wadhwani Foundation Certificate",
      issuer: "Wadhwani Foundation",
      date: "2025",
      image: "/images/certificate/Wadhwani Foundation Certificate-1.png",
      description: "Entrepreneurship and business skills development program completion."
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
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
            <h1 className="text-2xl font-bold text-[#1b3c53]">My Certificates</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Professional Certificates
          </h2>
          <p className="text-lg text-[#456882] max-w-2xl mx-auto">
            A collection of certifications that showcase my continuous learning and professional development
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-white rounded-xl shadow-lg border border-[#d2c1b6]/30 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openModal(certificate)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b3c53] mb-2 group-hover:text-[#456882] transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-[#456882] font-medium mb-2">{certificate.issuer}</p>
                <p className="text-sm text-[#456882]/70 mb-3">{certificate.date}</p>
                <p className="text-sm text-[#456882] line-clamp-3">{certificate.description}</p>
                
                <div className="mt-4 pt-4 border-t border-[#d2c1b6]/30">
                  <span className="text-sm text-[#1b3c53] font-medium group-hover:text-[#456882] transition-colors">
                    Click to view full certificate →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-[#d2c1b6]/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#1b3c53]">{selectedCertificate.title}</h3>
                  <p className="text-[#456882]">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-[#f9f3ef] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-[#456882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-auto max-h-[70vh]">
              <div className="relative">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-bold text-[#1b3c53] mb-2">About this Certificate</h4>
                <p className="text-[#456882] leading-relaxed">{selectedCertificate.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
