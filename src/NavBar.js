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

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
              <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"> Onderwerp</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Natuur</a></li>
                      <li><a class="dropdown-item" href="#">Industrie</a></li>
                      <li><a class="dropdown-item" href="#">Mensen</a></li>
                      <li><a class="dropdown-item" href="#">Poppen</a></li>
                      <li><a class="dropdown-item" href="#">Abstract</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Lokatie</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Stad</a></li>
                      <li><a class="dropdown-item" href="#">Amsterdam</a></li>
                      <li><a class="dropdown-item" href="#">Platteland</a></li>
                      <li><a class="dropdown-item" href="#">Buitenland</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Stijl</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Geënsceneerd</a></li>
                      <li><a class="dropdown-item" href="#">Tafelfotografie</a></li>
                      <li><a class="dropdown-item" href="#">Conceptueel</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Structuren</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Water</a></li>
                      <li><a class="dropdown-item" href="#">Planten</a></li>
                      <li><a class="dropdown-item" href="#">Muren</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Kleur</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Blauw</a></li>
                      <li><a class="dropdown-item" href="#">Geel</a></li>
                      <li><a class="dropdown-item" href="#">Groen</a></li>
                      <li><a class="dropdown-item" href="#">Rood</a></li>
                      <li><a class="dropdown-item" href="#">Grijs</a></li>
                      <li><a class="dropdown-item" href="#">Kleurrijk</a></li>
                      <li><a class="dropdown-item" href="#">Mono</a></li>
                      <li><a class="dropdown-item" href="#">Zwart/Wit</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Specials</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Camera & Kwast</a></li>
                      <li><a class="dropdown-item" href="#">Boxbeeld</a></li>
                    </ul>
                  </li>
                  <div class="dropdown-divider"></div>
                  <li><a class="dropdown-item" href="#">Onze Apps</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Mijn Favorieten</a></li>
                      <li><a class="dropdown-item" href="#">Preview</a></li>
                      <li><a class="dropdown-item" href="#">Lijstenmaker</a></li>
                    </ul>
                  </li>
              </ul>
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
