import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../template/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const category = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { values, setValue, clearForm } = useForm(category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://singleflix.herokuapp.com/categories';
    fetch(URL).then(async (resp) => {
      const categoryList = await resp.json();
      setCategories([...categoryList]);
    });
  }, []);

  return (
    <TemplateBase>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategories([...categories,
          { name: values.name, description: values.description, color: values.color }]);
        clearForm();
      }}
      >
        <FormField label="Título da Categoria" type="text" name="name" value={values.name} onChange={setValue} />
        <FormField label="Descrição" type="textarea" name="description" value={values.description} onChange={setValue} />
        <FormField label="Cor" type="color" name="color" value={values.color} onChange={setValue} />

        <Button>
          Cadastrar
        </Button>
      </form>
      {
        categories.length === 0 && (
        <div>
          Loading...
        </div>
        )
      }
      <ul>
        {categories.map((item, index) => (
          <li key={`${item.name}-${index + 0}`}>
            {item.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </TemplateBase>
  );
};

export default CadastroCategoria;
