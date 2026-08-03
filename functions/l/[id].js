// Cloudflare Pages Function — puente para que los enlaces de lecciones
// compartidas se vean como slideseed.app/l/xxxx en vez de mostrar el
// dominio de railway.app del backend. 100% transparente: solo reenvia
// la pagina HTML que ya sirve el backend en /l/{id}.
//
// Detecta el entorno igual que el resto del frontend (pages.dev = staging,
// cualquier otro dominio = produccion), asi funciona en los dos sin tocar nada mas.
export async function onRequestGet({ params, request }) {
  const url = new URL(request.url);
  const backend = url.hostname.indexOf('pages.dev') !== -1
    ? 'https://slideseed-backend-staging.up.railway.app'
    : 'https://slideseed-backend-production.up.railway.app';

  const id = params.id;
  const upstream = await fetch(`${backend}/l/${encodeURIComponent(id)}`, {
    headers: { 'Accept': 'text/html' },
  });
  const html = await upstream.text();

  return new Response(html, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('Content-Type') || 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
