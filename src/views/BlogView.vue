<template>
  <div class="card-blog">
    <div class="container mt-5">
      <div class="row">
        <div v-for="publicacion in publicacionesFiltradasOrdenadas" :key="publicacion.id" class="mb-5 col-md-3 col-lg-3 card-center">
          <router-link
            :to="{ name: 'publicacion', params: { Id: publicacion.Id } }"
            class="btn"
          >
            <div class="card">
              <div class="card-img-container">
                <img
                  :src="publicacion.Imagen"
                  class="card-img-top"
                  alt="Imagen"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ truncateText(publicacion.Titulo, 38) }}</h5>
              </div>
              <div class="card-footer text-left">
                <small class="text-muted">Publicado: {{ publicacion.Fecha }}</small>
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
        const fechaPublicacionA = new Date(a.Fecha + " " + a.Hora);
        const fechaPublicacionB = new Date(b.Fecha + " " + b.Hora);
        return fechaPublicacionB - fechaPublicacionA;
      });
    },
    publicacionesFiltradas() {
      var fechaActual = new Date();
      return this.publicaciones.filter((publicacion) => {
        var fechaPublicacion = new Date(publicacion.Fecha + " " + publicacion.Hora);

        if (fechaActual >= fechaPublicacion && publicacion.Estado !== 1) {
          // Realizar la solicitud de actualización del estado
          var datosEnviar = {
            id: publicacion.Id,
            estado: 1,
          };

          fetch("http://localhost/publicaciones/?estado=" + publicacion.Id, {
            method: "POST",
            body: JSON.stringify(datosEnviar),
          })
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
              console.log(datosRespuesta);
              // Actualizar el estado de la publicación localmente
              publicacion.Estado = 1;
            });
        }

        return fechaActual >= fechaPublicacion;
      });
    },
  },
  methods: {
    consultarPublicaciones() {
      fetch("http://localhost/publicaciones/")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          if (typeof datosRespuesta[0].success === "undefined") {
            this.publicaciones = datosRespuesta;
          }
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
