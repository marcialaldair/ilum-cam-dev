<template>
    <!-- Se oculta el header y el footer en el backoffice -->
    <Header v-if="!hideHeaderFooter" />
    <router-view></router-view>
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
  components: {
    Header,
    Footer,
  },mounted() {
  this.setFavicon('/assets/logo.ico');
  AOS.init({duration: 1500});
},name: 'ComponentWithoutHeaderFooter',
  metaInfo() {
    return {
      title: 'Component Without Header/Footer' // Cambia el título de la página si es necesario
    }
  },
  computed: {
    hideHeaderFooter() {
      return this.$route.meta.hideHeaderFooter || false
    }
  },
  methods: {
    setFavicon(iconPath) {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = iconPath;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = iconPath;
        document.head.appendChild(newFavicon);
      }
    },
  },
}
</script>

<style src="@\assets\css\styles.css"></style>


