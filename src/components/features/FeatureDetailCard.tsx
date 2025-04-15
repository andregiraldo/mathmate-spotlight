
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureDetailCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureDetailCard = ({ title, description, image }: FeatureDetailCardProps) => {
  return (
    <Card className="glass-card border-primary/20 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[250px] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-primary"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mt-4 flex justify-end">
            <Link to="/blog">
              <Button className="bg-primary hover:bg-primary/80 text-foreground">
                Aprender más
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureDetailCard;
