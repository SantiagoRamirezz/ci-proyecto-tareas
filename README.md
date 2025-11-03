📘 Descripción

Este proyecto corresponde a una aplicación de gestión de tareas desarrollada con Node.js, Express y MongoDB, creada para ejemplificar procesos de Integración Continua (CI) con Docker y GitHub.

El sistema consta de dos servicios principales:

🟦 Backend (API REST): construido en Node.js.

🟩 Base de Datos: implementada con MongoDB.

Ambos servicios se ejecutan y comunican entre sí dentro de contenedores Docker.

🧰 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

Herramienta	Descripción	Descarga

Git	Control de versione

Docker Desktop

Node.js

🤖 Instalar dependencias

Si deseas probar el backend directamente en tu máquina ejecuta

cd backend
npm install


⚒️ Construir y levantar los contenedores


Ejecuta el siguiente comando:
docker compose up --build

Esto hará lo siguiente:

Construirá la imagen del backend.

Descargará la imagen oficial de MongoDB.

Creará una red interna para que los servicios se comuniquen.

Iniciará ambos contenedores.

🌐 Acceso a la aplicación

Una vez los contenedores estén corriendo, abre tu navegador en:

🔗 http://localhost:3000


