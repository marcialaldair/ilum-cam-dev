<template>
    <!-- Enlace para que usuarios de teclado y lectores de pantalla salten la navegación -->
    <a v-if="!hideHeaderFooter" class="skip-link" href="#contenido">Saltar al contenido principal</a>
    <!-- Se oculta el header y el footer en el backoffice -->
    <Header v-if="!hideHeaderFooter" />
    <main id="contenido" tabindex="-1">
      <router-view></router-view>
    </main>
    <Footer v-if="!hideHeaderFooter" />
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    AOS.init({
      duration: 1500,
      // Respeta la preferencia del sistema de reducir animaciones
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  },
  computed: {
    hideHeaderFooter() {
      return this.$route.meta.hideHeaderFooter || false
    }
  },
}
</script>

<style src="@/assets/css/styles.css"></style>
