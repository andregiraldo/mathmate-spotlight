import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { blogPosts, blogCategories } from '../data/blog-data';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-12">
        <div className="mathmate-container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Matemático</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora artículos, consejos y recursos para mejorar tus habilidades matemáticas.
            </p>
          </div>

          {/* AI and Mathematics Feature Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-secondary/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Inteligencia Artificial en las Matemáticas</h3>
              <p className="text-muted-foreground mb-4">
                Descubre cómo la inteligencia artificial está revolucionando el mundo de las matemáticas. Desde algoritmos de aprendizaje automático hasta redes neuronales, la IA ofrece nuevas perspectivas para resolver problemas matemáticos complejos.
              </p>
              <p className="text-muted-foreground mb-6">
                En nuestro blog aprenderás cómo estas tecnologías están transformando la educación matemática y abriendo nuevas posibilidades en campos como el análisis de datos, la optimización y la modelización matemática.
              </p>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Inteligencia Artificial y Matemáticas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar with categories */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Categorías</h3>
                <ScrollArea className="h-72">
                  <div className="space-y-2 pr-4">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === 'all' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      Todos los artículos
                    </button>
                    <Separator className="my-2" />
                    {blogCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            {/* Blog posts grid */}
            <div className="lg:col-span-9">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium">No hay artículos en esta categoría</h3>
                  <p className="text-muted-foreground mt-2">Prueba con otra categoría o regresa más tarde.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
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
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
