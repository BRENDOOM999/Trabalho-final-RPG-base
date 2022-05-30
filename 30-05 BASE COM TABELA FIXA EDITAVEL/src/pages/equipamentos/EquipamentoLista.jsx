import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EquipamentoService from '../../services/rpg/EquipamentoService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const EquipamentoLista = () => {

  const [equipamento, setequipamento] = useState([])

  useEffect(() => {

    setequipamento(EquipamentoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        EquipamentoService.delete(id)
        setequipamento(EquipamentoService.getAll())
    }
  }

console.log(equipamento);

  return (
    <div>
      <h1>Equipamento</h1>

      <Link className='btn btn-info mb-3' to={'/equipamento/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>todos os itens</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {equipamento.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.item}</td>
              <td>
                <Link to={'/equipamento/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default EquipamentoLista