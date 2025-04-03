
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from '../data/blog-data';

const BlogPreview = () => {
  // Get the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16">
      <div className="mathmate-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog Matemático</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros últimos artículos y recursos para mejorar tus habilidades matemáticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-md transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">
                      {blogCategories.find(c => c.id === post.category)?.name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="text-sm font-medium text-primary hover:underline">
                    Leer más
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog">
            <Button variant="outline" size="lg">
              Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
