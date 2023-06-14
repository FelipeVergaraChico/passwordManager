// oi
import React, { useState } from 'react';

type FormProps = {
  handleClick: () => void;
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const state = {
  serviço: '',
  login: '',
  senha: '',
  url: '',
};

export default function Form({ handleClick }: FormProps) {
  const [data, setData] = useState(state);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const PasswordCharacters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/i;
  const check = data.serviço.length > 0
  && data.login.length > 0
  && data.senha.length >= 8
  && data.senha.length <= 16
  && /[a-zA-Z]/.test(data.senha)
  && /[0-9]/.test(data.senha)
  && PasswordCharacters.test(data.senha);

  const passwordIsValid = 'valid-password-check';
  const passwordNotValid = 'invalid-password-check';
  const teste = {
    especiais: /^(?=.*[$*&@#])/i,
    numerosELetras: /^(?=.*[0-9])(?=.*[a-z])/i,
  };
  return (
    <section>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label htmlFor="serviço">Nome do serviço</label>
        <input onChange={ handleChange } id="serviço" type="text" />
        <label htmlFor="login">Login</label>
        <input onChange={ handleChange } id="login" type="text" />
        <label htmlFor="senha">Senha</label>
        <input onChange={ handleChange } id="senha" type="password" />
        <label htmlFor="url">URL</label>
        <input onChange={ handleChange } id="url" type="text" />
        <button disabled={ !check }>Cadastrar</button>
        <button onClick={ handleClick }>Cancelar</button>
      </form>
      <h2
        className={ (data.senha.length >= 8)
          ? passwordIsValid
          : passwordNotValid }
      >
        Possuir 8 ou mais caracteres
      </h2>
      <h2
        className={ (data.senha.length < 16)
          ? passwordIsValid
          : passwordNotValid }
      >
        Possuir até 16 caracteres
      </h2>
      <h2
        className={ teste.numerosELetras.test(data.senha)
          ? passwordIsValid
          : passwordNotValid }
      >
        Possuir letras e números
      </h2>
      <h2
        className={ teste.especiais.test(data.senha)
          ? passwordIsValid
          : passwordNotValid }
      >
        Possuir algum caractere especial
      </h2>
    </section>
  );
}
