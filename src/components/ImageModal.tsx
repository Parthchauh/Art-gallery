import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ArtworkType } from '../data/artworks';

interface ImageModalProps {
  artwork: ArtworkType | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ artwork, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div 
        ref={modalRef}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{artwork.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{artwork.medium}, {artwork.year}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="flex-grow overflow-auto p-4 flex items-center justify-center">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        <div className="p-4 border-t dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;