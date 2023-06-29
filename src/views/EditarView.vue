<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 navbar-wrapper">
        <div class="navbar-backoffice">
          <a href="../listar" class="navbar-item">
            <i class="fa-solid fa-house" style="color: #581a74;"></i>
          </a>
          <a @click="cerrarSesion" href="#" class="navbar-item">
            <i class="fa-solid fa-right-from-bracket" style="color: #581a74;"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h1>Editar Publicación</h1>
    <form v-on:submit.prevent="editarPublicacion">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" class="form-control" id="titulo" v-model="publicacion.Titulo" required>
      </div>
      <div class="form-group">
        <label for="formFile" class="form-label">Imagen de portada</label>
        <input class="form-control" type="file" id="formFile" @change="onFileChange">
      </div>
      <div class="form-group">
  <div class="row">
    <div class="col">
      <label for="hora">Hora</label>
      <input type="time" class="form-control" id="hora" v-model="publicacion.Hora" required>
    </div>
    <div class="col">
      <label for="fecha">Fecha</label>
      <input type="date" class="form-control" id="fecha" v-model="publicacion.Fecha" required>
    </div>
  </div>
</div>
      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <!-- <textarea class="form-control" id="descripcion" v-model="publicacion.Descripcion" required></textarea> -->
    <QuillEditor
      theme="snow"
      class="form-control"
      id="descripcion"
      :value="publicacion.Descripcion"
      @input="updateDescripcion"
      required
      :options="editorOptions"
      ref="quillEditor"
    ></QuillEditor>
      </div>
      <div class="button-container">
        <button type="submit" class="btn btn-success">Guardar</button>
        <router-link :to="{name:'listar'}" class="btn btn-secondary" @click="cancelar" >Cancelar</router-link>
      </div>
    </form>
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
  /* Agregar las siguientes propiedades para separar y centrar verticalmente */
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
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

.container {
  max-width: 70vw;
  margin: auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between
}
</style>


<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components: {
    QuillEditor,
  },
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link','image'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
          ],
        },
      },
      publicacion: {
      titulo: '',
      descripcion: '',
      hora: '',
      fecha: ''
      }
    }
  },
  mounted:function(){
    this.obtenerInformacion();
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result;
        this.publicacion.Imagen = base64Data;
      };

      reader.readAsDataURL(file);
    },
    obtenerInformacion() {
      // Editar para guardar la publicación
      fetch("http://localhost/publicaciones/?consultar="+this.$route.params.Id)
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        console.log(datosRespuesta);
        this.publicacion=datosRespuesta[0];
        this.$nextTick(() => {
          this.$refs.quillEditor.setHTML(this.publicacion.Descripcion);
        });
      });
    },
    cancelar() {
      // Lógica para cancelar la creación de la publicación
      this.publicacion = {
        titulo: '',
        descripcion: '',
        hora: '',
        fecha: ''
      };
    },
    editarPublicacion(){
      var datosEnviar = {
        id:this.$route.params.Id,
        titulo: this.publicacion.Titulo,
        imagen: this.publicacion.Imagen,
        descripcion: this.publicacion.Descripcion = this.$refs.quillEditor.getHTML(),
        estado:0,
        fecha: this.publicacion.Fecha,
        hora: this.publicacion.Hora,
      };
      fetch("http://localhost/publicaciones/?actualizar="+this.$route.params.Id,{
        method:"POST",
        body:JSON.stringify(datosEnviar)
      })
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        console.log(datosRespuesta);
        window.location.href='../listar';
      });
  },
  cerrarSesion() {
      // Actualizar el estado de inicio de sesión a "false"
      localStorage.setItem('isLoggedIn', 'false');
      
      // Redirigir a la página de inicio de sesión
      this.$router.push('/admin');
    },
  },
};

</script>
