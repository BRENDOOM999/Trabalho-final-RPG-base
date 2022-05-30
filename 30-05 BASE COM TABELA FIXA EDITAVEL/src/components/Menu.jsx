import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="danger" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">D&D</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/nomeReC">Raça e Classe</Link>
            <Link className="nav-link" to="/atributos">Atributos</Link>
            <Link className="nav-link" to="/proficienciaseidiomas">Proficiencias e Idiomas</Link>
            <Link className="nav-link" to="/equipamento">Equipamento</Link>
            <Link className="nav-link" to="/caracteristicas">Caracteristicas</Link>
            <Link className="nav-link" to="/historia">Historia</Link>
            <Link className="nav-link" to="/fichasfinais">Fichas Finais</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu