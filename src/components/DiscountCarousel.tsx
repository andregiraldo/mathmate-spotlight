
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
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const DiscountCarousel = () => {
  const discounts = [
    {
      id: 1,
      title: "¡Tu primera clase gratis! 🔥",
      description: "Empieza tu viaje de aprendizaje matemático sin costo.",
      image: "/lovable-uploads/cartoon-math-3.png",
      link: "/contact",
      bgColor: "bg-gradient-to-br from-primary to-accent",
      symbol: "∑",
    },
    {
      id: 2,
      title: "Descuento del 20% para grupos",
      description: "Estudia con amigos y ahorra en tus clases de matemáticas.",
      image: "/lovable-uploads/cartoon-math-4.png",
      link: "/courses",
      bgColor: "bg-gradient-to-br from-blue-500 to-violet-500",
      symbol: "π",
    },
    {
      id: 3,
      title: "Paquete especial para estudiantes",
      description: "Adquiere 10 clases con un 15% de descuento.",
      image: "/lovable-uploads/cartoon-math-5.png",
      link: "/courses",
      bgColor: "bg-gradient-to-br from-violet-500 to-indigo-600",
      symbol: "∞",
    },
    {
      id: 4,
      title: "Descuento para nuevos estudiantes",
      description: "10% de descuento en tu primer mes de clases.",
      image: "/lovable-uploads/cartoon-math-6.png",
      link: "/courses",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
      symbol: "√",
    },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="mathmate-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Promociones Especiales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprovecha estas ofertas exclusivas para empezar tu camino hacia el éxito matemático.
          </p>
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {discounts.map((discount) => (
                <CarouselItem key={discount.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="overflow-hidden border-none shadow-lg h-full rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className={`${discount.bgColor} relative p-6 text-white rounded-t-2xl`}>
                      <span className="absolute right-4 top-4 text-6xl opacity-20 font-serif">
                        {discount.symbol}
                      </span>
                      <h3 className="text-xl font-bold mb-2 relative z-10">{discount.title}</h3>
                      <p className="mb-4 relative z-10">{discount.description}</p>
                      <Link to={discount.link}>
                        <Button 
                          variant="default" 
                          className="w-full font-bold bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
                        >
                          ¡Aprovecha ahora! <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="h-48 overflow-hidden rounded-b-2xl">
                      <img
                        src={discount.image}
                        alt={discount.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselDots />
            </div>
            <CarouselPrevious className="absolute -left-4 md:-left-8" />
            <CarouselNext className="absolute -right-4 md:-right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DiscountCarousel;
