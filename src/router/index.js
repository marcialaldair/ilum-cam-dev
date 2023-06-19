import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Bo from '../views/BackOffice.vue';
import Blog from '../views/BlogView.vue';
import Crear from '../views/CrearView.vue';
import Editar from '../views/EditarView.vue';
import Publicaciones from '../views/PublicationView.vue';
import Admin from '../views/LoginView.vue';

// Función para verificar si el usuario ha iniciado sesión
function usuarioHaIniciadoSesion() {
  // Verificar si el usuario ha iniciado sesión
  return localStorage.getItem('isLoggedIn') === 'true';
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar',
    name: 'listar',
    component: Bo,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
    },
  },
  {
    path: '/crear',
    name: 'crear',
    component: Crear,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
    }
  },
  {
    path: '/editar/:Id',
    name: 'editar',
    component: Editar,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      hideHeaderFooter: true // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/publicacion/:Id',
    name: 'publicacion',
    component: Publicaciones
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Agregar una función de verificación antes de ingresar a cada ruta que requiere autenticación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !usuarioHaIniciadoSesion()) {
    // El usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
    next('/admin');
  } else {
    // El usuario ha iniciado sesión o la ruta no requiere autenticación, permitir el acceso
    next();
  }
});

export default router;
