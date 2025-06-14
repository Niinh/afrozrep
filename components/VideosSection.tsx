'use client';

import { useState } from 'react';
import { Play, ExternalLink, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Rock Nacional - Clipe Oficial',
      description: 'Nosso primeiro single que marca o início de uma nova era do rock brasileiro.',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      duration: '4:32',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Energia Pura - Live Session',
      description: 'Performance ao vivo gravada em estúdio, sentindo a energia em estado bruto.',
      thumbnail: 'https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg',
      duration: '5:18',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Resistência - Videoclipe',
      description: 'Uma mensagem de resistência e força através da música.',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      duration: '3:45',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Behind the Scenes - Estúdio',
      description: 'Veja como criamos nossos hits nos bastidores do estúdio.',
      thumbnail: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
      duration: '8:12',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-rock text-gradient mb-4">
            VÍDEOS & CLIPES
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira nossos clipes oficiais, performances ao vivo e conteúdo exclusivo dos bastidores.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-6" />
        </div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Video Player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 text-white hover:text-red-500"
                  onClick={() => setSelectedVideo(null)}
                >
                  ✕
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="card-rock group cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedVideo(video.id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors group-hover:scale-110 transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 p-0">
                      <Play className="w-4 h-4 mr-2" />
                      Assistir
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      YouTube
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="text-center mt-16">
          <Button className="btn-rock-outline group">
            <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Todos os Vídeos no YouTube
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;