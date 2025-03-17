
import React from 'react';
import { Send } from 'lucide-react';

export const SubmissionSuccess: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Send className="h-8 w-8 text-accent" />
      </div>
      <h3 className="text-xl font-medium mb-2">¡Mensaje Enviado!</h3>
      <p className="text-muted-foreground">
        Gracias por contactarme. Te responderé a la brevedad posible.
      </p>
    </div>
  );
};
