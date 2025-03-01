export interface ArtworkType {
  id: number;
  title: string;
  medium: string;
  year: string;
  category: 'painting' | 'sketch' | 'mixed-media';
  featured: boolean;
  imageUrl: string;
  description: string;
}

export const artworks: ArtworkType[] = [
  {
    id: 1,
    title: "Serene Landscape",
    medium: "Oil on Canvas",
    year: "2023",
    category: "painting",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
    description: "A tranquil landscape painting featuring rolling hills and a serene lake at sunset. This piece explores the interplay between light and shadow in natural settings."
  },
  {
    id: 2,
    title: "Urban Reflections",
    medium: "Acrylic on Canvas",
    year: "2022",
    category: "painting",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "An abstract representation of city life, with reflections in glass buildings and the hustle of urban existence captured through vibrant colors and dynamic brushstrokes."
  },
  {
    id: 3,
    title: "Portrait Study",
    medium: "Charcoal on Paper",
    year: "2023",
    category: "sketch",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "A detailed charcoal portrait study exploring human expression and emotion through careful attention to light and shadow."
  },
  {
    id: 4,
    title: "Abstract Emotions",
    medium: "Mixed Media",
    year: "2022",
    category: "mixed-media",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b",
    description: "An exploration of human emotions through abstract forms and vibrant colors, combining various techniques and materials to create texture and depth."
  },
  {
    id: 5,
    title: "Botanical Series #3",
    medium: "Watercolor on Paper",
    year: "2023",
    category: "painting",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1580136608570-8c0c0781e8d5",
    description: "Part of a botanical series exploring the delicate forms and colors of local flora, rendered in transparent watercolor washes."
  },
  {
    id: 6,
    title: "Architectural Lines",
    medium: "Pen and Ink",
    year: "2022",
    category: "sketch",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1574182245530-967d9b3831af",
    description: "A detailed pen and ink drawing exploring the geometric patterns and lines found in modern architecture."
  },
  {
    id: 7,
    title: "Ocean Dreams",
    medium: "Oil on Canvas",
    year: "2021",
    category: "painting",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
    description: "An impressionistic seascape capturing the movement and ever-changing colors of the ocean at different times of day."
  },
  {
    id: 8,
    title: "Figure Study",
    medium: "Graphite on Paper",
    year: "2023",
    category: "sketch",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    description: "A classical figure study focusing on human anatomy and the play of light across form, executed in graphite with careful attention to detail."
  },
  {
    id: 9,
    title: "Autumn Reflections",
    medium: "Acrylic on Canvas",
    year: "2022",
    category: "painting",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485",
    description: "A vibrant autumn scene capturing the rich colors of fall foliage reflected in a still pond, exploring the theme of impermanence and natural cycles."
  },
  {
    id: 10,
    title: "Urban Sketches #5",
    medium: "Ink and Watercolor",
    year: "2023",
    category: "mixed-media",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16",
    description: "Part of an urban sketching series combining loose ink lines with watercolor washes to capture the energy and character of city streets."
  },
  {
    id: 11,
    title: "Abstract Composition #2",
    medium: "Mixed Media on Canvas",
    year: "2021",
    category: "mixed-media",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    description: "An abstract composition exploring texture, color relationships, and spatial tension through a combination of acrylic paint, collage, and other materials."
  },
  {
    id: 12,
    title: "Mountain Majesty",
    medium: "Oil on Canvas",
    year: "2022",
    category: "painting",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "A dramatic mountain landscape inspired by the grandeur of nature, with particular attention to atmospheric perspective and the quality of light at high altitudes."
  }
];

export const getFeaturedArtworks = (): ArtworkType[] => {
  return artworks.filter(artwork => artwork.featured);
};

export const getArtworksByCategory = (category: string): ArtworkType[] => {
  if (category === 'all') return artworks;
  return artworks.filter(artwork => artwork.category === category);
};

export const getArtworkById = (id: number): ArtworkType | undefined => {
  return artworks.find(artwork => artwork.id === id);
};