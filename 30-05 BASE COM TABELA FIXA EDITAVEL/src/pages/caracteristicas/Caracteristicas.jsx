import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import CaracteristicasService from '../../services/rpg/CaracteristicasService';
import caracteristicasValidator from '../../validators/caracteristicasValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Caracteristicas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const caracteristicas = CaracteristicasService.get(params.id)

      for (let campo in caracteristicas) {
        setValue(campo, caracteristicas[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
        CaracteristicasService.update(params.id, dados)
    } else {
        CaracteristicasService.create(dados)
    }

    navigate('/caracteristicas')
  }

  return (
    <div>
      <h1>Caracteristicas</h1>

      <Form >
        <Form.Group className="mb-3" controlId="traçospersonagem">
          <Form.Label>Traços de Personaguem: </Form.Label>
          <Form.Control isInvalid={errors.traçospersonagem} type="text" {...register("traçospersonagem", caracteristicasValidator.traçospersonagem)} />
          {errors.traçospersonagem && <span>{errors.traçospersonagem.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="ideais">
          <Form.Label>Ideais: </Form.Label>
          <Form.Control isInvalid={errors.ideais} type="text" {...register("ideais", caracteristicasValidator.ideais)} />
          {errors.ideais && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="vinculos">
          <Form.Label>Vinculos: </Form.Label>
          <Form.Control isInvalid={errors.vinculos} type="text" {...register("vinculos", caracteristicasValidator.vinculos)} />
          {errors.vinculos && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="fraquezas">
          <Form.Label>Fraquezas: </Form.Label>
          <Form.Control isInvalid={errors.fraquezas} type="text" {...register("fraquezas", caracteristicasValidator.fraquezas)} />
          {errors.fraquezas && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="talentos">
          <Form.Label>Talentos: </Form.Label>
          <Form.Control isInvalid={errors.talentos} type="text" {...register("talentos", caracteristicasValidator.talentos)} />
          {errors.talentos && <span>Campo Obrigatório</span>}
        </Form.Group>


        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Caracteristicas