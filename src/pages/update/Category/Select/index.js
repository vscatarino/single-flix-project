import React from 'react';
import PropTypes from 'prop-types';
import CustomizedSelect from './style';

const Select = ({ categories, onChange }) => (
  <CustomizedSelect onChange={(event) => onChange(event)}>
    <option selected disabled value="selected-00">Escolha uma categoria para editar :)</option>
    {categories.map((category) => (
      <option key={`Category-${category.id}`} name={category.title} value={category.id}>{category.title}</option>
    ))}
  </CustomizedSelect>
);

Select.defaultProps = {
  categories: [],
};

Select.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

export default Select;
