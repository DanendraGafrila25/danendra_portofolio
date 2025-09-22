'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProjectImage = ({ src, alt, className, fill, priority = false, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoading(false);
    // Fallback ke gambar default jika ada error
    setImgSrc('/images/foto-diri.jpg');
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#1b3c53] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        className={className}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
        // Force reload dengan timestamp untuk menghindari cache
        key={`${src}-${Date.now()}`}
      />
      {hasError && (
        <div className="absolute inset-0 bg-red-100 flex items-center justify-center">
          <span className="text-red-500 text-sm">Image not found</span>
        </div>
      )}
    </>
  );
};

export default ProjectImage;
