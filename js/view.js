window.writeMenu = () => {
  document.getElementById('body').className = 'bodyMenu';
  const menuHTML =
    `<nav class="navbar navbar-expand-lg .navbar-brand navbarStyle">
    <div class="divNavbar">
  
      <button class="navbar-toggler navBtn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
      </button>
      <span class="navbar-text navText">
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
      <button type="button" onclick="writeResidue()" id="btnResidue" class="btn btn-light btn-lg btn-block btn-menu">VER SALDO</button>
      <button type="button" onclick="" id="btnRate" class="btn btn-light btn-lg btn-block btn-menu">CALCULAR TARIFA</button>
      <button type="button" onclick="" id="btnProfile" class="btn btn-light btn-lg btn-block btn-menu">PERFIL</button>
      <button type="button" onclick="" id="btnFAQ" class="btn btn-light btn-lg btn-block btn-menu">PREGUNTAS FRECUENTES</button>
    </div>`
  let divMenuBtns = document.getElementById('container');
  divMenuBtns.innerHTML = menuBtnsHTML;
}

const writeResidue = () => {
  let divContainer = document.getElementById('container');
  divContainer.innerHTML = `<div class="container">
  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <select class="custom-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button type="button" onclick="" id="btnSaldo" class="btn btn-light btn-lg btn-block btn-menu">VER SALDO</button>
    </div>
  </div>
</div>`
}