import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../Components/PageDefault'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cdastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
            </Link>
    </PageDefault>

  )
}

export default CadastroVideo