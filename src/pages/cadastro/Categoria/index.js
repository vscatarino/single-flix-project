import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TemplateBase from '../../../template/TemplateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import caterogiesRepository from '../../../repositories/categories';
import { LinkCustomized, Container, Text } from '../style';
import Loading from '../../../components/Loading';

const H1 = styled.h1`
color:var(--grayDark);
`;

const LI = styled.li`
color: #F15E5E;
list-style-type: none;
padding-bottom: 4px;
&:hover{
  color:var(--primary);
  cursor:pointer;
}
`;

const UL = styled.ul`
padding: 0;
`;
const LinkCustomizedConatiner = styled.div`
display: flex;

`;
const CadastroCategoria = () => {
  const category = {
    title: '',
    description: '',
    color: '#000000',
  };

  const fetching = false;

  const { values, setValue, clearForm } = useForm(category);
  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(fetching);

  useEffect(() => {
    caterogiesRepository.getAll().then((resp) => {
      setCategories([...resp]);
    });
  }, []);

  return (
    <TemplateBase>
      <H1>
        Cadastro de Categoria:
        {values.name}
      </H1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setIsFetching(true);
        const newCategory = { title: values.name, description: values.description, color: values.color };
        caterogiesRepository.create(newCategory).then((categoryCreated) => {
          setCategories([...categories, categoryCreated]);
          clearForm();
          setIsFetching(false);
        }).catch((err) => setIsFetching(true));
      }}
      >
        <FormField label="Título da Categoria" type="text" name="name" value={values.name} onChange={setValue} />
        <FormField label="Descrição" type="textarea" name="description" value={values.description} onChange={setValue} />
        <FormField label="Cor" type="color" name="color" value={values.color} onChange={setValue} />
        {
          isFetching && (
            <Container>
              <Loading />
              <Text>cadastrando categoria...</Text>
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

      <UL>
        {categories.length >= 0 && categories.map((item, index) => (
          <LI key={`${item.name}-${index + 0}`}>
            {item.title}
          </LI>
        ))}
      </UL>

      <LinkCustomizedConatiner>
        <LinkCustomized as={Link} to="/">
          Ir para home
        </LinkCustomized>

        <LinkCustomized as={Link} to="/editar/categoria">
          Editar categoria
        </LinkCustomized>
      </LinkCustomizedConatiner>
    </TemplateBase>
  );
};

export default CadastroCategoria;
