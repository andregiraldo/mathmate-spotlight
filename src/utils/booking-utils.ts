
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BookingFormValues } from "@/components/booking/BookingForm";

interface SubmitBookingParams {
  data: BookingFormValues;
  courseId: string;
  courseTitle: string;
}

export const submitBooking = async ({ data, courseId, courseTitle }: SubmitBookingParams) => {
  // 1. Guardar datos en Supabase
  const { error: supabaseError } = await supabase
    .from('course_bookings')
    .insert({
      course_id: courseId,
      course_title: courseTitle,
      name: data.name,
      email: data.email,
      phone: data.phone,
      payment_method: data.paymentMethod,
      comments: data.comments || ""
    });

  if (supabaseError) {
    console.error("Error guardando en Supabase:", supabaseError);
    throw new Error("Error al guardar la reserva en la base de datos");
  }

  // 2. Enviar datos al webhook
  const webhookUrl = "http://localhost:5678/webhook-test/form";
  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      courseTitle: courseTitle,
      paymentMethod: data.paymentMethod,
      comments: data.comments
    })
  });

  if (!webhookResponse.ok) {
    throw new Error("Error al enviar los datos al webhook");
  }

  return { success: true };
};
