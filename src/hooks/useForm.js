import { useState } from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const setValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setAllValues = (newValue) => {
    setValues(newValue);
  } 

  const clearForm = () => setValues(initialValue);

  return {
    values,
    setValue,
    clearForm,
    setAllValues,
  };
};

export default useForm;
