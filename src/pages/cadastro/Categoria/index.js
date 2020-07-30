import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import TemplateBase from '../../../template/TemplateBase'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
	
	const category = {
		name :'',
		description: '',
		color: '#000'
	}
	const [values, setValues] = useState(category)
	const [categories, setCategories] = useState([])

	const setValue = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}
	
	return (
		<TemplateBase>
			<h1>Cadastro de Categoria: {values.name}</h1>

			<form onSubmit={(e) => {
				e.preventDefault()
				setCategories([...categories, {name: values.name, description:values.description, color:values.color}])
				setValues(category)
			}}>
				<FormField tag={'input'} label={'Nome da Categoria'} type={"text"} name={"name"} value={values.name} onChange={setValue} />
				<FormField tag={'textarea'} label={'Descrição'} type={"text"} name={"description"} value={values.description} onChange={setValue} />
				<FormField tag={'input'} label={'Cor'} type={"color"} name={"color"} value={values.color} onChange={setValue} />

				<button>
					Cadastrar
        		</button>
			</form>
			<ul>
				{categories.map((category, index) => {
					return (
						<li key={`${category.name}-${index}`}>
							{category.name}
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