<template>
  <div class="col-md-12 col-lg-12">
    <div class="row col-md-12">
      <div class="col-md-6 fill-image">
        <!-- Contenido de la mitad izquierda con imagen -->
        <img src="@\assets\img\LoginBO3.jpg" alt="Imagen" class="img-fluid img-login">
      </div>
      <div class="row col-md-6 form-container">
        <!-- Contenido de la mitad derecha (formulario) -->
        <form class="col-md-9" v-on:submit.prevent="loginUser">
          <h1 class="mb-5 title-form">Bienvenida</h1>
          <div class="form-floating mb-5">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-5">
            <input v-model="password" type="password" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Contraseña</label>
          </div>
          <button type="submit" class="button-48">
            <span class="text" id="liveToastBtn">Entrar</span>
          </button>
          <div class="alert alert-danger popup" role="alert" v-show="showAlert">
              Correo o contraseña incorrecta
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: false,
      showAlert: false,
    };
  },
  methods: {
    loginUser() {
      var payload = {
        email: this.email,
        password: this.password,
      };
      // Realizar una solicitud HTTP GET a la ruta de validación
      axios.get('http://localhost/admin/', { params: payload })
        .then(response => {
          console.log(response);
          // Verificar la respuesta del backend
          if (response.data.success) {
            // Las credenciales son correctas, guardar el estado de inicio de sesión en el almacenamiento local
            localStorage.setItem('isLoggedIn', true);
            // Redirigir a la página deseada
            this.$router.push('/listar');
          } else {
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 3000)
          }
        })
        .catch(error => {
          // Ocurrió un error en la solicitud HTTP, mostrar mensaje de error
          this.error = true;
          this.error_msg = 'Error en la solicitud HTTP.';
          console.error(error);
        });
    },
  }
};


</script>



<style scope>
.popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
}


.form-container{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.img-login{
  height: 100vh;
  width: 100vw;
}

/* .fill-image {
  background-color: #9705ffa2;
} */

.custom-input{
  border-color: #581a74;
}

  .custom-input:focus {
    border-color: #581a74;
    box-shadow: 0 0 0 4px #dba8ff; /* Opcional: elimina la sombra al enfoque */
  }

.title-form{
  letter-spacing: 4px;
  color: #581a74;
  font-weight: 900;

}
</style>
