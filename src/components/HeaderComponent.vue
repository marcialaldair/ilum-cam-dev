<template>
  <nav class="navbar sticky-top navbar-expand-lg col-md-12" aria-label="Navegación principal">
    <div class="container-fluid">
        <router-link class="navbar-brand logo" to="/">
          <img :src="imageSource" alt="Iluminando Caminos - Inicio" width="40" height="45" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Abrir o cerrar el menú"
        >
          <span aria-hidden="true">
            <lord-icon
      :src="iconSrc"
      class="clickable"
      trigger="morph"
      colors="primary:#e4e4e4,secondary:#08a88a"
      style="width: 40px; height: 40px; display: block"
    ></lord-icon>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01" ref="menu">
          <div class="nocollapse navbar-nav col-md-12">
            <router-link class="nav-link efecto col-md-1" to="/#Nosotros">Nosotros</router-link>
            <router-link class="nav-link efecto col-md-1" to="/#Contactanos">Contacto</router-link>
            <router-link class="nav-link efecto col-md-1" to="/blog">Blog</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
  data() {
    return {
      iconSrc: 'https://cdn.lordicon.com/uzrqzyei.json',
      imageSource: require("@/assets/logo.png"),
    };
  },
  mounted() {
    // La animación del ícono del menú se carga en segundo plano para no bloquear el render inicial
    if (!window.customElements.get('lord-icon')) {
      Promise.all([import('lottie-web'), import('lord-icon-element')])
        .then(([lottie, { defineElement }]) => {
          if (!window.customElements.get('lord-icon')) {
            defineElement(lottie.default.loadAnimation);
          }
        })
        .catch(console.error);
    }
  },
  watch: {
    // Al navegar se cierra el menú desplegable en móvil
    $route() {
      const menu = this.$refs.menu;
      if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        const boton = this.$el.querySelector('.navbar-toggler');
        boton.classList.add('collapsed');
        boton.setAttribute('aria-expanded', 'false');
      }
    },
  },
};
</script>

<style>
</style>
