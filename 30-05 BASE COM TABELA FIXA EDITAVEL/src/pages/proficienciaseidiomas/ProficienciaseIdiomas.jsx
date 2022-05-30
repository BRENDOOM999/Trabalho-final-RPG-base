import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ProficienciaseIdiomasService from '../../services/rpg/ProficienciaseIdiomasService';
import proficienciaseidiomasValidator from '../../validators/proficienciaseidiomasValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProficienciaseIdiomas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const proficienciaseidiomas = ProficienciaseIdiomasService.get(params.id)

      for (let campo in proficienciaseidiomas) {
        setValue(campo, proficienciaseidiomas[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ProficienciaseIdiomasService.update(params.id, dados)
    } else {
      ProficienciaseIdiomasService.create(dados)
    }

    navigate('/proficienciaseidiomas')
  }

  return (
    <div>
      <h1>Proficiencias e Idiomas</h1>

      <Form >
        <Form.Group className="mb-3" controlId="idiomas">
          <Form.Label>Idiomas: </Form.Label>
          <Form.Control isInvalid={errors.idiomas} type="text" {...register("idiomas", proficienciaseidiomasValidator.idiomas)} />
          {errors.idiomas && <span>{errors.idiomas.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="kits">
          <Form.Label>kits: </Form.Label>
          <Form.Control isInvalid={errors.kits} type="text" {...register("kits", proficienciaseidiomasValidator.kits)} />
          {errors.kits && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="instrumentosmusicais">
          <Form.Label>Instrumentos Musicais: </Form.Label>
          <Form.Control isInvalid={errors.instrumentosmusicais} type="text" {...register("instrumentosmusicais", proficienciaseidiomasValidator.instrumentosmusicais)} />
          {errors.instrumentosmusicais && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="armaduras">
          <Form.Label>Armaduras: </Form.Label>
          <Form.Control isInvalid={errors.armaduras} type="text" {...register("armaduras", proficienciaseidiomasValidator.armaduras)} />
          {errors.armaduras && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="armas">
          <Form.Label>Armas: </Form.Label>
          <Form.Control isInvalid={errors.armas} type="text" {...register("armas", proficienciaseidiomasValidator.armas)} />
          {errors.armas && <span>Campo Obrigatório</span>}
        </Form.Group>


        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default ProficienciaseIdiomas