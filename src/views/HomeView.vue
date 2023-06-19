<template>
  <div>
  <!-- <header class="container-fluid">Psicología integral</header> -->
  <!--$ navbar para pegar el navbar arriba aplicar fixed-top-->
  <!--$ Carrousel -->
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="8000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img srcset="@\assets\img\slider.png 1920w, @\assets\img\slider_cel.png 640w" class="d-block w-100" src="img/cielito.jpg">
        <!-- <img src="img/pexels-cottonbro-studio-4100672.jpg" class="d-block w-100" data-bs-interval="10000" alt="..." /> -->
      </div>
      <div class="carousel-item">
        <img srcset="@\assets\img\slider1.png 1920w, @\assets\img\slider_cel1.png 640w" class="d-block w-100" src="img/cielito.jpg">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
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
            <p class="purple card-text">Psicologa y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicoloía Integral”</span>
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

  <div class="Nosotros info col-md-12 col-lg-12">
    <div data-aos="fade-right" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="image-izquierda col-md-4 col-lg-4">
          <img src="@\assets\img\card1.png" class="img-fluid float-start" alt="doctora" />
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="card-body">
            <h5 class="purple card-title">Rosa Laura Torres Díaz</h5>
            <p class="purple card-text">Psicologa y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicoloía Integral”</span>
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
  <div class="info col-md-12 col.lg-12">
    <div class="card bio mb-3" data-aos="fade-left" style="max-width: 80%">
      <div class="row g-0">
        <div class="col-md-6 col-lg-6">
          <div class="card-body">
            <h5 class="purple card-title">Rosa Laura Torres Díaz</h5>
            <p class="purple card-text">Psicologa y psicoterapeuta</p>
            <p class="card-text">
              Soy la creadora de
              <span class="purple">“Iluminando Caminos Psicoloía Integral”</span>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cDsbV0ObwwA" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <!--$Sección de nosotros -->
  <div id="Nosotros" class="encabezado">
    <h4 class="purple">Nosotros</h4>
    <p class="parrafo">Como pasamos de una idea a un clínica</p>
  </div>
  <div class="Nosotros info col-md-12 col-lg-12">
    <div data-aos="fade-right" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="col-md-8 col-lg-8">
          <div class="card-body">
            <h5 class="purple card-title">
              ¿Cómo surgió iluminando caminos?
            </h5>
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
        <div class="image-derecha col-md-4 col-lg-4">
          <img src="@\assets\img\card2.png" class="img-fluid float-start" alt="doctora" />
        </div>
      </div>
    </div>
  </div>
  <div class="Nosotros info col-md-12 col-lg-12">
    <div data-aos="fade-left" class="card bio mb-3" style="max-width: 80%">
      <div class="card-nosotros row g-0">
        <div class="image-izquierda col-md-4 col-lg-4">
          <img src="@\assets\img\card3.png" class="img-fluid float-start" alt="doctora" />
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="card-body">
            <h5 class="purple card-title">
              ¿Cómo surgió iluminando caminos?
            </h5>
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
  <div class="container">
    <div class="row div-diplomas">
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@\assets\img\garantizado.png" />
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
            <img src="@\assets\img\garantizado.png" />
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
            <img src="@\assets\img\garantizado.png" />
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
            <img src="@\assets\img\garantizado.png" />
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
            <img src="@\assets\img\garantizado.png" />
          </div>
          <div class="text-container">
            <div>He impartido cursos de introducción a la psicoterapia.</div>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" class="col">
        <div class="a-box">
          <div class="img-container">
            <img src="@\assets\img\garantizado.png" />
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
  </div>
  <!-- $Seccion de cursos y talleres -->
  <div class="talleres">
    <div id="carouselExampleControlsDark" class="carousel-dark carousel slide col-md-9" data-bs-ride="carousel">
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
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="flecha-carousel-next flecha-carousel carousel-control-next" type="button"
        data-bs-target="#carouselExampleControlsDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
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
  <div id="Contactanos" class="encabezado">
    <h4 class="purple">Contacto</h4>
    <p class="parrafo">
      Si no estas seguro de que es lo que necesitas, no dudes en contactar
      con nosotros y te ayudamos.
    </p>
  </div>
  <div class="form-contacto col-md-12">
    <div class="row col-md-8">
      <div class="col-md-6">
        <form id="formulario-contacto" class="formulario">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Escribe tu nombre</label>
            <input id="name" type="text" name="nombre" class="form-control"
              placeholder="Tu nombre" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input id="email" type="email" name="email" class="form-control"
              placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
            <textarea id="mensaje" type="text" name="mensaje" class="form-control"
              rows="3"></textarea>
          </div>
          <button type="submit" class="button-48" role="button" id="enviarCorreo">
            <span class="text">Enviar</span>
          </button>
        </form>
      </div>
<div class="col-md-6">
  <div class="card-info card fondo-form">
    <div class="card-body card-form">
      <p class="card-text">
        <a class="whatsapp" href="https://wa.link/7v3hhk" target="_blank">
          <img class="redes-form" src="@\assets\whatsapp.png" alt="whatsapp" /> 2292092415
        </a>
      </p>
      <p>
        <img class="redes-form" src="@\assets\gmail.png" alt="email" /> psic.ilucam@gmail.com
      </p>
      <p>
        <img class="redes-form" src="@\assets\mapa.png" alt="ubicacion" /> Josefa Salum #605 entre Chofita de la Hoz y
        Gemma Odila Garzon. Fracc. Villa Rica. zona norte Veracruz, Veracruz de Ignacio de la Llave, México
      </p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4287020274646!2d-96.1832006018717!3d19.22013942076288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3444e0d28e0d3%3A0x85ee22042fdd9dad!2sJosefa%20Salum%20605%2C%20Villa%20Rica%20I%2C%20Camino%20Real%2C%2091800%20Veracruz%2C%20Ver.!5e0!3m2!1ses!2smx!4v1678601157468!5m2!1ses!2smx"
      style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>
</div>
</div>
  </div>
</template>

<script>
export default {
  // Otras opciones y lógica del componente principal
}
</script>
