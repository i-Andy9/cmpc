# Frontend CMPC Libros

Este proyecto es un frontend en React + TypeScript creado con Vite para consumir el backend de libros y usuarios.

## Características principales

- Login de autenticación con JWT
- Listado de libros con filtros avanzados (género, editorial, autor, disponibilidad)
- Ordenamiento dinámico por múltiples campos
- Paginación del lado del servidor
- Búsqueda en tiempo real con debounce
- Formulario de alta/edición de libro con validación reactiva y carga de imagen
- Visualización de datos de un libro

## Docker

Puedes construir y correr el frontend en un contenedor con:

```bash
docker build -t front-cmpc-libros .
docker run -p 8080:80 front-cmpc-libros
```

Luego accede a: http://localhost:8080

## Despliegue con Docker Compose

Si tienes el backend y frontend en carpetas separadas, mueve este archivo `docker-compose.yml` a la raíz del proyecto que contenga ambas carpetas (por ejemplo, `/Users/user/repos/`).

Luego ejecuta desde la raíz:

```bash
docker-compose up --build
```

Esto levantará los servicios de frontend, backend y base de datos PostgreSQL juntos. El frontend estará disponible en http://localhost:8080 y el backend en http://localhost:3000.

Asegúrate de ajustar las rutas de build/context en el `docker-compose.yml` si cambias la estructura de carpetas.

## Nota importante

El desarrollo priorizó la funcionalidad principal y la integración con el backend. El diseño visual se dejó en segundo plano y los tests del frontend son limitados, priorizando la entrega de los flujos funcionales clave. El proyecto es fácilmente extensible y está listo para continuar con mejoras visuales y de testing.

---

## Scripts

- `yarn dev` — Levanta el servidor de desarrollo
- `yarn build` — Compila la app para producción
- `yarn preview` — Previsualiza la app compilada

## Estructura sugerida

- `/src/components` — Componentes reutilizables
- `/src/pages` — Vistas principales (login, libros, detalle, edición)
- `/src/api` — Lógica de conexión con el backend
- `/src/hooks` — Custom hooks (auth, debounce, etc)
- `/src/types` — Tipos TypeScript compartidos

## Requisitos

- Node.js >= 18
- Yarn

## Backend

Asegúrate de tener el backend corriendo y configurado para aceptar peticiones desde este frontend.
