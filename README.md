# Proyecto: Sistema de Login para Grupo Firma

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Índice
- Descripción del Proyecto
- Requisitos Previos
- Instalación
- Uso
- Estructura del Proyecto
- Características Implementadas
- Mejoras Futuras

## Descripción del Proyecto

Este proyecto es un sistema de login básico para un software de renta de automóviles, desarrollado para Grupo Firma utilizando Angular y Bootstrap. Incluye funcionalidades de autenticación mediante una API, vistas protegidas y un diseño responsivo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:
- Node.js (Versión recomendada: 18.x o superior)
- Angular CLI (Versión recomendada: 17.x)
- Git para control de versiones

## Instalación

1. Clonar el Repositorio
- Primero, clona el repositorio desde GitHub:

~~~
git clone https://github.com/tu-usuario/nombre-del-proyecto.git
cd nombre-del-proyecto
~~~

2. Instalar Dependencias
- Instala las dependencias del proyecto utilizando npm:

~~~
npm install
~~~

3. Ejecutar el Proyecto
- Inicia el servidor de desarrollo de Angular:

~~~
ng serve -o
~~~

## Uso

### Login
- Ingrese las credenciales proporcionadas en la página de login:
  - Usuario: emilys
  - Contraseña: emilyspass
- Al ingresar las credenciales correctas, será redirigido a una vista protegida donde se muestran los detalles del usuario.

**Nota:** Cabe destacar que las credenciales proporcionadas por la documentación de la prueba ya no son compatibles con la api:
  - Usuario: kminchelle (no funciona)
  - Contraseña: 0lelplR (no funciona)

### Logout
- Puede cerrar la sesión haciendo clic en el botón "Logout" que se encuentra en la vista protegida. Esto lo redirigirá automáticamente a la página de login.

## Estructura del Proyecto
A continuación se muestra una estructura básica del proyecto, con algunos ligeros cambios:

~~~
-proyecto/
  ├── src/
  |    ├── app/
  |    |    ├── core/
  |    |    |    ├── models/
  |    |    |    ├── services/
  |    |    |    ├── guards/
  |    |    ├── modules/
  |    |    |    ├── auth/
  |    |    |    |    ├── components/
  |    |    |    |    ├── pages/
  |    |    |    ├── private/
  |    |    |    |    ├── components/
  |    |    |    |    ├── pages
  |    ├── shared/
  |    |    ├── components/
  |    |    ├── directives/
  |    |    ├── pipes/
  |    ├── assets/
  ├── ...
  ├── README.md
~~~

## Características Implementadas
1. Login Simple
- Integrado con el endpoint https://dummyjson.com/auth/login.
- Token JWT almacenado en el local storage del navegador.

2. Protección de Vistas
- Implementado un guard de ruta para restringir el acceso a la vista protegida a usuarios autenticados.
- Implementado un guard de ruta para redirigir hacia el login si el usuario cierra la sesión.

3. Diseño Responsivo
- Interfaz diseñada con Bootstrap para garantizar la compatibilidad en dispositivos móviles y de escritorio.

4. Logout
- Botón de logout que elimina el token JWT y redirige al usuario a la página de login.

5. Navegación entre Vistas
- Navegación implementada utilizando Angular Router.

6. Utilización de servicios de Angular.
- Creación y uso del servicio Auth para conectar con la api.

7. Utilización de Git y Github para manejo de versiones y ramas.

8. Arquitectura del proyecto en capas.

9. Documentación básica

## Mejoras Futuras

- Validación de Formularios: Implementar validación en el formulario de login.
- Interceptor: Añadir un interceptor para gestionar automáticamente los headers de autenticación.
- Página de Error 404: Crear una página de error personalizada para rutas no encontradas.
- Pruebas Unitarias: Añadir pruebas unitarias con Jasmine y Karma