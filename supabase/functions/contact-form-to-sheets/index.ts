
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Handle CORS preflight requests
function handleCors(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  return null;
}

// Main function to handle requests
serve(async (req: Request) => {
  // Handle CORS
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  // Only accept POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse request body
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Google Sheets API endpoint (you'll need to replace with actual integration)
    // This is a placeholder - in production, you'd need to authenticate with Google
    // and use their API directly or through a service like Zapier or Make

    // For Google Sheets direct API integration, you would:
    // 1. Set up OAuth2 credentials
    // 2. Use Google Sheets API to append rows

    // Example implementation with Make/Integromat webhook (simplified)
    const makeWebhookUrl = "https://hook.eu1.make.com/YOUR_WEBHOOK_ID";

    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone || 'N/A',
        subject,
        message
      })
    });

    if (!response.ok) {
      throw new Error(`Error sending data: ${response.statusText}`);
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Data sent to Google Sheets successfully',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error:', error.message);
    
    // Return error response
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
