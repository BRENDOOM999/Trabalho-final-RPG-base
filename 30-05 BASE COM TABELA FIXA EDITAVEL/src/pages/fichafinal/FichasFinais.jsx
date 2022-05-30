import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FichaFinalService from '../../services/rpg/FichaFinalService'
import NomeReCService from '../../services/rpg/NomeReCService';
import AtributosService from '../../services/rpg/AtributosService';
import ProficienciaseIdiomasService from '../../services/rpg/ProficienciaseIdiomasService';
import EquipamentoService from '../../services/rpg/EquipamentoService';
import CaracteristicasService from '../../services/rpg/CaracteristicasService';
import HistoriaService from '../../services/rpg/HistoriaService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const FichasFinais = () => {

  const [fichafinal, setFichaFinal] = useState([])
  const [nomeReC, setnomeReC] = useState([])
  const [atributos, setatributos] = useState([])
  const [proficienciaseidiomas, setproficienciaseidiomas] = useState([])
  const [equipamento, setequipamento] = useState([])
  const [caracteristicas, setcaracteristicas] = useState([])
  const [historia, sethistoria] = useState([])

  useEffect(() => {

    setFichaFinal(FichaFinalService.getAll())
    setnomeReC(NomeReCService.getAll())
    setatributos(AtributosService.getAll())
    setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())
    setequipamento(EquipamentoService.getAll())
    setcaracteristicas(CaracteristicasService.getAll())
    sethistoria(HistoriaService.getAll())

  }, [])



  function apagar1(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        NomeReCService.delete(id)
      setnomeReC(NomeReCService.getAll())
    }
  }

  function apagar2(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        AtributosService.delete(id)
        setatributos(AtributosService.getAll())
    }
  }

  function apagar3(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        ProficienciaseIdiomasService.delete(id)
        setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())
    }
  }

  function apagar4(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        EquipamentoService.delete(id)
        setequipamento(EquipamentoService.getAll())
    }
  }

  function apagar5(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        CaracteristicasService.delete(id)
        setcaracteristicas(CaracteristicasService.getAll())
    }
  }

  function apagar6(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        HistoriaService.delete(id)
        sethistoria(HistoriaService.getAll())
    }
  }

  

console.log(fichafinal);

  return (
    <div>
      <h1><p class='text-center'>Fichas Finais</p></h1>



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
                <BsTrash onClick={() => apagar1(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1><p class='text-center'>Atributos</p></h1>

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
                <BsTrash onClick={() => apagar2(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1><p class='text-center'>Proficiencias e Idiomas</p></h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Idiomas</th>
            <th>Kits</th>
            <th>Instrumentos Musicais</th>
            <th>Armaduras</th>
            <th>Armas</th>
            <th>Editar | Lixeira</th>
          </tr>
        </thead>
        <tbody>
          {proficienciaseidiomas.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.idiomas}</td>
              <td>{item.kits}</td>
              <td>{item.instrumentosmusicais}</td>
              <td>{item.armaduras}</td>
              <td>{item.armas}</td>
              <td>
                <Link to={'/proficienciaseidiomas/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar3(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1><p class='text-center'>Equipamento</p></h1>

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
                <BsTrash onClick={() => apagar4(i)} className='text-danger'/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1><p class='text-center'>Caracteristicas</p></h1>


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
                <BsTrash onClick={() => apagar5(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h1><p class='text-center'>Historia</p></h1>

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
                <BsTrash onClick={() => apagar6(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default FichasFinais