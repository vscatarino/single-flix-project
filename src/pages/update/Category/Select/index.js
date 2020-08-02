import React from 'react';
import PropTypes from 'prop-types';
import CustomizedSelect from './style';

const Select = ({ categories, onChange }) => (
  <CustomizedSelect onChange={(event) => onChange(event)}>
    {categories.map((category) => (
      <option key={`Category-${category.id}`} value={category.id}>{category.title}</option>
    ))}
  </CustomizedSelect>
);

Select.defaultProps = {
  categories: [],
};

Select.propTypes = {
  categories: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select
