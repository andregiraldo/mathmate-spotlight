
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
import VideoSection from '../components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      {/* Navegación por secciones */}
      <div className="scroll-indicator">
        <a href="#hero" className="scroll-dot active" title="Inicio"></a>
        <a href="#about" className="scroll-dot" title="Sobre Mí"></a>
        <a href="#courses" className="scroll-dot" title="Cursos"></a>
        <a href="#features" className="scroll-dot" title="IA y Matemáticas"></a>
        <a href="#videos" className="scroll-dot" title="Videos"></a>
        <a href="#blog" className="scroll-dot" title="Blog"></a>
        <a href="#testimonials" className="scroll-dot" title="Testimonios"></a>
        <a href="#contact" className="scroll-dot" title="Contacto"></a>
      </div>
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="courses">
        <CoursePreview />
      </section>
      
      <section id="features">
        <InteractiveFeatures />
        <DiscountCarousel />
        <Features />
      </section>
      
      <section id="videos">
        <VideoSection />
      </section>
      
      <section id="blog">
        <BlogPreview />
      </section>
      
      <section id="social">
        <SocialMedia />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
