'use client';

import { useState } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      category: 'live',
      title: 'Show em São Paulo',
      description: 'Performance épica no Espaço das Américas',
    },
    {
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      category: 'studio',
      title: 'Gravação em Estúdio',
      description: 'Registrando nosso novo single',
    },
    {
      src: 'https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg',
      category: 'backstage',
      title: 'Bastidores',
      description: 'Momentos antes do show',
    },
    {
      src: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
      category: 'live',
      title: 'Rock in Rio',
      description: 'Nossa estreia no maior festival do país',
    },
    {
      src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      category: 'studio',
      title: 'Sessão de Fotos',
      description: 'Ensaio para o novo álbum',
    },
    {
      src: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
      category: 'backstage',
      title: 'Preparação',
      description: 'Aquecendo antes do show',
    },
    {
      src: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg',
      category: 'live',
      title: 'Festival de Verão',
      description: 'Multidão cantando junto',
    },
    {
      src: 'https://images.pexels.com/photos/1656130/pexels-photo-1656130.jpeg',
      category: 'studio',
      title: 'Mixagem',
      description: 'Finalizando as faixas',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'live', label: 'Ao Vivo' },
    { id: 'studio', label: 'Estúdio' },
    { id: 'backstage', label: 'Bastidores' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-rock text-gradient mb-4">
            GALERIA
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Momentos únicos, energia pura e a essência do rock capturada em cada foto.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              className={`${
                filter === category.id
                  ? 'btn-rock'
                  : 'btn-rock-outline'
              } transition-all duration-300`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-gray-300 text-sm">{image.description}</p>
              </div>
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:text-red-500 bg-black/50 hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button className="btn-rock-outline group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Mais no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;