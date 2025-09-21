'use client';

import { useState, useRef, useEffect } from 'react';
import { getGithubRepositories } from '@/data/projects';

const GitHubLinks = ({ project, buttonStyle = "primary", showAsDropdown = true }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom-right');
  const buttonRef = useRef(null);
  const repositories = getGithubRepositories(project);

  useEffect(() => {
    if (isDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Determine horizontal position
      const spaceRight = viewportWidth - rect.right;
      const spaceLeft = rect.left;
      
      // Determine vertical position  
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      let position = '';
      
      // Vertical positioning
      if (spaceBelow > 200 || spaceBelow > spaceAbove) {
        position += 'bottom-';
      } else {
        position += 'top-';
      }
      
      // Horizontal positioning
      if (buttonStyle === "icon") {
        // For cards, prefer right alignment but fallback to left if needed
        if (spaceRight > 250) {
          position += 'right';
        } else if (spaceLeft > 250) {
          position += 'left';
        } else {
          position += 'center';
        }
      } else {
        // For detail pages, prefer left alignment
        if (spaceLeft > 300) {
          position += 'left';
        } else {
          position += 'right';
        }
      }
      
    setDropdownPosition(position);
    }
  }, [isDropdownOpen, buttonStyle]);

  // Helper function untuk mendapatkan classes dropdown position
  const getDropdownClasses = () => {
    const width = buttonStyle === "icon" ? "w-64" : "w-80";
    const margin = buttonStyle === "icon" ? "mt-2" : "mt-3";
    
    const positionClasses = {
      'bottom-right': `top-full right-0 ${margin}`,
      'bottom-left': `top-full left-0 ${margin}`,
      'bottom-center': `top-full left-1/2 transform -translate-x-1/2 ${margin}`,
      'top-right': `bottom-full right-0 mb-2`,
      'top-left': `bottom-full left-0 mb-2`,
      'top-center': `bottom-full left-1/2 transform -translate-x-1/2 mb-2`,
    };
    
    return `${positionClasses[dropdownPosition] || positionClasses['bottom-right']} ${width}`;
  };

  if (repositories.length === 0) {
    return null; // Tidak ada repository
  }

  if (repositories.length === 1) {
    // Single repository - tampilkan button biasa
    const repo = repositories[0];
    return (
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonClasses(buttonStyle)}
        aria-label={`View ${repo.name}`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        {buttonStyle === "full" && <span className="ml-2">{repo.name}</span>}
      </a>
    );
  }

  if (!showAsDropdown) {
    // Multiple repositories - tampilkan sebagai list button
    return (
      <div className="flex flex-wrap gap-2">
        {repositories.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={getButtonClasses("secondary")}
            title={repo.description}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="ml-1 text-xs">{repo.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Multiple repositories - tampilkan sebagai dropdown
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`${getButtonClasses(buttonStyle)} flex items-center`}
        aria-label="View GitHub repositories"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        {buttonStyle === "full" && <span className="ml-2">View Code</span>}
        {repositories.length > 1 && (
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown */}
          <div 
            className={`absolute z-50 bg-white rounded-xl shadow-2xl border border-[#d2c1b6]/30 ${getDropdownClasses()}`} 
            style={{ zIndex: 9999 }}
          >
            <div className="p-3">
              <div className="text-xs font-semibold text-[#1b3c53] mb-3">
                Choose Repository:
              </div>
              {repositories.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#f9f3ef] transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="w-6 h-6 bg-[#1b3c53] rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#1b3c53] text-xs">
                      {repo.name}
                    </div>
                    <div className="text-xs text-[#456882]/70 capitalize">
                      {repo.type}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper function untuk mendapatkan CSS classes berdasarkan style
const getButtonClasses = (style) => {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5";
  
  switch (style) {
    case "primary":
      return `${baseClasses} bg-gradient-primary text-white px-4 py-3 rounded-lg hover:shadow-lg font-medium group relative overflow-hidden`;
    case "secondary":
      return `${baseClasses} border-2 border-[#1b3c53] text-[#1b3c53] px-3 py-2 rounded-lg hover:bg-[#1b3c53] hover:text-white font-medium`;
    case "icon":
      return `${baseClasses} w-11 h-11 border-2 border-[#1b3c53] text-[#1b3c53] rounded-lg hover:bg-[#1b3c53] hover:text-white hover:shadow-lg`;
    case "full":
      return `${baseClasses} bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-lg font-medium group relative overflow-hidden`;
    default:
      return `${baseClasses} bg-gradient-primary text-white px-4 py-3 rounded-lg hover:shadow-lg font-medium group relative overflow-hidden`;
  }
};

export default GitHubLinks;
