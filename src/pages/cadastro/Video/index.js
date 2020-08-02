import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TemplateBase from '../../../template/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import LINK from '../style';

const H1 = styled.h1`
color:var(--grayDark);
`;

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitle = categories.map(({ title }) => title);
  const { setValue, values } = useForm({
    title: 'Titulo Padrão',
    url: 'https://www.youtube.com/watch?v=nDxp3YEpR1E&list=PLbcp5RKTX5wNF34qxISyWY6kignmhBQRT',
    category: 'Organização',
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);
  return (
    <TemplateBase>
      <H1>Cadastro de Vídeo</H1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const categoryFound = categories.find((category) => category.title === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          category: values.category,
          categoryId: categoryFound.id,

        }).then(() => {
          // eslint-disable-next-line no-console
          console.log('Cadastro com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField label="Título do Vídeo" name="title" value={values.title} onChange={setValue} />
        <FormField label="URL do Vídeo" name="url" value={values.url} onChange={setValue} />
        <FormField label="Categoria" name="category" value={values.category} onChange={setValue} suggestions={categoryTitle} />

        <Button>
          Cadastrar
        </Button>
      </form>

      <LINK as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </LINK>
    </TemplateBase>
  );
}

export default CadastroVideo;
