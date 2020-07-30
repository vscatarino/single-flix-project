import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import TemplateBase from '../../../template/TemplateBase'

function CadastroCategoria() {
	const [categorias, setCategorias] = useState(['Teste'])
	const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial')
	return (
		<TemplateBase>
			<h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

			<form onSubmit={(e) => {
				e.preventDefault()
				setCategorias([...categorias, nomeDaCategoria])
			}}>

				<label>
					Nome da Categoria:
          			<input
						type="text"
						value={nomeDaCategoria}
						onChange={(event) => setNomeDaCategoria(event.target.value)}
					/>
				</label>

				<button>
					Cadastrar
        		</button>
			</form>
			<ul>
				{categorias.map((categoria, index) => {
					return (
						<li key={`${categoria}-${index}`}>
							{categoria}
						</li>
					)
				})}
			</ul>

			<Link to="/">
				Ir para home
			</Link>
		</TemplateBase>
	)
}

export default CadastroCategoria