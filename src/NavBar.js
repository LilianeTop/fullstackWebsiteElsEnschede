import "./NavBar.css";


const NavBar = () => {
  return (
// FIXME: font and font color do not adjust why? color-#d9e76b
      //FIXME: hamburger doesn't show submenu
      <nav className="navbar collapseOnSelect navbar-dark navbar-expand-lg fixed-top py-lg-0">
        <a className="navbar-brand" href="/">
          <img src="img/logoInverse.png"  width="50" heigth="50" alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
        </div>

        <div className="collapse navbar-collapse" id="navbarResponsive">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio">
              <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/portfolio" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
               </a>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/onderwerp"> Onderwerp</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/natuur">Natuur</a></li>
                      <li><a className="dropdown-item" href="/industrie">Industrie</a></li>
                      <li><a className="dropdown-item" href="/mensen">Mensen</a></li>
                      <li><a className="dropdown-item" href="/poppen">Poppen</a></li>
                      <li><a className="dropdown-item" href="/abstract">Abstract</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/lokatie">Lokatie</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/stad">Stad</a></li>
                      <li><a className="dropdown-item" href="/amsterdam">Amsterdam</a></li>
                      <li><a className="dropdown-item" href="/platteland">Platteland</a></li>
                      <li><a className="dropdown-item" href="/buitenland">Buitenland</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/stijl">Stijl</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/geensceneerd">Geënsceneerd</a></li>
                      <li><a className="dropdown-item" href="/tafelfotografie">Tafelfotografie</a></li>
                      <li><a className="dropdown-item" href="/conceptueel">Conceptueel</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/structuren">Structuren</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/water">Water</a></li>
                      <li><a className="dropdown-item" href="/planten">Planten</a></li>
                      <li><a className="dropdown-item" href="/muren">Muren</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/kleur">Kleur</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/blauw">Blauw</a></li>
                      <li><a className="dropdown-item" href="/geel">Geel</a></li>
                      <li><a className="dropdown-item" href="/groen">Groen</a></li>
                      <li><a className="dropdown-item" href="/rood">Rood</a></li>
                      <li><a className="dropdown-item" href="/grijs">Grijs</a></li>
                      <li><a className="dropdown-item" href="/kleurrijk">Kleurrijk</a></li>
                      <li><a className="dropdown-item" href="/mono">Mono</a></li>
                      <li><a className="dropdown-item" href="/zwartwit">Zwart/Wit</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/specials">Specials</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/camerakwast">Camera & Kwast</a></li>
                      <li><a className="dropdown-item" href="/boxbeeld">Boxbeeld</a></li>
                    </ul>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li><a className="dropdown-item" href="/onzeapps">Onze Apps</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="/mijnfavorieten">Mijn Favorieten</a></li>
                      <li><a className="dropdown-item" href="/preview">Preview</a></li>
                      <li><a className="dropdown-item" href="/lijstenmaker">Lijstenmaker</a></li>
                    </ul>
                  </li>
              </ul>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/blog"><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/laatste">Laatse</a>
                  <a className="dropdown-item" href="/datum1">Datum1</a>
                  <a className="dropdown-item" href="/datum2">Datum2</a>
                  <a className="dropdown-item" href="/onderwerp1">Onderwerp1</a>
                  <a className="dropdown-item" href="/onderwerp2">Onderwerp2</a>
                </div>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/overEls"><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/overEls" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Over Els
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/standpunt">Fotografie Standpunt</a>
              <a className="dropdown-item" href="/expositie">Expositie & Beurzen</a>
              <a className="dropdown-item" href="/verkoop">Verkoop & Verhuur</a>
              <a className="dropdown-item" href="/contact">Contact</a>
            </div>
            </li>
          </ul>

            <form className="form-inline my-2 my-lg-2">
              <div className="form-group input-group-append">
                <input className="form-control my-lg-2 mr-sm-2" type="search" placeholder="Zoek op onderwerp" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0"  type="submit">Zoek</button>
              </div>
            </form>
    </div>
</nav>
);
}

export default NavBar;
