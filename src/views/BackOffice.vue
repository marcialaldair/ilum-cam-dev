<template>
  <div>
    <div class="row">
      <div class="col-md-2 navbar-wrapper">
        <div class="navbar-backoffice">
          <a class="navbar-item">
            <i class="fa-solid fa-house" style="color: #581a74"></i>
          </a>
          <a @click="cerrarSesion" href="#" class="navbar-item">
            <i
              class="fa-solid fa-right-from-bracket"
              style="color: #581a74"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="table-container">
    <div class="table-wrapper">
      <div class="col-lg-12 button-create">
        <a href="/crear"
          ><button type="button" class="btn btn-success">
            Crear <i class="fa-solid fa-plus"></i></button
        ></a>
      </div>
      <div class="table-fixed-height">
        <table class="table tabla-con-botones">
          <thead>
            <tr class="estilos-th">
              <th scope="col" style="width: 50px">ID</th>
              <th scope="col" style="width: 150px">Titulo</th>
              <th scope="col" style="width: 300px">Descripción</th>
              <th scope="col" style="width: 20px">Estado</th>
              <th scope="col" style="width: 200px">Fecha</th>
              <th scope="col" style="width: 200px">Hora</th>
              <th scope="col" style="width: 150px">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="estilos-th"
              v-for="publicacion in paginatedPublicaciones.reverse()"
              :key="publicacion.id"
            >
              <th scope="row">{{ publicacion.Id }}</th>
              <td>{{ truncateText(publicacion.Titulo, 15) }}</td>
              <td>{{ truncateText(publicacion.Descripcion, 30) }}</td>
              <td>
                <span
                  :class="
                    publicacion.Estado == 1
                      ? 'alert alert-success'
                      : 'alert alert-danger'
                  "
                  role="alert"
                >
                  {{ publicacion.Estado == 1 ? "Activo" : "Inactivo" }}
                </span>
              </td>
              <td>{{ publicacion.Fecha }}</td>
              <td>{{ publicacion.Hora }}</td>
              <td>
                <div class="button-container">
                  <router-link
                    :to="{ name: 'editar', params: { Id: publicacion.Id } }"
                    class="btn btn-primary btn-sm"
                    ><i class="fa-solid fa-pen"></i
                  ></router-link>

                  <button
                    type="button"
                    v-on:click="borrarPublicacion(publicacion.Id)"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fa-solid fa-trash" style="color: #ffffff"></i>
                  </button>
                  <!-- <button class="btn btn-warning btn-sm">
                    <i class="fa-solid fa-paper-plane"></i>
                  </button> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-12 container-paginacion">
        <ul class="pagination">
          <li
            class="page-item"
            v-for="page in pageCount"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a class="page-link" @click="setCurrentPage(page)">{{ page }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  background-color: #9f70d2;
  margin-left: 20px;
  border-radius: 20px;
  width: 80px;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Mantén la posición fija pero ajusta el posicionamiento */
  position: fixed;
  top: 20px; /* Ajusta la distancia desde la parte superior según sea necesario */
  z-index: 1;
}

.navbar-backoffice {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  padding: 20px;
}

.navbar-item {
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
}

.navbar-item:last-child {
  margin-bottom: 0;
}

.navbar-item i {
  margin-right: 5px;
}

.centrar-vertical {
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  height: 100vh; /* Opcional: ajusta la altura a tu preferencia */
}

.button-container > .btn {
  margin-right: 5px; /* Ajusta el espacio horizontal entre los botones */
}

.table-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.table-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* Ajusta el espacio entre el botón y la tabla */
}

.button-create {
  display: flex;
  justify-content: end;
  padding-bottom: 5px;
}

/* Estilos para el contenedor de la tabla */
.tabla-con-botones {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.table-fixed-height {
  height: 550px; /* Ajusta la altura según tus necesidades */
  overflow-y: auto;
}

/* Estilos para centrar los th dentro de la thead */
.estilos-th {
  text-align: center;
}

/* Estilos adicionales para la thead */
.tabla-con-botones thead {
  background-color: #9f70d2;
  color: white;
}

.container-paginacion {
  display: flex;
  justify-content: end;
}

.alert-success {
  border-radius: 10px;
  padding: 3px 5px;
  /* Otros estilos para cuando está activo */
}

.alert-danger {
  border-radius: 10px;
  padding: 3px 5px;
  /* Otros estilos para cuando está inactivo */
}
</style>

<script>
export default {
  data() {
    return {
      publicaciones: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  created() {
    this.consultarPublicaciones();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.publicaciones.length / this.itemsPerPage);
    },
    paginatedPublicaciones() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.publicaciones.slice(startIndex, endIndex);
    },
  },
  methods: {
    actualizarEstadoPublicacion(publicacion) {
    const fechaActual = new Date();
    const fechaPublicacion = new Date(
      publicacion.Fecha + " " + publicacion.Hora
    );

    if (fechaActual >= fechaPublicacion && publicacion.Estado !== 1) {
      // Realizar la solicitud POST para actualizar el estado de la publicación
      const datosEnviar = {
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
          // Aquí puedes realizar alguna acción adicional después de actualizar el estado
        })
        .catch(console.log);
    }
  },
  consultarPublicaciones() {
  fetch("http://localhost/publicaciones/")
    .then((respuesta) => respuesta.json())
    .then((datosRespuesta) => {
      if (typeof datosRespuesta[0].success === "undefined") {
        this.publicaciones = datosRespuesta;

        // Verificar y actualizar el estado de las publicaciones
        this.publicaciones.forEach((publicacion) => {
          this.actualizarEstadoPublicacion(publicacion);
        });
      }
    })
    .catch(console.log);
},
    setCurrentPage(page) {
      this.currentPage = page;
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    },
    borrarPublicacion(id) {
      fetch("http://localhost/publicaciones/?borrar=" + id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = "listar";
        })
        .catch(console.log);
    },
    cerrarSesion() {
      // Actualizar el estado de inicio de sesión a "false"
      localStorage.setItem("isLoggedIn", "false");

      // Redirigir a la página de inicio de sesión
      this.$router.push("/admin");
    },
  },
};
</script>
