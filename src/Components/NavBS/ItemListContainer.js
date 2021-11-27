import React from 'react'

export const ItemListContainer = () => {
    return (
        <div>
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
        </div>
    )
}
