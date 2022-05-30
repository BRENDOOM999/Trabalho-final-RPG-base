import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import EquipamentoService from '../../services/rpg/EquipamentoService';
import equipamentoValidator from '../../validators/equipamentoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Equipamento = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const equipamentos = EquipamentoService.get(params.id)

      for (let campo in equipamentos) {
        setValue(campo, equipamentos[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
        EquipamentoService.update(params.id, dados)
    } else {
        EquipamentoService.create(dados)
    }

    navigate('/equipamentos')
  }

  return (
    <div>
      <h1>Equipamentos</h1>

      <Form >
        <Form.Group className="mb-3" controlId="item">
          <Form.Label>Itens: </Form.Label>
          <Form.Control isInvalid={errors.item} type="text" {...register("item", equipamentoValidator.item)} />
          {errors.item && <span>{errors.item.message}</span>}
        </Form.Group>

        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Equipamento