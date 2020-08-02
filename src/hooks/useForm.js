import { useState } from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const setValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = () => setValues(initialValue);

  return {
    values,
    setValue,
    clearForm,
  };
};

export default useForm;
