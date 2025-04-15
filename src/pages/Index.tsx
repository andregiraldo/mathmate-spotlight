
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import CoursePreview from '../components/CoursePreview';
import Features from '../components/Features';
import SocialMedia from '../components/SocialMedia';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DiscountCarousel from '../components/DiscountCarousel';
import BlogPreview from '../components/BlogPreview';
import InteractiveFeatures from '../components/InteractiveFeatures';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <CoursePreview />
      <InteractiveFeatures />
      <DiscountCarousel />
      <Features />
      <BlogPreview />
      <SocialMedia />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
