
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const DiscountCarousel = () => {
  const discounts = [
    {
      id: 1,
      title: "¡Tu primera clase gratis!",
      description: "Empieza tu viaje de aprendizaje matemático sin costo.",
      image: "/lovable-uploads/cartoon-math-3.png",
      link: "/contact",
    },
    {
      id: 2,
      title: "Descuento del 20% para grupos",
      description: "Estudia con amigos y ahorra en tus clases de matemáticas.",
      image: "/lovable-uploads/cartoon-math-4.png",
      link: "/courses",
    },
    {
      id: 3,
      title: "Paquete especial para estudiantes",
      description: "Adquiere 10 clases con un 15% de descuento.",
      image: "/lovable-uploads/cartoon-math-5.png",
      link: "/courses",
    },
    {
      id: 4,
      title: "Descuento para nuevos estudiantes",
      description: "10% de descuento en tu primer mes de clases.",
      image: "/lovable-uploads/cartoon-math-6.png",
      link: "/courses",
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

        <div className="px-10 md:px-14 lg:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {discounts.map((discount) => (
                <CarouselItem key={discount.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-md">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={discount.image}
                          alt={discount.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{discount.title}</h3>
                        <p className="text-muted-foreground mb-4">{discount.description}</p>
                        <Link to={discount.link}>
                          <Button className="w-full">
                            ¡Aprovecha ahora! <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 md:-left-8" />
            <CarouselNext className="absolute -right-4 md:-right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DiscountCarousel;
