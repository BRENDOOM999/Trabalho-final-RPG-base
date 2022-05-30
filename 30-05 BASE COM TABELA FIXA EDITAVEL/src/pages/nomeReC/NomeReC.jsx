import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import NomeReCService from '../../services/rpg/NomeReCService';
import nomerecValidator from '../../validators/nomerecValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const NomeReC = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const nomeReC = NomeReCService.get(params.id)

      for (let campo in nomeReC) {
        setValue(campo, nomeReC[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
        NomeReCService.update(params.id, dados)
    } else {
        NomeReCService.create(dados)
    }

    navigate('/nomeReC')
  }

  return (
    <div>
      <h1>Raça e Classes</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", nomerecValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raça">
          <Form.Label>Raça: </Form.Label>
          <Form.Control isInvalid={errors.raça} type="text" {...register("raça", nomerecValidator.raça)} />
          {errors.raça && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="classe">
          <Form.Label>Classe: </Form.Label>
          <Form.Control isInvalid={errors.classe} type="text" {...register("classe", nomerecValidator.classe)} />
          {errors.classe && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="nivel">
          <Form.Label>Nivel do personagem: </Form.Label>
          <Form.Control isInvalid={errors.nivel} type="text" {...register("nivel", nomerecValidator.nivel)} />
          {errors.nivel && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="alinhamento">
          <Form.Label>Alinhamento do personagem: </Form.Label>
          <Form.Control isInvalid={errors.alinhamento} type="text" {...register("alinhamento", nomerecValidator.alinhamento)} />
          {errors.alinhamento && <span>Campo Obrigatório</span>}
        </Form.Group>


        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default NomeReC