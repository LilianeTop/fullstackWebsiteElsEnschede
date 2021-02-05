import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
// FIXME: font and font color do not adjust why? color-#d9e76b
      <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-color=#354440;py-lg-0">
        <a class="navbar-brand" href="/">
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
              <a class="nav-link" href="/portfolio">
              <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/portfolio" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
               </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/onderwerp"> Onderwerp</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/natuur">Natuur</a></li>
                      <li><a class="dropdown-item" href="/industrie">Industrie</a></li>
                      <li><a class="dropdown-item" href="/mensen">Mensen</a></li>
                      <li><a class="dropdown-item" href="/poppen">Poppen</a></li>
                      <li><a class="dropdown-item" href="/abstract">Abstract</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/lokatie">Lokatie</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/stad">Stad</a></li>
                      <li><a class="dropdown-item" href="/amsterdam">Amsterdam</a></li>
                      <li><a class="dropdown-item" href="/platteland">Platteland</a></li>
                      <li><a class="dropdown-item" href="/buitenland">Buitenland</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/stijl">Stijl</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/geensceneerd">Geënsceneerd</a></li>
                      <li><a class="dropdown-item" href="/tafelfotografie">Tafelfotografie</a></li>
                      <li><a class="dropdown-item" href="/conceptueel">Conceptueel</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/structuren">Structuren</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/water">Water</a></li>
                      <li><a class="dropdown-item" href="/planten">Planten</a></li>
                      <li><a class="dropdown-item" href="/muren">Muren</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/kleur">Kleur</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/blauw">Blauw</a></li>
                      <li><a class="dropdown-item" href="/geel">Geel</a></li>
                      <li><a class="dropdown-item" href="/groen">Groen</a></li>
                      <li><a class="dropdown-item" href="/rood">Rood</a></li>
                      <li><a class="dropdown-item" href="/grijs">Grijs</a></li>
                      <li><a class="dropdown-item" href="/kleurrijk">Kleurrijk</a></li>
                      <li><a class="dropdown-item" href="/mono">Mono</a></li>
                      <li><a class="dropdown-item" href="zwartwit">Zwart/Wit</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/specials">Specials</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/camerakwast">Camera & Kwast</a></li>
                      <li><a class="dropdown-item" href="/boxbeeld">Boxbeeld</a></li>
                    </ul>
                  </li>
                  <div class="dropdown-divider"></div>
                  <li><a class="dropdown-item" href="/onzeapps">Onze Apps</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/mijnfavorieten">Mijn Favorieten</a></li>
                      <li><a class="dropdown-item" href="/preview">Preview</a></li>
                      <li><a class="dropdown-item" href="/lijstenmaker">Lijstenmaker</a></li>
                    </ul>
                  </li>
              </ul>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/laatste">Laatse</a>
                  <a class="dropdown-item" href="datum1">Datum1</a>
                  <a class="dropdown-item" href="datum2">Datum2</a>
                  <a class="dropdown-item" href="onderwerp1">Onderwerp1</a>
                  <a class="dropdown-item" href="onderwerp2">Onderwerp2</a>
                </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/overEls" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Over Els
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/standpunt">Fotografie Standpunt</a>
              <a class="dropdown-item" href="/expositie">Expositie & Beurzen</a>
              <a class="dropdown-item" href="/verkoop">Verkoop & Verhuur</a>
              <a class="dropdown-item" href="/contact">Contact</a>
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
