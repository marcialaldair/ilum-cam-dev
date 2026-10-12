import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { aplicarMetaRuta, cargarFontAwesome } from '../seo';

// Las vistas que no son la portada se cargan bajo demanda para reducir el JavaScript inicial
const Bo = () => import(/* webpackChunkName: "admin" */ '../views/BackOffice.vue');
const Crear = () => import(/* webpackChunkName: "admin-editor" */ '../views/CrearView.vue');
const Editar = () => import(/* webpackChunkName: "admin-editor" */ '../views/EditarView.vue');
const Admin = () => import(/* webpackChunkName: "admin" */ '../views/LoginView.vue');
const Blog = () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue');
const Publicaciones = () => import(/* webpackChunkName: "blog" */ '../views/PublicationView.vue');

// Función para verificar si el usuario ha iniciado sesión
function usuarioHaIniciadoSesion() {
  // Verificar si el usuario ha iniciado sesión
  return localStorage.getItem('isLoggedIn') === 'true';
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Iluminando Caminos | Psicología integral en Veracruz',
      description: 'Iluminando Caminos Psicología Integral: terapia individual, de pareja, familiar y grupal en Veracruz y en línea con Rosa Laura Torres Díaz, psicóloga y psicoterapeuta.'
    }
  },
  {
    path: '/listar',
    name: 'listar',
    component: Bo,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true, // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
      title: 'Publicaciones | Administración',
      noindex: true
    },
  },
  {
    path: '/crear',
    name: 'crear',
    component: Crear,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true, // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
      title: 'Crear publicación | Administración',
      noindex: true
    }
  },
  {
    path: '/editar/:Id',
    name: 'editar',
    component: Editar,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      requiresAuth: true, // Agrega una metaetiqueta para indicar que se requiere autenticación para acceder a esta ruta
      title: 'Editar publicación | Administración',
      noindex: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      hideHeaderFooter: true, // Agrega una metaetiqueta para indicar que se ocultará el header y el footer
      title: 'Iniciar sesión | Administración',
      noindex: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Blog | Iluminando Caminos Psicología Integral',
      description: 'Artículos y recursos de psicología, bienestar emocional y salud mental de Iluminando Caminos Psicología Integral en Veracruz.'
    }
  },
  {
    path: '/publicacion/:Id',
    name: 'publicacion',
    component: Publicaciones,
    meta: {
      title: 'Blog | Iluminando Caminos Psicología Integral'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Se descuenta la altura de la barra fija para que el título de la sección no quede oculto
      const barra = document.querySelector('nav');
      return { el: to.hash, top: barra ? barra.offsetHeight : 0, behavior: 'smooth' };
    }
    return savedPosition || { top: 0 };
  }
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

router.afterEach((to) => {
  aplicarMetaRuta(to);
  // Los íconos de Font Awesome solo se usan en la administración
  if (to.meta.requiresAuth) {
    cargarFontAwesome();
  }
});

export default router;
