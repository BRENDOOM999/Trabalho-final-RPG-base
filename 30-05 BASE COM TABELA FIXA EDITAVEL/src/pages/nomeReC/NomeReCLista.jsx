import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NomeReCService from '../../services/rpg/NomeReCService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const NomeReCLista = () => {

  const [nomeReC, setnomeReC] = useState([])

  useEffect(() => {

    setnomeReC(NomeReCService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        NomeReCService.delete(id)
      setnomeReC(NomeReCService.getAll())
    }
  }

console.log(nomeReC);

  return (
    <div>
      <h1>Raças e Classes</h1>

      <Link className='btn btn-info mb-3' to={'/nomeReC/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Raça</th>
            <th>Classe</th>
            <th>Nivel</th>
            <th>Alinhamento</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {nomeReC.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.nome}</td>
              <td>{item.raça}</td>
              <td>{item.classe}</td>
              <td>{item.nivel}</td>
              <td>{item.alinhamento}</td>
              <td>
                <Link to={'/nomeReC/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default NomeReCLista