import { serve } from "https://deno.land/std/http/server.ts";

const handler = (req: Request) => new Response("Hello from Deno!", {
  headers: { "content-type": "text/plain" },
});

console.log("Server running on http://localhost:8000");
await serve(handler);
