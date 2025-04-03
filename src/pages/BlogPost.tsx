
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { blogPosts, blogCategories } from '../data/blog-data';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts in the same category
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="mathmate-container pt-24 pb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Artículo no encontrado</h2>
          <p className="text-muted-foreground mb-6">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
          <Link to="/blog">
            <Button>Volver al blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryName = blogCategories.find(c => c.id === post.category)?.name;

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-12">
        <div className="mathmate-container">
          <div className="mb-10">
            <div className="flex items-center mb-8">
              <Link to="/blog">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
                </Button>
              </Link>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <div className="mb-6">
                <Badge className="mb-4">{categoryName}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
              </div>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2">Etiquetas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <Separator className="mb-10" />
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-md transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedPost.coverImage} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          {blogCategories.find(c => c.id === relatedPost.category)?.name}
                        </Badge>
                        <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
