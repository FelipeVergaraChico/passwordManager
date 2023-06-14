// oi
import React, { useState } from 'react';

type FormProps = {
  handleClick: () => void;
};

export default function Form({ handleClick }: FormProps) {
  const [data, setData] = useState({
    serviço: '',
    login: '',
    password: '',
    url: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const PasswordCharacters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/i;
  const check = data.serviço.length > 0
  && data.login.length > 0
  && data.password.length >= 8
  && data.password.length <= 16
  && /[a-zA-Z]/.test(data.password)
  && /[0-9]/.test(data.password)
  && PasswordCharacters.test(data.password);
  return (
    <form>
      <label htmlFor="Serviço">
        Nome do serviço
        <input
          id="Serviço"
          type="text"
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="Login">
        Login
        <input
          type="text"
          id="Login"
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="Password">
        Senha
        <input
          type="password"
          id="Password"
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="Url">
        URL
        <input
          type="text"
          id="Url"
          onChange={ handleChange }
          required
        />
      </label>
      <button
        disabled={ !PasswordCharacters.test(data.password)
      || !data.serviço.length || !data.login.length }
      >
        Cadastrar
      </button>
      <button onClick={ handleClick }>Cancelar</button>
    </form>
  );
}
