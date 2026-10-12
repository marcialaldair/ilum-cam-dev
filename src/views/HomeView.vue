<template>
    <!-- <header class="container-fluid">Psicología integral</header> -->
    <!--$ navbar para pegar el navbar arriba aplicar fixed-top-->
    <!--$ Carrousel -->
    <h1 class="visually-hidden">Iluminando Caminos Psicología Integral: terapia psicológica en Veracruz y en línea</h1>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" :data-bs-ride="autoplay ? 'carousel' : null" data-bs-interval="8000"
      aria-roledescription="carrusel" aria-label="Servicios destacados">
      <div class="carousel-inner">
        <div class="carousel-item active" aria-roledescription="diapositiva" aria-label="1 de 2">
          <!-- Imagen vertical en móvil y horizontal en escritorio; es la imagen principal (LCP), se carga con prioridad alta -->
          <picture>
            <source media="(max-width: 767px)" srcset="@/assets/img/optimized/slider_cel.webp" width="552" height="1080">
            <source srcset="@/assets/img/optimized/slider-1280.webp 1280w, @/assets/img/optimized/slider.webp 1920w" sizes="100vw" width="1920" height="1080">
            <img src="@/assets/img/optimized/slider.webp" class="d-block w-100" width="1920" height="1080" fetchpriority="high"
              alt="¿No eres de Veracruz? Conoce nuestra terapia en línea. Solo necesitas acceso a Internet y un teléfono o computadora. Agenda tu cita al +52 229 209 2415.">
          </picture>
          <!-- <img src="img/pexels-cottonbro-studio-4100672.jpg" class="d-block w-100" data-bs-interval="10000" alt="..." /> -->
        </div>
        <div class="carousel-item" aria-roledescription="diapositiva" aria-label="2 de 2">
          <picture>
            <source media="(max-width: 767px)" srcset="@/assets/img/optimized/slider_cel1.webp" width="552" height="1080">
            <source srcset="@/assets/img/optimized/slider1-1280.webp 1280w, @/assets/img/optimized/slider1.webp 1920w" sizes="100vw" width="1920" height="1080">
            <img src="@/assets/img/optimized/slider1.webp" class="d-block w-100" width="1920" height="1080" fetchpriority="low" decoding="async"
              alt="Terapia para adolescentes, adultos, de pareja, familiar, grupal y para mujeres víctimas de violencia. Terapia breve con hipnosis ericksoniana. Grupos de crecimiento para niñas, niños, adolescentes y mujeres, y sesiones de relajación y meditación.">
          </picture>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Diapositiva anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Diapositiva siguiente</span>
      </button>
    </div>
    <!--$ Informacion de la psicologa -->
    <!-- <div class="info col-sm-12 col-md-12 col-lg-12">
    <div class="card bio mb-3" data-aos="fade-right" style="max-width: 80%">
      <div class="row g-0">
        <div class="image-izquierda col-sm-4 col-md-4 col-lg-4">
          <img src="img/Imagen.png" class="img-fluid float-start" alt="doctora" />
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
          <div class="card-body">
            <h5 class="purple card-title">Rosa Laura Torres Díaz</h5>
            <p class="purple card-text">Psicóloga y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicología Integral”</span>
            </p>
            <p class="card-text">
              Si quieres mejorar tu vida más rápido y cómodamente puedes
              llevar a cabo un proceso terapéutico o trabajar en terapia algún
              problema en particular que haya estado estorbando tu crecimiento
              y desarrollo personal, emocional y de salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

    <div class="Nosotros info col-md-12 col-lg-12 col-sm-12 no-overflow-x">
    <div data-aos="fade-right" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="image-izquierda col-md-4 col-lg-4 col-sm-4">
          <img src="@/assets/img/optimized/card1.webp" class="img-fluid float-start" width="490" height="490" loading="lazy" decoding="async"
            alt="Psicóloga tomando notas en una tabla durante una sesión de terapia" />
        </div>
        <div class="col-md-8 col-lg-8 col-sm-8">
          <div class="card-body">
            <h2 class="h5 purple card-title">Rosa Laura Torres Díaz</h2>
            <p class="purple card-text">Psicóloga y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicología Integral”</span>
            </p>
            <p class="card-text">
              Si quieres mejorar tu vida más rápido y cómodamente puedes
              llevar a cabo un proceso terapéutico o trabajar en terapia algún
              problema en particular que haya estado estorbando tu crecimiento
              y desarrollo personal, emocional y de salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Video de información -->
    <div class="info col-md-12 col-lg-12 no-overflow-x">
    <div class="card bio mb-3" data-aos="fade-left" style="max-width: 80%">
      <div class="row g-0">
        <div class="col-md-6 col-lg-6">
          <div class="card-body">
            <h2 class="h5 purple card-title">Rosa Laura Torres Díaz</h2>
            <p class="purple card-text">Psicóloga y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicología Integral”</span>
            </p>
            <p class="card-text">
              Si quieres mejorar tu vida más rápido y cómodamente puedes
              llevar a cabo un proceso terapéutico o trabajar en terapia algún
              problema en particular que haya estado estorbando tu crecimiento
              y desarrollo personal, emocional y de salud.
            </p>
          </div>
        </div>
        <div class="image-derecha col-md-6 col-lg-6 embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cDsbV0ObwwA" title="Video de presentación de Iluminando Caminos Psicología Integral" loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
    <!--$Sección de nosotros -->
    <div id="Nosotros" class="encabezado col-sm-12 no-overflow-x">
    <h2 class="h4 purple">Nosotros</h2>
    <p class="parrafo">Como pasamos de una idea a un clínica</p>
  </div>
  <div class="Nosotros info col-md-12 col-lg-12 col-sm-12 no-overflow-x">
    <div data-aos="fade-right" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="col-md-8 col-lg-8 col-sm-8">
          <div class="card-body">
            <h3 class="h5 purple card-title">
              ¿Cómo surgió Iluminando Caminos?
            </h3>
            <br /><br />
            <p class="card-text">
              Surgió como idea desde que estudiaba la licenciatura y lo
              planeamos con algunas compañeras, instalar una clínica
              psicológica para la atención de personas de todas las edades y
              de cualquier tipo de problema, al titularnos no nos fue posible
              abrirla hasta tener recursos económicos y eso fue hasta el 2013,
              que con toda ilusión y nuestros ahorros abrimos un muy lindo
              consultorio en la zona centro de la ciudad de Veracruz con mis
              amigas Mariana López y Marycarmen Santos, y estaba contemplada
              Luz del Carmen Lagos pero por otra oportunidad de trabajo fungió
              en principio como madrina.
            </p>
          </div>
        </div>
        <div class="image-derecha col-md-4 col-lg-4 col-sm-4">
          <img src="@/assets/img/optimized/card2.webp" class="img-fluid float-start" width="490" height="490" loading="lazy" decoding="async"
            alt="Ilustración de un grupo de personas chocando las manos en señal de trabajo en equipo" />
        </div>
      </div>
    </div>
  </div>
  <div class="Nosotros info col-md-12 col-lg-12 no-overflow-x">
    <div data-aos="fade-left" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="image-izquierda col-md-4 col-lg-4">
          <img src="@/assets/img/optimized/card3.webp" class="img-fluid float-start" width="490" height="490" loading="lazy" decoding="async"
            alt="Ilustración de una psicóloga conversando con una paciente durante una sesión de terapia" />
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="card-body">
            <h3 class="h5 purple card-title">
              ¿Cómo surgió Iluminando Caminos?
            </h3>
            <br /><br />
            <p class="card-text">
              Mis colegas se fueron separando al obtener sus plazas de
              profesoras y yo quede como única titular del consultorio hasta
              hoy en día, Entre las actividades realizadas, se han hecho
              Grupos de Crecimiento para niños, niñas y adolescentes, Cursos
              de Verano preparados con bases psicológicas, Grupos de
              Crecimiento para Mujeres, Asesorías para psicólogos/as. Se dan
              terapias a partir de los 8 años en adelante, terapia individual,
              de pareja, familiar, grupal y sesiones de meditación y
              relajación para el estrés.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- $Seccion de diplomas -->
    <section class="no-overflow-x" aria-labelledby="titulo-formacion">
    <h2 id="titulo-formacion" class="visually-hidden">Formación y experiencia</h2>
    <div class="row div-diplomas">
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>
              Licenciatura en Psicología en la Universidad Veracruzana Campus
              Veracruz generación 2006-2010.
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>
              Maestría en Psicoterapia Ericksoniana en el Centro Ericksoniano de
              México Campus Veracruz generación 2011-2013.
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>Formación como instructora independiente ante la STPS.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row div-diplomas">
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>
              Catedrática en la Universidad Popular Autónoma de Veracruz carrera
              de Psicopedagogía.
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>He impartido cursos de introducción a la psicoterapia.</div>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@/assets/img/optimized/garantizado.webp" alt="" width="100" height="100" loading="lazy" decoding="async" />
          </div>
          <div class="text-container">
            <div>
              He laborado como psicóloga en Clínicas en mi consultorio
              particular, con terapias presenciales, telefónicas, por whatsapp y
              en línea.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- $Seccion de cursos y talleres -->
    <section class="talleres" aria-labelledby="titulo-talleres">
    <h2 id="titulo-talleres" class="visually-hidden">Cursos y talleres impartidos</h2>
    <div id="carouselExampleControlsDark" class="carousel-dark carousel slide col-md-9" :data-bs-ride="autoplay ? 'carousel' : null"
      aria-roledescription="carrusel" aria-label="Cursos y talleres impartidos">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">
                    Psicopedagogía en el desarrollo infantil I y II.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Trastornos psicológicos en el niño</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">
                    Trastorno de déficit de atención e hiperactividad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Programación neurolingüística</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Taller de Suicidio</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">
                    Instalación de banda gástrica mental con hipnosis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Terapia de juego</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Pruebas psicológicas.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Hipnosis efectiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">Proyección del dibujo</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 separacion">
              <div class="card-color card">
                <div class="card-body">
                  <p class="card-text">
                    Diversas Conferencias y Congresos Internacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="flecha-carousel-prev carousel-control-prev" type="button"
        data-bs-target="#carouselExampleControlsDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Talleres anteriores</span>
      </button>
      <button class="flecha-carousel-next flecha-carousel carousel-control-next" type="button"
        data-bs-target="#carouselExampleControlsDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Talleres siguientes</span>
      </button>
    </div>
  </section>

<!-- TODO:Colocar las 3 publicaciones mas recientes o carrousel de publicaciones recientes -->
    <!--$Sección de blog-->
    <!-- <div id="Blog" class="encabezado">
    <h4 class="purple">Blog</h4>
    <p class="parrafo">
      Descubre más en nuestro blog y conoce sobre lo que ofrecemos para ti
    </p>
  </div>
  <div class="info-card">
    <div class="noticias col-md-10 row row-cols-1 row-cols-md-3 g-3">
      <div data-aos="fade-up" data-aos-duration="1000" class="col">
        <div class="hover-card card h-100">
          <div class="image">
            <img src="@\assets\img\card4.png" class="card-img-top" alt="..." />
          </div>
          <div class="card-text card-body">
            <h5 class="purple card-title">Conocer como dormir mejor</h5>
            <p class="card-text">
              En este audio encontraras la tranquilidad que siempre has
              querido
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" class="col">
        <div class="hover-card card h-100">
          <div class="image">
            <img src="@\assets\img\card5.png" class="card-img-top" alt="..." />
          </div>
          <div class="card-text card-body">
            <h5 class="purple card-title">Conocer como dormir mejor</h5>
            <p class="card-text">
              En este audio encontraras la tranquilidad que siempre has
              querido
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" class="col">
        <div class="hover-card card h-100">
          <div class="image">
            <img src="@\assets\img\card6.png" class="card-img-top" alt="..." />
          </div>
          <div class="card-text card-body">
            <h5 class="purple card-title">Conocer como dormir mejor</h5>
            <p class="card-text">
              En este audio encontraras la tranquilidad que siempre has
              querido
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
    <!--$ Sección de contacto -->
    <div id="Contactanos" class="encabezado col-sm-12">
      <h2 class="h4 purple">Contacto</h2>
      <p class="parrafo">
        Si no estas seguro de que es lo que necesitas, no dudes en contactar
        con nosotros y te ayudamos.
      </p>
    </div>
    <div class="container">
  <div class="row form-contacto">
    <div class="col-md-6">
      <form id="formulario-contacto" class="formulario" novalidate @submit.prevent="enviarContacto">
        <div class="mb-3">
          <label for="name" class="form-label">Escribe tu nombre</label>
          <input id="name" v-model.trim="contacto.nombre" type="text" name="nombre" class="form-control" :class="{ 'is-invalid': errores.nombre }"
            placeholder="Tu nombre" autocomplete="name" maxlength="100" required
            :aria-invalid="errores.nombre ? 'true' : null" :aria-describedby="errores.nombre ? 'error-nombre' : null" />
          <div v-if="errores.nombre" id="error-nombre" class="invalid-feedback">{{ errores.nombre }}</div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" v-model.trim="contacto.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': errores.email }"
            placeholder="name@example.com" autocomplete="email" maxlength="254" required
            :aria-invalid="errores.email ? 'true' : null" :aria-describedby="errores.email ? 'error-email' : null" />
          <div v-if="errores.email" id="error-email" class="invalid-feedback">{{ errores.email }}</div>
        </div>
        <div class="mb-3">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea id="mensaje" v-model.trim="contacto.mensaje" name="mensaje" class="form-control" :class="{ 'is-invalid': errores.mensaje }"
            rows="3" maxlength="5000" required
            :aria-invalid="errores.mensaje ? 'true' : null" :aria-describedby="errores.mensaje ? 'error-mensaje' : null"></textarea>
          <div v-if="errores.mensaje" id="error-mensaje" class="invalid-feedback">{{ errores.mensaje }}</div>
        </div>
        <!-- Campo trampa para bots: oculto para las personas y para lectores de pantalla -->
        <div class="campo-trampa" aria-hidden="true">
          <label for="sitio_web">No llenes este campo</label>
          <input id="sitio_web" v-model="contacto.sitio_web" type="text" name="sitio_web" tabindex="-1" autocomplete="off" />
        </div>
        <button type="submit" class="button-48" id="enviarCorreo" :disabled="enviando">
          <span class="text">{{ enviando ? 'Enviando…' : 'Enviar' }}</span>
        </button>
        <div role="status" aria-live="polite">
          <p v-if="estadoEnvio" class="alert mt-3 mb-0" :class="estadoEnvio === 'ok' ? 'alert-success' : 'alert-danger'">
            {{ mensajeEnvio }}
          </p>
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <div class="container-fluid">
        <div class="card-info card fondo-form">
          <address class="card-body card-form mb-0">
            <p class="card-text">
              <a class="whatsapp" href="https://wa.link/7v3hhk" target="_blank" rel="noopener noreferrer">
                <img class="redes-form" src="@/assets/whatsapp.png" alt="WhatsApp:" width="25" height="25" loading="lazy" /> 2292092415
                <span class="visually-hidden">(se abre en una pestaña nueva)</span>
              </a>
            </p>
            <p>
              <a class="whatsapp" href="mailto:psic.ilucam@gmail.com">
                <img class="redes-form" src="@/assets/img/optimized/gmail.webp" alt="Correo electrónico:" width="25" height="25" loading="lazy" /> psic.ilucam@gmail.com
              </a>
            </p>
            <p>
              <img class="redes-form" src="@/assets/img/optimized/mapa.webp" alt="Dirección:" width="25" height="25" loading="lazy" /> Josefa Salum #605 entre Chofita de la
              Hoz y Gemma Odila Garzon. Fracc. Villa Rica. zona norte Veracruz, Veracruz de Ignacio de la Llave, México
            </p>
          </address>
          <iframe title="Ubicación de Iluminando Caminos en Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4287020274646!2d-96.1832006018717!3d19.22013942076288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3444e0d28e0d3%3A0x85ee22042fdd9dad!2sJosefa%20Salum%20605%2C%20Villa%20Rica%20I%2C%20Camino%20Real%2C%2091800%20Veracruz%2C%20Ver.!5e0!3m2!1ses!2smx!4v1678601157468!5m2!1ses!2smx"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>



</template>

<style scoped>
.campo-trampa {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.button-48:disabled {
  cursor: wait;
  opacity: 0.7;
}
</style>

<script>
export default {
  // Otras opciones y lógica del componente principal
  data() {
    return {
      // Los carruseles no avanzan solos si el usuario pidió reducir animaciones
      autoplay: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      contacto: { nombre: '', email: '', mensaje: '', sitio_web: '' },
      errores: {},
      enviando: false,
      estadoEnvio: null, // 'ok' | 'error' | null
      mensajeEnvio: '',
    };
  },
  methods: {
    validarContacto() {
      const errores = {};
      if (!this.contacto.nombre) {
        errores.nombre = 'Escribe tu nombre.';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contacto.email)) {
        errores.email = 'Escribe un correo electrónico válido.';
      }
      if (!this.contacto.mensaje) {
        errores.mensaje = 'Escribe tu mensaje.';
      }
      return errores;
    },
    async enviarContacto() {
      if (this.enviando) return;
      this.estadoEnvio = null;
      this.errores = this.validarContacto();
      if (Object.keys(this.errores).length) {
        this.enfocarPrimerError();
        return;
      }

      this.enviando = true;
      try {
        // El cliente HTTP se carga solo al enviar, para no sumarlo a la carga inicial de la portada
        const { default: apiClient } = await import(/* webpackChunkName: "api" */ '@/services/api');
        await apiClient.post('/contacto', this.contacto);
        this.estadoEnvio = 'ok';
        this.mensajeEnvio = '¡Gracias! Recibimos tu mensaje y te responderemos lo antes posible.';
        this.contacto = { nombre: '', email: '', mensaje: '', sitio_web: '' };
      } catch (error) {
        const datos = (error.response && error.response.data) || {};
        this.errores = datos.errors || {};
        this.estadoEnvio = 'error';
        this.mensajeEnvio = datos.message || 'No pudimos enviar tu mensaje. Revisa tu conexión e intenta de nuevo, o escríbenos por WhatsApp.';
        this.enfocarPrimerError();
      } finally {
        this.enviando = false;
      }
    },
    enfocarPrimerError() {
      const campos = { nombre: 'name', email: 'email', mensaje: 'mensaje' };
      const primero = Object.keys(campos).find((campo) => this.errores[campo]);
      if (primero) {
        this.$nextTick(() => document.getElementById(campos[primero]).focus());
      }
    },
  },
}
</script>
