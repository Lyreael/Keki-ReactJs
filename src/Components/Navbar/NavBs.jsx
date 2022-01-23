import CartWidget  from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./style.scss"
import {useEffect, useState } from "react";
import { getCategories } from "../../products"; //llamo la promesa de categorias
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";

const NavBS = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => { 
    getCategories().then(res => setCategories(res)) // ejecuto la funcion getCategories y recibo las categorias
  }, [categories]) 

  return (
  <Navbar className='text-uppercase'  expand="lg" sticky='top'>
  <Container>
    <Navbar.Brand className='logo' href="/home" >KEKI<span className="legend">STORE</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0 navbarScroll "  navbarScroll >
        
        <NavLink to='/home'>Inicio</NavLink>
        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                { categories.map((category) => <NavLink key={category.id} to={"/category/"+category.id}>{category.description}
                <NavDropdown.Divider /> </NavLink>   ) }
        </NavDropdown>
        <CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBS;