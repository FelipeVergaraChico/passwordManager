import React from 'react';
import { DataType } from './type';

type PassWordType = {
  data: DataType;
  onClick: (par: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PassWord({ data, onClick }:PassWordType) {
  const { serviço, login, senha, url } = data;

  return (
    <>
      <a href={ url }>{ serviço }</a>
      <p>
        { login }
      </p>
      <p>
        { senha }
      </p>
      <p>
        { url }
      </p>
      <button onClick={ onClick } id={ serviço } data-testid="remove-btn">
        Remover
      </button>
    </>
  );
}
