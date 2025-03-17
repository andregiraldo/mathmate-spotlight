
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  Clock, 
  Users, 
  BookOpen, 
  ChevronRight, 
  CreditCard, 
  Mail, 
  WhatsApp 
} from 'lucide-react';
import { courses } from '../data/courses';
import { Button } from '../components/ui/button';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="mathmate-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
          <p className="mb-8 text-muted-foreground">El curso que buscas no existe o ha sido removido.</p>
          <Link 
            to="/courses" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver todos los cursos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-24 pb-16">
        <div className="mathmate-container">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Inicio</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            <Link to="/courses" className="text-muted-foreground hover:text-foreground">Cursos</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            <span>{course.title}</span>
          </nav>
          
          {/* Course Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-right">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
            
            <div className="animate-fade-left">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
                {course.level}
              </span>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duración</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estudiantes</p>
                    <p className="font-medium">{course.students}</p>
                  </div>
                </div>
                
                {course.price && (
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Precio</p>
                      <p className="font-medium">{course.price}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to={`/courses/${course.id}/booking`}>
                <Button size="lg" className="w-full md:w-auto">
                  Reservar clase
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Course Content */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 animate-fade-up">
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Descripción del curso</h2>
                <p className="text-muted-foreground mb-8">
                  {course.longDescription}
                </p>
                
                <h3 className="text-xl font-bold mb-4">Lo que aprenderás</h3>
                <ul className="space-y-3 mb-8">
                  {course.topics?.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <BookOpen className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="animate-fade-left">
              <div className="glass-card rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">¿Necesitas más información?</h3>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Si tienes preguntas sobre este curso, no dudes en contactarme para recibir información personalizada.
                  </p>
                  
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="outline" className="w-full mb-3">
                        <Mail className="mr-2" />
                        Contactar
                      </Button>
                    </Link>
                    
                    <a 
                      href={`https://wa.me/573106574475?text=Hola,%20me%20interesa%20el%20curso%20de%20${encodeURIComponent(course.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90">
                        <WhatsApp className="mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
