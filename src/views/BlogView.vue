<template>
  <div class="card-blog">
    <div class="container mt-5">
      <div class="row">
        <div v-for="publicacion in publicacionesFiltradasOrdenadas" :key="publicacion.id" class="mb-5 col-md-3 col-lg-3 card-center">
          <router-link
            :to="{ name: 'publicacion', params: { Id: publicacion.id } }"
            class="btn"
          >
            <div class="card">
              <div class="card-img-container">
                <img
                  :src="publicacion.imagen"
                  class="card-img-top"
                  alt="Imagen"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ truncateText(publicacion.titulo, 38) }}</h5>
              </div>
              <div class="card-footer text-left">
                <small class="text-muted">Publicado: {{ publicacion.fecha }}</small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-blog {
  min-height: 100vh;
}

.card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(93, 15, 129, 0.329);
}

.card:hover .card-img-top {
  transform: scale(1.01);
}

.card-img-container {
  width: 18rem;
  height: 200px;
  overflow: hidden;
}
.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import apiClient from '@/services/api';

export default {
  data() {
    return {
      publicaciones: [],
    };
  },
  created() {
    this.consultarPublicaciones();
  },
  computed: {
    publicacionesFiltradasOrdenadas() {
      const publicacionesFiltradas = this.publicacionesFiltradas;
      return publicacionesFiltradas.sort((a, b) => {
        const fechaPublicacionA = new Date(a.fecha + " " + a.hora);
        const fechaPublicacionB = new Date(b.fecha + " " + b.hora);
        return fechaPublicacionB - fechaPublicacionA;
      });
    },
    publicacionesFiltradas() {
      // El backend ya solo marca estado=1 cuando la fecha/hora programada llegó
      return this.publicaciones.filter((publicacion) => publicacion.estado === 1);
    },
  },
  methods: {
    consultarPublicaciones() {
      apiClient.get('/publicaciones')
        .then((response) => {
          this.publicaciones = response.data;
        })
        .catch(console.log);
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>
