'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideosSection from '@/components/VideosSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideosSection />
      <AboutSection />
      <GallerySection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}