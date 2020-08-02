import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Text } from '../../../components/Loading/style';
import TemplateBase from '../../../template/TemplateBase';
import Loading from '../../../components/Loading';
import caterogiesRepository from '../../../repositories/categories';
import useForm from '../../../hooks/useForm';
import Select from './Select';


const H1 = styled.h1`
color:var(--grayDark);`;

const Category = () => {
 const [categories, setCategories] = useState([]);
 const [categorieToEdit, setCategorieToEdit] = useState({});

  const getCategory = (event) => {
    const id = event.target.value;
   const categoryFound = categories.find((category) => category.id.toString() === id);
   console.log(categoryFound)
    setCategorieToEdit(categoryFound);
  };

  useEffect(() => {
    caterogiesRepository.getAll().then((resp) => {
      setCategories([...resp]);
    });
  }, []);
  return (
    <TemplateBase>
      {categories.length === 0 && (
      <Container>
        <Loading width={200} height={200}>Loading... </Loading>
        <Text>Loading...</Text>
      </Container>
      )}
      {
     categories.length >= 1 && (
     <Select onChange={getCategory} categories={categories}/>
       
     )
    }

      <H1>
        Editar Categoria:
      </H1>
    </TemplateBase>
  );
};

export default Category;
