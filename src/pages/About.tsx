import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Brush, PenTool, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Artist Bio Section */}
      <section className="section">
        <h1 className="section-title text-gray-900 dark:text-white">About the Artist</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de" 
              alt="Priyanka - Artist Portrait" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">
              Priyanka's Artistic Journey
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Priyanka is a contemporary artist based in Baroda Gujarat, India, whose work spans multiple mediums including oil painting, watercolor, and charcoal sketches. With a formal education in BSc chemistry  from the prestigious National Institute of Design, her artistic journey began over a decade ago.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Drawing inspiration from both urban landscapes and natural environments, Priyanka's work often explores the relationship between humanity and the spaces we inhabit. Her distinctive style combines traditional techniques with contemporary themes, creating pieces that are both timeless and relevant.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Over the years, her work has been featured in several group exhibitions across India and internationally, garnering recognition for its emotional depth and technical excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Artistic Approach */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center text-gray-900 dark:text-white">
            Artistic Approach & Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Palette className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Color Theory</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Exploring the emotional impact of color combinations and their ability to evoke specific moods and atmospheres.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Brush className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Brushwork</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Utilizing various brushwork techniques from delicate detail to bold expressive strokes to create visual texture.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <PenTool className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Line Work</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Developing expressive line quality in sketches and drawings to capture the essence of subjects with minimal marks.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Layers className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Mixed Media</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Combining traditional and contemporary materials to create textural depth and unexpected visual relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inspiration */}
      <section className="section">
        <h2 className="text-3xl font-bold font-serif mb-8 text-center text-gray-900 dark:text-white">
          Sources of Inspiration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518998053901-5348d3961a04" 
              alt="Natural landscapes inspiration" 
              className="rounded-lg shadow-lg w-full h-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Natural Landscapes
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The ever-changing colors and patterns found in nature provide endless inspiration, from the dramatic light of sunrise to the subtle textures of forest floors.
            </p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785" 
              alt="Urban environments inspiration" 
              className="rounded-lg shadow-lg w-full h-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Urban Environments
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The juxtaposition of organic and geometric forms in city landscapes creates fascinating visual narratives about human experience and our built environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-indigo-50 dark:bg-indigo-900/20 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
            Interested in learning more or commissioning a piece?
          </h2>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;