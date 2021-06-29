import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from './useForm';

const host = 'https://random-data-api.com';

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [count3, setCount3] = useState(10);
  const [address, setAddress] = useState({ city: '', state: '' });
  const [values, handleChange] = useForm({ email: '', password: '' });

  useEffect(async () => {
    await axios.get(`${host}/api/users/random_user`).then((response: JSON) => {
      const { data: { address: { city, state } } } = response;
      setAddress({ city, state });
    });
  }, []);

  useEffect(() => {
    document.title = `Its ${count3} now`;
  });

  return (
    <>
      <button
        type="submit"
        onClick={
                    () => setCount(
                      (currentState) => ({ ...currentState, count: currentState.count + 1 })
                    )
                }
      >
        +
      </button>
      <div>{count}</div>
      <div>{count2}</div>
      <button type="submit" onClick={() => setCount3(count3 + 1)}>+</button>
      <div>{count3}</div>
      <div>{address.state}</div>
      <input type="text" name="email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" value={values.password} onChange={handleChange} />
    </>
  );
};

export default App;
