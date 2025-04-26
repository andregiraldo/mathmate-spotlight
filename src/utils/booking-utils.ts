
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BookingFormValues } from "@/components/booking/BookingForm";

interface SubmitBookingParams {
  data: BookingFormValues & { paymentMethod?: string };
  courseId: string;
  courseTitle: string;
}

export const submitBooking = async ({ data, courseId, courseTitle }: SubmitBookingParams) => {
  try {
    // 1. Guardar datos en Supabase
    const { error: supabaseError } = await supabase
      .from('course_bookings')
      .insert({
        course_id: courseId,
        course_title: courseTitle,
        name: data.name,
        email: data.email,
        phone: data.phone,
        payment_method: data.paymentMethod || "online", // Valor por defecto
        comments: data.comments || ""
      });

    if (supabaseError) {
      console.error("Error guardando en Supabase:", supabaseError);
      throw new Error("Error al guardar la reserva en la base de datos");
    }

    // 2. Enviar datos al webhook con manejo de errores mejorado
    try {
      const webhookUrl = "https://n8n-nuevo-n8n.j3gxaw.easypanel.host/webhook/form";
      const webhookData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        courseTitle: courseTitle,
        paymentMethod: data.paymentMethod || "online", // Valor por defecto
        comments: data.comments || ""
      };
      
      console.log("Enviando datos al webhook:", webhookData);
      
      // Usar un timeout para evitar que la petición bloquee demasiado tiempo
      const webhookPromise = fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
      });
      
      // Esperar la respuesta con un timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Tiempo de espera agotado")), 5000)
      );
      
      const webhookResponse = await Promise.race([webhookPromise, timeoutPromise]);
      
      if (!(webhookResponse instanceof Response) || !webhookResponse.ok) {
        console.warn("Respuesta no exitosa del webhook:", webhookResponse);
        // No lanzamos error para que la reserva se considere exitosa
      }
    } catch (webhookError) {
      // Solo registramos el error pero no interrumpimos el flujo
      console.warn("Error al conectar con el webhook (continuando):", webhookError);
    }

    // Retornamos éxito incluso si el webhook falló
    return { success: true };
  } catch (error) {
    console.error("Error en submitBooking:", error);
    throw error;
  }
};
