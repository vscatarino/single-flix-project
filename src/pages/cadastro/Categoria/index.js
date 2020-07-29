import React from 'react';
import { Link } from 'react-router-dom'
import TemplateBase from '../../../template/TemplateBase'

function CadastroCategoria() {
 return (
  <TemplateBase>
   <h1>Cadastro de Categoria</h1>

   <form>

    <label>
     Nome da Categoria:
          <input
      type="text"
     />
    </label>

    <button>
     Cadastrar
        </button>
   </form>


   <Link to="/">
    Ir para home
      </Link>
  </TemplateBase>
 )
}

export default CadastroCategoria