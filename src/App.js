import logo from './logo.svg';
import './componentes/nuevoscomponentes/menu.css';


function App() {
  return (  
    <div className="App">
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Libreria</title>
      <link rel="stylesheet" href="\Componentes\nuevosComponentes\menu.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
      
      <header className="App-header">
        <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Librerias</a></li>
        <li><a href="#">Acerca</a></li>
        <li><div class="box">
            <input type="text" name="Buscar" placeholder="Que quieres leer?" class="src" outocomplete="off"></input>
        </div></li>
        <li class="item-r"><a href="#">Registrarse</a></li>
        <li class="item-r"><a href="#">Iniciar sesión</a></li>
        </ul>
      </header>

      <body>
          <div class="slide">
            <div class="slide-inner">
              <input class="slide-open" type="radio" id="slide-1" name="slide" aria-hidden="true" hidden="" checked="checked"></input>
                <div class="slide-item">
                    <img class="img02" src="/Componentes/nuevosComponentes/img/descarga (1).png"></img>
                </div>
                <input class="slide-open" type="radio" id="slide-2" name="slide" aria-hidden="true" hidden=""></input>
                <div class="slide-item">
                    <img class="img02" src="img/descarga.png"></img>
                </div>
                <input class="slide-open" type="radio" id="slide-3" name="slide" aria-hidden="true" hidden=""></input>
                <div class="slide-item">
                    <img class="img02" src="img/descarga (2).png"></img>
                </div>
                <label for="slide-3" class="slide-control prev control-1">‹</label>
                <label for="slide-2" class="slide-control next control-1">›</label>
                <label for="slide-1" class="slide-control prev control-2">‹</label>
                <label for="slide-3" class="slide-control next control-2">›</label>
                <label for="slide-2" class="slide-control prev control-3">‹</label>
                <label for="slide-1" class="slide-control next control-3">›</label>
                <ol class="slide-indicador">
                    <li>
                        <label for="slide-1" class="slide-circulo">•</label>
                    </li>
                    <li>
                        <label for="slide-2" class="slide-circulo">•</label>
                    </li>
                    <li>
                        <label for="slide-3" class="slide-circulo">•</label>
                    </li>
                </ol>  
            </div>
          </div>

          <div class="info">
            <section class="card">
                <div class="card_img"></div>
                    <main class="card_cont">
                        <h1 class="card_cont_title">SATANAS</h1>
                            <p class="card_cont_descr">Una novela sobre la oscura presencia de lo maligno en la vida cotidiana.
                                Una mujer hermosa e ingenua que roba con destreza a altos ejecutivos, un pintor habitado por 
                                fuerzas misteriosas, y un sacerdote que se enfrenta a un caso de posesión demoníaca en 
                                La Candelaria</p>
                            <div class="card_cont_aut">
                                <img class="card_cont_aut_img"src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png" alt="autor"></img>
                                <div>
                                    <p class="card_content_profile_nom">Mario Mendoza</p>
                                    <p class="card_content_profile_date">Enero 2002</p>
                                </div>
                            </div>
                    </main>
            </section>        
            <section class="card">
                <div class="card_img0"></div>
                    <main class="card_cont">
                        <h1 class="card_cont_title">CIEN AÑOS DE SOLEDAD</h1>
                            <p class="card_cont_descr">Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, 
                                ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura 
                                hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.</p>
                            <div class="card_cont_aut">
                                <img class="card_cont_aut_img"src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png" alt="autor"></img>
                                <div>
                                    <p class="card_content_profile_nom">Gabriel García Marquez</p>
                                    <p class="card_content_profile_date">Junio 1967</p>
                                </div>
                            </div>
                    </main>
            </section>
        </div>
        <div class="info">
            <section class="card">
                <div class="card_img1"></div>
                    <main class="card_cont">
                        <h1 class="card_cont_title">LA VORAGINE</h1>
                            <p class="card_cont_descr">es una obra representativa de la literatura colombiana porque en sus páginas se denuncia 
                                la explotación de los caucheros y, al mismo tiempo, se describe en pincelazos afortunados esa selva inhóspita 
                                por donde su protagonista camina rumbo a ese infierno verde que lo atrapa en sus redes.</p>
                            <div class="card_cont_aut">
                                <img class="card_cont_aut_img"src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png" alt="autor"></img>
                                <div>
                                    <p class="card_content_profile_nom">José Eustasio Rivera </p>
                                    <p class="card_content_profile_date">Abril 1924</p>
                                </div>
                            </div>
                    </main>
            </section>  
        
            <section class="card">
                <div class="card_img2"></div>
                    <main class="card_cont">
                        <h1 class="card_cont_title">DELIRIO</h1>
                            <p class="card_cont_descr">Un hombre regresa a casa después de un corto viaje de negocios y encuentra que su esposa 
                                ha enloquecido completamente. No tiene idea de que le pudo haber ocurrido durante los tres días de su ausencia, 
                                y con el fin de ayudarla a salir de la crisis empieza a investigar, sólo para descubrir lo poco que sabe de las 
                                profundas perturbaciones escondidas en el pasado de la mujer que ama.</p>
                            <div class="card_cont_aut">
                                <img class="card_cont_aut_img"src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png" alt="autor"></img>
                                <div>
                                    <p class="card_content_profile_nom">Laura Restrepo</p>
                                    <p class="card_content_profile_date">Abril 2004</p>
                                </div>
                            </div>
                    </main>
            </section>
          </div>

          <h2 class="h2">Seleccione las imagenes para intercalarlas</h2>

            <div class="cont">
                <img id="uno" class="img01" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtIgatTNa8_xY8C3aeGu2Bh2TpHHMhr2Z2GMMMFfRQCoWNb7W1"></img>
                <img id="dos" class="img01" src="https://images.cdn1.buscalibre.com/fit-in/360x360/6e/8c/6e8c464ed8ff22c7b8ee34d19f76aa6c.jpg" ></img>
                <img id="tres" class="img01" src="https://images.cdn1.buscalibre.com/fit-in/360x360/bf/38/bf388c018a02453b752bc1cacd57a067.jpg" ></img>
                <img id="cuatro" class="img01" src="https://images.cdn3.buscalibre.com/fit-in/360x360/60/f1/60f1f81bd7586d65451c4551311c4979.jpg" ></img>
            </div>    

            <footer class="footer">

                <div class="container">

                    <div class="footer-row">

                        <div class="footer-links">
                            <h4>Compañia</h4>
                            <ul>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Servicios</a></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><a href="#">Preguntas</a></li>
                                <li><a href="#">Envios</a></li>
                                <li><a href="#">Pago</a></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <h4>Siguenos</h4>
                            <div class="social-link">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
      </body>
    </div>
  );
}

export default App;


