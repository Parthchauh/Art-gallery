import React, { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import ImageModal from '../components/ImageModal';
import { getArtworksByCategory, ArtworkType } from '../data/artworks';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArtworks, setFilteredArtworks] = useState<ArtworkType[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkType | null>(null);
  
  useEffect(() => {
    setFilteredArtworks(getArtworksByCategory(selectedCategory));
  }, [selectedCategory]);
  
  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'painting', name: 'Paintings' },
    { id: 'sketch', name: 'Sketches' },
    { id: 'mixed-media', name: 'Mixed Media' }
  ];
  
  return (
    <div className="pt-20">
      <div className="section">
        <h1 className="section-title text-gray-900 dark:text-white">Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium
                ${selectedCategory === category.id 
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map(artwork => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              onClick={setSelectedArtwork}
            />
          ))}
        </div>
        
        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No artworks found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {selectedArtwork && (
        <ImageModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      )}
    </div>
  );
};

export default Gallery;