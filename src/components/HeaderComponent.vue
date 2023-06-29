<template>
  <nav class="navbar sticky-top navbar-expand-lg col-md-12">
    <div class="container-fluid">
        <a class="navbar-brand logo" href="/">
          <img :src="imageSource" alt="logo_ilumcam" width="40" height="45" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <lord-icon
      :src="iconSrc"
      class="clickable"
      trigger="morph"
      colors="primary:#e4e4e4,secondary:#08a88a"
      style="width: 40px; height: 40px"
    ></lord-icon>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <div class="nocollapse navbar-nav col-md-12">
            <a class="nav-link efecto col-md-1" href="/#Nosotros">Nosotros</a>
            <a class="nav-link efecto col-md-1" href="/#Contactanos">Contacto</a>
            <a class="nav-link efecto col-md-1" href="/blog">Blog</a>
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
};
</script>

<style>
</style>
