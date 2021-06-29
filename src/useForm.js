import { useState } from 'react';

const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [value, (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }];
};

export default useForm;
