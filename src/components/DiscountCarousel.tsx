
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const DiscountCarousel = () => {
  const promotions = [
    {
      id: 1,
      title: "¡Tu primera clase gratis!",
      description: "Empieza tu viaje de aprendizaje matemático sin costo.",
      image: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1000&auto=format&fit=crop",
      link: "/contact",
    },
    {
      id: 2,
      title: "Descuento del 20% para grupos",
      description: "Estudia con amigos y ahorra en tus clases de matemáticas.",
      image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?q=80&w=1000&auto=format&fit=crop",
      link: "/courses",
    },
    {
      id: 3,
      title: "Paquete especial para estudiantes",
      description: "Adquiere 10 clases con un 15% de descuento.",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1000&auto=format&fit=crop",
      link: "/courses",
    },
    {
      id: 4,
      title: "Descuento para nuevos estudiantes",
      description: "10% de descuento en tu primer mes de clases.",
      image: "https://images.unsplash.com/photo-1625225234163-1590c9cc3ed4?q=80&w=1000&auto=format&fit=crop",
      link: "/courses",
    },
    {
      id: 5,
      title: "Promoción de verano",
      description: "Cursos intensivos con 15% de descuento.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop",
      link: "/courses",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Promociones</span> Especiales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprovecha estas ofertas exclusivas para empezar tu camino hacia el éxito matemático.
          </p>
        </div>

        <div className="relative px-4 md:px-8 lg:px-12 mb-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {promotions.map((item) => (
                <CarouselItem key={item.id} className="md:basis-4/5 lg:basis-3/4">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="mb-4 text-sm sm:text-base text-white/80">{item.description}</p>
                      <Link to={item.link}>
                        <Button 
                          variant="default" 
                          className="bg-white text-primary hover:bg-white/90"
                        >
                          ¡Aprovecha ahora! <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-6">
              <CarouselDots />
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <CarouselPrevious className="pointer-events-auto bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30" />
              <CarouselNext className="pointer-events-auto bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DiscountCarousel;
