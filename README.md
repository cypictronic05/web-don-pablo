# Sitio web: Don Pablo Videla — Gasfitería a domicilio

## Abrir y publicar
- Abre `index.html` en tu navegador o utiliza VS Code con Live Server.
- Para Vercel: importa la carpeta como proyecto estático, **Framework Preset: Other**, sin comando de build ni carpeta de salida (raíz del proyecto).
- Para hosting cPanel: sube el contenido de esta carpeta al directorio público del dominio.

## Antes de publicar
1. **Confirmar teléfono**: el número +56 9 8184 1300 fue leído de la fotografía de un aviso, no verificado con su titular. Se encuentra en `index.html` (metadatos, enlaces y contenido) y en la constante `PHONE` de `script.js`.
2. **Confirmar nombre**: Don Pablo Videla (según texto visible en el aviso).
3. **Confirmar servicios y zonas de atención**: las categorías son ejemplos habituales de gasfitería, no una lista certificada de prestaciones del trabajador.
4. **Verificar autorización para publicar** las fotografías, datos personales y el sitio.
5. **Fotografías IA**: las imágenes `assets/img/pablo-trabajando.webp` y `pablo-retrato.webp` son recreaciones ilustrativas generadas con IA a partir de las fotografías enviadas, no fotografías documentales del trabajo real. Se recomienda sustituir por fotos reales cuando estén disponibles.
6. Si se configura un dominio final, actualizar las etiquetas de redes sociales `og:image` con una URL absoluta y añadir el dominio al sitemap y la ficha de Google Business Profile.
7. No anunciar trabajos en instalaciones de gas sin acreditar la autorización SEC correspondiente. Esta web se centra en agua/sanitarios.

## Protección del código
**Ningún archivo HTML/CSS/JS que deba ejecutarse en el navegador puede ocultarse por completo**: es descargable a través de las herramientas del navegador. No existe una protección técnica real mediante bloqueo de clic derecho o Ctrl+U. Se entregan archivos separados y legibles para mantenerlos. Para dificultar la copia casual, puedes minificar y ofuscar **solo las copias de producción** (por ejemplo con Terser para JavaScript y un minificador CSS). Nunca incluyas claves privadas o secretos en estos archivos. Las funcionalidades sensibles deben implementarse en un backend.

## Qué incluye
- Diseño responsive, SEO básico, metadatos Open Graph y marcado de tipo Plumber.
- WhatsApp con consultas precargadas, botones de llamada y formulario que arma mensajes **sin guardar información en servidor**.
- Menú móvil, preguntas frecuentes y acceso flotante a WhatsApp.
- Enlace en footer a https://cocuyotec.com/.

Desarrollado por Cocuyotec SPA.
