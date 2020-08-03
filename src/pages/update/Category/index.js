import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TemplateBase from '../../../template/TemplateBase';
import { Container, Text } from '../../../components/Loading/style';
import Loading from '../../../components/Loading';
import caterogiesRepository from '../../../repositories/categories';
import useForm from '../../../hooks/useForm';
import Select from './Select';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const H1 = styled.h1`
color:var(--grayDark);`;

export const ContainerMiniLoading = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
width:73%;
@media(min-width: 768px) {
    width:25%;
  }
`;

export const TextMiniLoading = styled.span`
display:block;
color:var(--grayDark);
`;

const Category = () => {
  const category = {
    title: '',
    description: '',
    color: '#000000',
  };

  const fetching = false;

  const {
    values, setValue, setAllValues, clearForm,
  } = useForm(category);

  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(fetching);
  const [categoryToEdit, setCategoryToEdit] = useState({});

  const getCategory = (event) => {
    const id = event.target.value;
    const categoryFound = categories.find((categoryToCheck) => categoryToCheck.id.toString() === id);
    setAllValues({ title: categoryFound.title, description: categoryFound.description, color: categoryFound.color });
    setCategoryToEdit(categoryFound);
  };

  useEffect(() => {
    caterogiesRepository.getAll().then((resp) => {
      setCategories([...resp]);
    });
  }, []);

  const deleteCategory = () => {
    if (Object.keys(categoryToEdit).length === 0) {
      console.log('Selecione uma Categoria para excluir');
      return;
    }
    caterogiesRepository.deleteCategory(categoryToEdit).then((updatedCategories) => {
      setCategories([...categories, updatedCategories]);
      clearForm();
      setIsFetching(false);
    }).catch((err) => setIsFetching(true));
  };

  const editCategory = (event) => {
    event.preventDefault();
    const validCategory = categories.find((categoryToCheck) => categoryToCheck.title === values.title);
    if (!validCategory || validCategory.length === 0) {
      console.log('Edite uma categoria válida');
      return;
    }

    setIsFetching(true);

    const editedCategory = { title: values.title, description: values.description, color: values.color };
    const categoryToSend = { ...categoryToEdit, ...editedCategory };
    console.log(categoryToSend);
    caterogiesRepository.update(categoryToSend).then((updatedCategories) => {
      setCategories([...categories, updatedCategories]);
      clearForm();
      setIsFetching(false);
    }).catch((err) => setIsFetching(true));
  };
  return (
    <TemplateBase>
      {categories.length === 0 && (
      <Container>
        <Loading width={200} height={200}>Loading... </Loading>
        <Text>Loading...</Text>
      </Container>
      )}

      {categories.length >= 1 && (<Select onChange={getCategory} categories={categories} />)}

      <H1>
        Editar Categoria:
        {' '}
        {values.title}
      </H1>

      <form onSubmit={(e) => editCategory(e)}>
        <FormField label="Título da Categoria" type="text" name="title" value={values.title} onChange={setValue} required />
        <FormField label="Descrição" type="textarea" name="description" value={values.description} onChange={setValue} required />
        <FormField label="Cor" type="color" name="color" value={values.color} onChange={setValue} />
        {
     isFetching && (
     <ContainerMiniLoading>
       <Loading />
       <TextMiniLoading>editando categoria...</TextMiniLoading>
     </ContainerMiniLoading>
     )
    }
        {
     !isFetching && (
     <div>
       <Button type="button" onClick={() => deleteCategory()} background="#F15E5E">
         Excluir Categoria
       </Button>
       <Button>
         Editar
       </Button>
     </div>

     )
    }
      </form>
    </TemplateBase>
  );
};

export default Category;
