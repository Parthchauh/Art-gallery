import React from 'react';
import { ArtworkType } from '../data/artworks';

interface ArtworkCardProps {
  artwork: ArtworkType;
  onClick: (artwork: ArtworkType) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onClick }) => {
  return (
    <div 
      className="gallery-item group aspect-[3/4] cursor-pointer"
      onClick={() => onClick(artwork)}
    >
      <img 
        src={artwork.imageUrl} 
        alt={artwork.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="gallery-overlay p-4 text-white">
        <div className="bg-black bg-opacity-60 p-3 rounded-lg">
          <h3 className="font-medium text-lg">{artwork.title}</h3>
          <p className="text-sm opacity-90">{artwork.medium}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;