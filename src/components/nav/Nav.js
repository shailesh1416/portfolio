import { Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.png'
import './Nav.css'
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img className="brand-logo" src={logo} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/blogs" class="nav-link" >Blogs</Link>
              </li>
              <li class="nav-item">
                <Link to="/poems" class="nav-link" >Poems</Link>
              </li>
              <li class="nav-item">
                <Link to="/photos" class="nav-link" >Photos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav
