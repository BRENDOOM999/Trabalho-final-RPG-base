import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HistoriaService from '../../services/rpg/HistoriaService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const HistoriaLista = () => {

  const [historia, sethistoria] = useState([])

  useEffect(() => {

    sethistoria(HistoriaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        HistoriaService.delete(id)
        sethistoria(HistoriaService.getAll())
    }
  }

console.log(historia);

  return (
    <div>
      <h1>Historias</h1>

      <Link className='btn btn-info mb-3' to={'/historia/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Historia do personaguem</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {historia.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.historia}</td>
              <td>
                <Link to={'/historia/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default HistoriaLista