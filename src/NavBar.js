import "./NavBar.css";

const NavBar = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-color=#354440 fixed-top py-lg-0">
        <a class="navbar-brand" href="#">
          <img src="img/logoInverse.png"  width="50" heigth="50" alt="logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Onderwerp</a>
                    <ul class="submenu dropdown-menu">
              		    <li><a class="dropdown-item" href="#">Natuur</a></li>
              		    <li><a class="dropdown-item" href="#">Mensen</a></li>
              		    <li><a class="dropdown-item" href="#">Industrie</a></li>
                    </ul>
                <a class="dropdown-item" href="#">Lokatie</a>
                <a class="dropdown-item" href="#">Stijl</a>
                <a class="dropdown-item" href="#">Structuren</a>
                <a class="dropdown-item" href="#">Kleur</a>
                <a class="dropdown-item" href="#">Specials</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Onze Apps</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Laatse</a>
                <a class="dropdown-item" href="#">Datum1</a>
                <a class="dropdown-item" href="#">Datum2</a>
                <a class="dropdown-item" href="#">Onderwerp1</a>
                <a class="dropdown-item" href="#">Onderwerp2</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Over Els
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Fotografie Standpunt</a>
              <a class="dropdown-item" href="#">Expositie & Beurzen</a>
              <a class="dropdown-item" href="#">Verkoop & Verhuur</a>
              <a class="dropdown-item" href="#">Contact</a>
            </div>
            </li>
          </ul>

        <form class="form-inline my-2 my-lg-2">
          <div class="form-group input-group-append">
            <input class="form-control my-lg-2 mr-sm-2" type="search" placeholder="Zoek op onderwerp" aria-label="Search" />
            <button class="btn btn-outline-light my-2 my-sm-0"  type="submit">Zoek</button>
          </div>
        </form>
        </div>
</nav>
);
}

export default NavBar;
