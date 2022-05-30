import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CaracteristicasService from '../../services/rpg/CaracteristicasService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const CaracteristicasLista = () => {

  const [caracteristicas, setcaracteristicas] = useState([])

  useEffect(() => {

    setcaracteristicas(CaracteristicasService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        CaracteristicasService.delete(id)
        setcaracteristicas(CaracteristicasService.getAll())
    }
  }

console.log(caracteristicas);

  return (
    <div>
      <h1>Caracteristicas</h1>

      <Link className='btn btn-info mb-3' to={'/caracteristicas/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Traços do Personagem</th>
            <th>Ideais</th>
            <th>Vinculos</th>
            <th>Fraquezas</th>
            <th>Talentos</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {caracteristicas.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.traçospersonagem}</td>
              <td>{item.ideais}</td>
              <td>{item.vinculos}</td>
              <td>{item.fraquezas}</td>
              <td>{item.talentos}</td>
              <td>
                <Link to={'/caracteristicas/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default CaracteristicasLista