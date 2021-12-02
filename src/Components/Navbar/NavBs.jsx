import React from "react";
import CartWidget  from "./CartWidget";



const NavBS = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Keki
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"> 
                  Tienda</a>
                  <ul className="dropdown-menu" ria-labelledby="navbarDropdownMenuLink">
                    <li>
                    <a className="dropdown-item" href="/#">
                      Seccion 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Seccion 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Seccion 3
                    </a>
                  </li>
                  </ul>
            </li>
            <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBS;