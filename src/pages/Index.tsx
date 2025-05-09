
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import ResourcesSection from '@/components/ResourcesSection';
import VideosSection from '@/components/VideosSection';
import BooksSection from '@/components/BooksSection';
import BlogSection from '@/components/BlogSection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MissionSection />
      <ResourcesSection />
      <VideosSection />
      <BooksSection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
