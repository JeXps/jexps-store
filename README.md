# JeXps - Tienda de códigos para Steam 🎮🔥

JeXps es una tienda en línea especializada en la venta de códigos digitales para videojuegos de Steam, con entrega instantánea, carrito de compras funcional, autenticación segura y administración de órdenes en base de datos.

---

## 🧰 Tecnologías utilizadas

### Frontend
- **React** (SPA con React Router)
- **Bootstrap 5** + CSS personalizado
- **React Icons**

### Backend
- **Node.js** + **Express**
- **PostgreSQL** (con pg)
- **JWT** para autenticación
- **dotenv** para variables de entorno

### Otros
- **Firebase Storage** para imágenes de productos
- **Git y GitHub** para control de versiones

---

## 🗂️ Estructura del proyecto

### Frontend (`/src`)
/components
Navbar.jsx
Footer.jsx
/pages
Home.jsx
Cart.jsx
Login.jsx
App.jsx
App.css

### Backend (`/jexps-backend`)
/routes
auth.js
orders.js
/db
db.js
/middleware
authMiddleware.js

---

## ✅ Funcionalidades principales

### 🔐 Autenticación
- Registro y login de usuarios con **JWT**
- Middleware para rutas protegidas (`authenticateToken`)
- Persistencia de sesión en el frontend

### 🛒 Productos y Carrito
- Listado de productos con **imágenes desde Firebase**
- Filtro y búsqueda (opcional)
- Carrito interactivo: agregar, quitar, aumentar, disminuir
- Cálculo de total en tiempo real

### 📦 Ordenes
- Guardado de órdenes con múltiples productos en PostgreSQL
- Asociación con el usuario autenticado
- Uso de transacciones SQL (`BEGIN` y `COMMIT`)
- Validación de datos antes de insertar

### 💻 Frontend
- SPA con React Router (`/`, `/cart`, `/login`)
- Navbar y footer persistentes en todas las vistas
- Estilo responsive con Bootstrap
- Uso de `Intl.NumberFormat` para formato de moneda COP

---

## 🖼️ Gestión de Imágenes con Firebase

- Imágenes de productos subidas a **Firebase Storage**
- URLs públicas almacenadas en la base de datos
- Visualización desde el frontend en tarjetas de producto

---

## 🧪 Endpoints API (resumen)

### Auth (`/api/auth`)
- `POST /register` – Registro de nuevo usuario
- `POST /login` – Login y generación de JWT

### Órdenes (`/api/orders`)
- `POST /` – Guardar orden (requiere token)

---

## 📦 Requisitos para correr localmente

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/jexps.git
   cd jexps
Instala dependencias frontend:
npm install
Configura el backend en /jexps-backend/.env:
PORT=4000
DB_USER=postgres
DB_PASSWORD=tu_pass
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jexps
JWT_SECRET=clave_supersecreta
Corre el backend:
cd jexps-backend
npm run dev
Corre el frontend:
npm start
🔐 Seguridad
Passwords con bcrypt

JWT con expiración

Middleware de autenticación para rutas protegidas

Reglas de Firebase actualizadas para evitar acceso público sin control

📸 Capturas y demostración
(Aquí puedes agregar capturas de la app funcionando: productos, carrito, login, firebase...)

👨‍💻 Autor
Juan David Espinel Peña

Proyecto académico - Escuela Tecnológica Instituto Técnico Central

⚙️ Estado del proyecto
✅ Módulos completos:

Autenticación

Carrito funcional

Guardado de ordenes

Visualización de productos con imágenes