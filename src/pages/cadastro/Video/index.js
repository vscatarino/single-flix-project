import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TemplateBase from '../../../template/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import { LinkCustomized, Container, Text } from '../style';
import Loading from '../../../components/Loading';

const H1 = styled.h1`
color:var(--grayDark);
`;

function CadastroVideo() {
  const history = useHistory();
  const fetching = false;

  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(fetching);
  const categoryTitle = categories.map(({ title }) => title);
  const { setValue, values } = useForm({
    title: '',
    url: '',
    category: '',
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
        const videoUrl = values.url;
        const urlRegex = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/;
        const isUrlValid = urlRegex.test(videoUrl);

        setIsFetching(true);
        if (!isUrlValid) {
          console.log('A url fornecida é inválida');
          setIsFetching(false);
          return
        }
        const categoryFound = categories.find((category) => category.title === values.category);
        console.log(categoryFound);

        if (!categoryFound || (categoryFound && !categoryFound.id)) {
          console.log('É necessário fornecer uma  categoria existente.');
          setIsFetching(false);
          return
        }

        videosRepository.create({
          title: values.title,
          url: values.url,
          category: values.category,
          categoryId: categoryFound.id,

        }).then(() => {
          // eslint-disable-next-line no-console
          console.log('Cadastro com sucesso!');
          history.push('/');
        }).catch((err) => console.log('ocorreu um erro'));
      }}
      >
        <FormField label="Título do Vídeo" name="title" value={values.title} onChange={setValue} required />
        <FormField label="URL do Vídeo" name="url" value={values.url} onChange={setValue} required />
        <FormField label="Categoria" name="category" value={values.category} onChange={setValue} suggestions={categoryTitle} required />

        {
          isFetching && (
            <Container>
              <Loading />
              <Text>cadastrando vídeo...</Text>
            </Container>
          )
        }
        {
          !isFetching && (
            <Button>
              Cadastrar
            </Button>
          )
        }
      </form>

      <LinkCustomized as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </LinkCustomized>
    </TemplateBase>
  );
}

export default CadastroVideo;
