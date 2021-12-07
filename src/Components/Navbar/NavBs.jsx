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
              {/* <Link to={"/"} className='btn'>List</Link>
              <Link to={"/detail"} className='btn'>Detail</Link>
              <Link to={"/count"} className='btn'>Count</Link> */}
            <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBS;