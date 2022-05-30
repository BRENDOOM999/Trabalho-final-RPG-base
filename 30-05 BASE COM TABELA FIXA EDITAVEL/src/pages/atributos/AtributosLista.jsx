import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AtributosService from '../../services/rpg/AtributosService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const AtributosLista = () => {

  const [atributos, setatributos] = useState([])

  useEffect(() => {

    setatributos(AtributosService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        AtributosService.delete(id)
        setatributos(AtributosService.getAll())
    }
  }

console.log(atributos);

  return (
    <div>
      <h1>Atributos</h1>

      <Link className='btn btn-info mb-3' to={'/atributos/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Força</th>
            <th>Destreza</th>
            <th>Costituição</th>
            <th>Inteligência</th>
            <th>Sabedoria</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {atributos.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.forca}</td>
              <td>{item.destreza}</td>
              <td>{item.constituicaoa}</td>
              <td>{item.inteligencia}</td>
              <td>{item.sabedoria}</td>
              <td>
                <Link to={'/atributos/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default AtributosLista