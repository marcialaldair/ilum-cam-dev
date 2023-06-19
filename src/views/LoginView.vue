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
          <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label">Correo</label>
            <input v-model="email" type="email" class="form-control custom-input" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-5">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input v-model="password" type="password" class="form-control custom-input" id="exampleInputPassword1">
          </div>
          <button type="submit" class="button-48">
            <span class="text">Entrar</span>
          </button>
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
      error_msg: '',
    };
  },
methods: {
  loginUser() {
    var payload = {
      email: this.email,
      password: this.password,
    };

    // Realizar una solicitud HTTP a la API para obtener los datos de correo y contraseña
    axios.get('http://localhost/admin/')
      .then(response => {
        // Verificar si la respuesta contiene los datos esperados
        if (response.status === 200) {
          const data = response.data[0];
          console.log(data)
          // Comparar los datos recibidos con las credenciales ingresadas
          if (data.Correo === payload.email && data.password === payload.password) {
      // Las credenciales son correctas, guardar el estado de inicio de sesión en el almacenamiento local
      localStorage.setItem('isLoggedIn', true);

      // Redirigir a la página deseada
      this.$router.push('/listar');

          } else {
            // Las credenciales son incorrectas, mostrar mensaje de error
            this.error = true;
            this.error_msg = 'Nombre de usuario o contraseña incorrectos.';
          }
        } else {
          // No se pudo obtener los datos de la API, mostrar mensaje de error
          this.error = true;
          this.error_msg = 'Error al obtener los datos de la API.';
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
