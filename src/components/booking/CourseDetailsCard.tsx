
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, MessageCircle, Clock, Users } from "lucide-react";

interface CourseDetailsCardProps {
  courseId: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  students?: string;
}

export const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({
  courseId,
  title,
  description,
  price,
  duration,
  students,
}) => {
  return (
    <div className="glass-card rounded-xl p-8 animate-fade-right">
      <Link
        to={`/courses/${courseId}`}
        className="inline-flex items-center mb-6 text-accent hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al curso
      </Link>
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <span>Precio: {price || "Consultar precio"}</span>
        </div>
        {duration && (
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>Duración: {duration}</span>
          </div>
        )}
        {students && (
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>Grupo: {students}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-muted-foreground" />
          <a
            href="https://wa.me/573106574475"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
