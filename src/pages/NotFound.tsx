
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-6 animate-fade-up">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary opacity-10">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-bold text-primary">404</div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
