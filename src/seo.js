// Utilidades para mantener título, descripción y etiquetas SEO sincronizadas con la ruta actual

const SITE_URL = (process.env.VUE_APP_SITE_URL || '').replace(/\/$/, '');
const TITULO_POR_DEFECTO = 'Iluminando Caminos | Psicología integral en Veracruz';
const DESCRIPCION_POR_DEFECTO = 'Iluminando Caminos Psicología Integral: terapia individual, de pareja, familiar y grupal en Veracruz y en línea con Rosa Laura Torres Díaz, psicóloga y psicoterapeuta.';

function setMeta(atributo, clave, contenido) {
  let etiqueta = document.head.querySelector(`meta[${atributo}="${clave}"]`);
  if (!etiqueta) {
    etiqueta = document.createElement('meta');
    etiqueta.setAttribute(atributo, clave);
    document.head.appendChild(etiqueta);
  }
  etiqueta.setAttribute('content', contenido);
}

function setCanonical(url) {
  let enlace = document.head.querySelector('link[rel="canonical"]');
  if (!enlace) {
    enlace = document.createElement('link');
    enlace.rel = 'canonical';
    document.head.appendChild(enlace);
  }
  enlace.href = url;
}

// Actualiza título y descripción (útil para contenido que llega de la API, como una publicación)
export function actualizarMeta({ title, description } = {}) {
  const titulo = title || TITULO_POR_DEFECTO;
  const descripcion = description || DESCRIPCION_POR_DEFECTO;
  document.title = titulo;
  setMeta('name', 'description', descripcion);
  setMeta('property', 'og:title', titulo);
  setMeta('property', 'og:description', descripcion);
}

export function aplicarMetaRuta(ruta) {
  actualizarMeta(ruta.meta);
  setMeta('name', 'robots', ruta.meta.noindex ? 'noindex, nofollow' : 'index, follow');
  if (SITE_URL) {
    const url = SITE_URL + ruta.path;
    setCanonical(url);
    setMeta('property', 'og:url', url);
  }
}

// Texto plano a partir de HTML, recortado para usarse como meta description
export function resumenDeHtml(html, maxLength = 155) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  const texto = (div.textContent || '').replace(/\s+/g, ' ').trim();
  return texto.length > maxLength ? texto.slice(0, maxLength - 1).trimEnd() + '…' : texto;
}

let fontAwesomeCargado = false;
export function cargarFontAwesome() {
  if (fontAwesomeCargado) return;
  fontAwesomeCargado = true;
  const enlace = document.createElement('link');
  enlace.rel = 'stylesheet';
  enlace.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  enlace.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
  enlace.crossOrigin = 'anonymous';
  enlace.referrerPolicy = 'no-referrer';
  document.head.appendChild(enlace);
}
