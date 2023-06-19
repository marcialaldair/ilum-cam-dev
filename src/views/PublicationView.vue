<template>
  <div class="page-container">
    <div class="container-text">
      <div class="content-container">
        <div class="fondo-publicacion ql-editor" ref="descripcion" v-html="publicaciones.Descripcion"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container-text {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
  max-width: 90vw; /* Ajusta el ancho máximo según tus necesidades */
}

.fondo-publicacion {
  background-color: rgba(215, 215, 215, 0.118);
  flex-grow: 1;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {
      publicaciones: []
    };
  },
  mounted() {
    this.obtenerInformacion();
  },
  methods: {
    obtenerInformacion() {
      fetch("http://localhost/publicaciones/?consultar=" + this.$route.params.Id)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.publicaciones = datosRespuesta[0];
          this.aplicarEstilos();
        });
    },
    aplicarEstilos() {
      this.$nextTick(() => {
        const descripcionElement = this.$refs.descripcion;
        const imagenes = descripcionElement.querySelectorAll('img');
        imagenes.forEach((imagen) => {
          imagen.classList.add('img-fluid');
        });
      });
    },
  }
};
</script>
