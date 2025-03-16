
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import CoursePreview from '../components/CoursePreview';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <CoursePreview />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
