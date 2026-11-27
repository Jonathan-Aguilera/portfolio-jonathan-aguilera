# TSC — Portafolio y CV Profesional

<div align="center">

![Badge Status](https://img.shields.io/badge/Status-En%20Desarrollo-brightgreen)
![React](https://img.shields.io/badge/React-19.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38BDF8?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite)

</div>

Sitio web personal y portafolio profesional de **Jonathan Aguilera**, diseñado para centralizar su trayectoria, proyectos destacados, formación académica y habilidades técnicas de manera moderna, interactiva y accesible.

---

## 🚀 Características Principales

- **Diseño Moderno y Responsivo:** Desarrollado con **Tailwind CSS v4** para una experiencia visual fluida en cualquier dispositivo (móvil, tablet y escritorio).
- **Navegación SPA:** Implementado con **React Router** para transiciones rápidas y sin recargas entre secciones.
- **Secciones Detalladas:**
  - **Inicio (`/`):** Presentación principal con resumen ejecutivo y accesos directos.
  - **Sobre mí (`/sobre-mi`):** Perfil profesional, trayectoria y motivación.
  - **Proyectos (`/proyectos`):** Vitrina de proyectos destacados (ej. *ReducAr*, *CodeCraft*) con tecnologías y enlaces.
  - **Experiencia (`/experiencia`):** Historial laboral y roles desempeñados.
  - **Formación (`/formacion`):** Estudios académicos, certificaciones y cursos.
  - **Habilidades (`/habilidades`):** Competencias técnicas agrupadas por categorías (Frontend, Backend, Bases de Datos, Herramientas).
  - **Contacto (`/contacto`):** Canales de comunicación directa y formulario.

---

## 🛠️ Stack Tecnológico

El proyecto está construido bajo una arquitectura frontend limpia y modular utilizando las últimas tecnologías con versiones específicas:

| Tecnología / Librería | Versión | Descripción |
| :--- | :--- | :--- |
| **React** | `19.3.1` | Biblioteca para construir interfaces de usuario |
| **TypeScript** | `6.0.3` | Lenguaje de tipado estático para robustez en el código |
| **Vite** | `8.3.4` | Entorno de desarrollo y empaquetador ultrarrápido |
| **Tailwind CSS** | `4.3.3` | Framework CSS v4 centrado en utilidades |
| **React Router DOM** | `7.18.5` | Enrutamiento declarativo y SPA |
| **Lucide React** | `1.77.0` | Iconos optimizados |
| **Oxlint** | `1.88.0` | Linter de alto rendimiento en Rust |

---

## 📁 Estructura del Repositorio

```text
TSC/
├── front/                 # Aplicación principal React + Vite
│   ├── src/
│   │   ├── common/        # Componentes reutilizables, layouts, hooks y utilidades
│   │   ├── data/          # Fuentes de datos estructurados (proyectos, habilidades, etc.)
│   │   ├── pages/         # Vistas principales de la aplicación (Home, Proyectos, etc.)
│   │   ├── sections/      # Secciones modulares de la interfaz
│   │   ├── App.tsx        # Configuración de rutas principales
│   │   └── main.tsx       # Punto de entrada de React
│   ├── package.json
│   └── ...
└── README.md              # Documentación general del proyecto
```

---

## ⚙️ Guía de Instalación y Ejecución

Para levantar el entorno de desarrollo localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd TSC
   ```

2. **Acceder al directorio del frontend:**
   ```bash
   cd front
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 👤 Autor

* **Jonathan Aguilera** — *Desarrollador de Software*
