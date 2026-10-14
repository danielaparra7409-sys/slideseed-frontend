# Slideseed — Frontend

Landing pública y editor de lecciones de [Slideseed](https://slideseed.app), una herramienta que convierte documentos de profesores en lecciones HTML interactivas usando IA.

Un producto de [Dandelion Bio Blog](https://dandelionbioblog.com).

## Qué hace

El docente sube un PDF, DOCX, PPTX o TXT. Slideseed lo procesa con Claude AI y genera slides estructuradas con actividades evaluativas listas para compartir con estudiantes. El frontend cubre tres partes en un solo archivo HTML:

1. **Landing page** con precios y llamadas a la acción
2. **Editor de slides** donde el docente edita texto, reordena slides, agrega imágenes y elige el tipo de actividad antes de descargar
3. **Generador del HTML estudiantil** que construye el archivo interactivo directamente en el navegador, sin servidor adicional

### Actividades incluidas

- Quiz con retroalimentación inmediata y distractores pedagógicos
- Relacionar términos con definiciones (drag and drop)
- Ordenar pasos o conceptos (drag to sort)
- Flip cards con autoevaluación y puntaje
- Completar espacios (con banco de palabras para K-5)
- Reflexión escrita

El diseño visual se adapta automáticamente al nivel educativo seleccionado: K-2, 3-5, 6-8, 9-12, Universidad o Mixto.

## Capturas

| Editor | Lección estudiantil | Pantalla de puntaje |
|---|---|---|
| ![Editor con actividades por tipo](screenshots/editor.png) | ![Quiz activo](screenshots/lesson-quiz.png) | ![Puntaje final](screenshots/score.png) |

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML + CSS + JavaScript puro (sin framework) |
| Generación de PPTX | pptxgenjs vía CDN |
| Hosting | Cloudflare Pages |
| Backend | FastAPI · Python · Railway (repositorio privado) |
| IA | Claude API (Anthropic) |

El backend vive en un repositorio privado para proteger la lógica de negocio.

## Estructura del proyecto

```
slideseed-frontend/
└── index.html
```

Un solo archivo autocontenido. Sin dependencias de build, sin npm, sin framework. Se despliega arrastrando el archivo a Cloudflare Pages.

## Despliegue

El sitio corre en Cloudflare Pages. Para actualizar:

1. Edita `index.html`
2. Ve al dashboard de Cloudflare Pages, proyecto `slideseed`
3. Sube el archivo actualizado

## Producto

[slideseed.app](https://slideseed.app) · Prueba gratis, sin tarjeta de crédito.

## Licencia

Propietaria. Todos los derechos reservados © 2026 Dandelion Bio Blog.
