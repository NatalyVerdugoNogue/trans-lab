window.writeMenu = () => {
  document.getElementById('body').className = 'bodyMenu';
  const menuHTML =
    `<nav class="navbar navbar-expand-lg .navbar-brand navbarStyle">
    <div class="divNavbar">
  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
      </button>
      <span class="navbar-text">
        TRANS-LAB
      </span>
      </div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <li class="nav-item active">
            <a class="nav-link" href="#">Ver saldo <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Calcular Tarifa <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Perfil <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Preguntas frecuentes <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
      </div>
   </nav>`
  let divMenu = document.getElementById('navbarMenu');
  divMenu.innerHTML = menuHTML;

  const menuBtnsHTML =
    `<div class="divMenu">
      <button type="button" id="btnResidue" class="btn btn-light btn-lg btn-block btn-menu">VER SALDO</button>
      <button type="button" id="btnRate" class="btn btn-light btn-lg btn-block btn-menu">CALCULAR TARIFA</button>
      <button type="button" id="btnProfile" class="btn btn-light btn-lg btn-block btn-menu">PERFIL</button>
      <button type="button" id="btnFAQ" class="btn btn-light btn-lg btn-block btn-menu">PREGUNTAS FRECUENTES</button>
    </div>`
  let divMenuBtns = document.getElementById('container');
  divMenuBtns.innerHTML = menuBtnsHTML;
}

