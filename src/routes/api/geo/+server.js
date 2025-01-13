import { geolocation } from '@vercel/functions';

export const GET = async (request) => {
  const { city } = await geolocation(request); // Await the geolocation function if it's asynchronous
  return new Response(`<h1>Your location is ${city}</h1>`, {
    headers: { 'content-type': 'text/html' },
  });
};
