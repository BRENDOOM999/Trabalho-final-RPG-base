import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import HistoriaService from '../../services/rpg/HistoriaService';
import equipamentoValidator from '../../validators/equipamentoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Historia = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const historia = HistoriaService.get(params.id)

      for (let campo in historia) {
        setValue(campo, historia[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
        HistoriaService.update(params.id, dados)
    } else {
        HistoriaService.create(dados)
    }

    navigate('/historia')
  }

  return (
    <div>
      <h1>Historia</h1>

      <Form >
        <Form.Group className="mb-3" controlId="historia">
          <Form.Label >Historia do personagem: </Form.Label>
          <Form.Control isInvalid={errors.historia} type="text" {...register("historia", equipamentoValidator.historia)} />
          {errors.historia && <span>{errors.historia.message}</span>}
        </Form.Group>

        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Historia