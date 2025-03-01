import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ArtworkCard from '../components/ArtworkCard';
import ImageModal from '../components/ImageModal';
import { getFeaturedArtworks, ArtworkType } from '../data/artworks';

const Home: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkType | null>(null);
  const featuredArtworks = getFeaturedArtworks();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4" 
            alt="Featured Artwork" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white dark:from-gray-900/70 dark:to-gray-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-gray-900 dark:text-white slide-up">
            PriyankaArts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 slide-up">
            A Collection of Creativity
          </p>
          <Link 
            to="/gallery" 
            className="btn btn-primary inline-flex items-center"
          >
            Explore Gallery
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Featured Works Section */}
      <section className="section">
        <h2 className="section-title text-gray-900 dark:text-white">Featured Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map(artwork => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              onClick={setSelectedArtwork}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn btn-secondary">
            View All Artworks
          </Link>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f" 
                alt="Artist at work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
                About the Artist
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Priyanka is a contemporary artist whose work explores the intersection of traditional techniques and modern themes. With a background in both fine arts and design, her pieces reflect a unique perspective on the world around us.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="section bg-indigo-50 dark:bg-indigo-900/20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
            Interested in a Commission?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Whether you're looking for a custom piece for your home or a special gift, I'd love to bring your vision to life.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedArtwork && (
        <ImageModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      )}
    </>
  );
};

export default Home;