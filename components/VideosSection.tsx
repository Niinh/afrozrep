'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface Video {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  start: number;
}

const videosData: Video[] = [
  {
    id: 'PyGPT5jHSw4',
    title: "ABOLIRAM - Afro'z Rep - Ao Vivo Mostra Cultural - Poções - BA",
    subtitle: 'Destaques do nosso show Mostra Cultural',
    thumbnail: 'https://img.youtube.com/vi/PyGPT5jHSw4/maxresdefault.jpg',
    start: 65,
  },
  {
    id: 'qyHp3zy_ZYM',
    title: "OITAVO MAR - Afro'z Rep - Ao Vivo Mostra Cultural - Poções - BA",
    subtitle: 'Videoclipe do nosso último evento',
    thumbnail: 'https://img.youtube.com/vi/qyHp3zy_ZYM/maxresdefault.jpg',
    start: 36,
  },
  {
    id: 'fRvIx38Z1uU',
    title: "MEU AMIGO FRED - Afro'z Rep - Ao Vivo Mostra Cultural - Poções - BA",
    subtitle: 'Uma olhada no nosso processo criativo',
    thumbnail: 'https://img.youtube.com/vi/fRvIx38Z1uU/maxresdefault.jpg',
    start: 0,
  },
];

const defaultThumbnail = 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (!selectedVideo) {
      setSelectedVideo(videosData[0]);
    }
    setIsPlaying(true);
  };

  const getYouTubeEmbedUrl = (video: Video) => {
    let url = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
    if (video.start > 0) {
      url += `&start=${video.start}`;
    }
    return url;
  };

  return (
    <section id="videos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-rock text-gradient mb-4">
            VÍDEOS & CLIPES
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira nossos clipes oficiais, performances ao vivo e conteúdo exclusivo dos bastidores.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-black-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg shadow-red-500/20">
              {isPlaying && selectedVideo ? (
                <iframe
                  key={selectedVideo.id}
                  src={getYouTubeEmbedUrl(selectedVideo)}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <Image
                    src={selectedVideo ? selectedVideo.thumbnail : defaultThumbnail}
                    alt={selectedVideo ? selectedVideo.title : 'Afroz Rep Band'}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handlePlay}
                      className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="w-10 h-10 ml-1" fill="currentColor" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Video List */}
          <div className="flex flex-col space-y-4">
            {videosData.map((video) => (
              <div
                key={video.id}
                onClick={() => handleSelectVideo(video)}
                className={`flex items-center p-3 rounded-lg cursor-pointer bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 border-l-4 ${selectedVideo?.id === video.id ? 'border-red-500' : 'border-transparent'}`}>
                <div className="relative w-24 h-16 mr-4 flex-shrink-0">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover rounded-md" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm leading-tight transition-colors ${selectedVideo?.id === video.id ? 'text-white' : 'text-gray-400'}`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{video.subtitle}</p>
                </div>
              </div>
            ))}
            <Button asChild variant="outline" className="mt-4 w-full border-white/50 text-white hover:bg-white hover:text-black transition-colors duration-300">
              <Link href="https://www.youtube.com/@afrozrep/videos" target="_blank" rel="noopener noreferrer">
                VER TODOS OS VÍDEOS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;